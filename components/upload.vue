<template lang="pug">
  div.upload-box
    input(type="file"  @change="uploadChange")
    canvas
</template>

<script>
  import $ from '~assets/js/jquery-vendor'
  import axios from '~plugins/axios'
  export default {
    methods: {
      // 选择上传图片  初始化
      uploadChange: function (event) {
        let _self = this
        let outer =  $(event.target).closest('.upload-box')
        let mycanvas = outer.find('canvas')
        var fileList = $(event.target)[0].files[0]
        var oFReader = new FileReader()
        oFReader.readAsDataURL(fileList)
        oFReader.onload = function () {
          var img = new Image()
          img.src = oFReader.result
          img.onload = function() {
             var createCanvas = mycanvas[0].getContext("2d")
             mycanvas.attr('width', img.width)
             mycanvas.attr('height', img.height)
             createCanvas.drawImage(img, 0, 0)
             _self.uploadGo(mycanvas)
          }
        }
      },

      // 上传
      uploadGo: function (can) {
        let _self = this
        let data = can[0].toDataURL()
        data = data.split(',')[1]
        data = window.atob(data)
        let ia = new Uint8Array(data.length)
        for (let i = 0; i < data.length; i++) {
            ia[i] = data.charCodeAt(i)
        }
        let blob = new Blob([ia],{type: "image/png", endings: 'transparent'})
        let fd = new FormData()
       
        
        axios.get('uptoken', { prefix: this.prefix }).then(data => {
          fd.append('file', blob, data.filename)
          fd.append('key', data.filename)
          fd.append('token', data.token)
          let httprequest = new XMLHttpRequest()

          httprequest.open('POST', 'http://up.qiniu.com/', true)
          httprequest.send(fd)
          httprequest.onreadystatechange= function () {
            if(httprequest.status == 200 && httprequest.readyState == 4){
               _self.uploadAct.state = 'end'
               console.log(httprequest.responseText);
            }
          }
        })
      }
    }
  }
</script>


<style lang="scss" scoped>
  .upload-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;

    input[type="file"] {
      width: 100%;
      height: 100%;
      z-index: 10;
      cursor: pointer;
      opacity: 0;
    }

    canvas {
      display: none;
    }
  }
</style>
