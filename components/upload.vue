<template lang="pug">
  button.btn.btn-primary.upload-box(:class="this.uploading ? 'uploading' : ''")
    input(type="file"  @change="uploadChange")
    div.txt 
      span {{ uploading ? '上传中....' : (txt || '上传图片')}}
    div.canvas-wraper
</template>

<script>
  import $ from '~assets/js/jquery-vendor'
  import axios from '~plugins/axios'
  let uploadImg, outer, can
  export default {
    props: ['value', 'folder', 'txt'],
    data () {
      return {
        filepath: '',
        uploading: false
      }
    },
    methods: {
      // 选择上传图片  初始化
      uploadChange: function (event) {
        this.uploading = true
        let _self = this
        outer =  $(event.target).closest('.upload-box')
        this.filepath = $(event.target).val()
        var fileList = $(event.target)[0].files[0]
        var oFReader = new FileReader()
        oFReader.readAsDataURL(fileList)
        oFReader.onload = function () {
          var img = new Image()
          img.src = oFReader.result
          uploadImg = img
          uploadImg.onload = function() {
             _self.load({}, [0, 0])
          }
        }
      },

      // 加载图片
      load: function (canArgs, cutArgs) {
        canArgs = canArgs || {}
        let _self = this
        let canwrap = outer.find('.canvas-wraper')
        canwrap.empty()
        can = $('<canvas style="display: none">')
        canwrap.append(can)
        can.attr('width',  canArgs.w ||  uploadImg.width)
        can.attr('height', canArgs.h ||  uploadImg.height)


        var createCanvas = can[0].getContext("2d")
        
        cutArgs.unshift(uploadImg)
        createCanvas.drawImage.apply(createCanvas, cutArgs)
        this.uploadGo()
      },

      // 上传
      uploadGo: async function () {
        let _self = this
        let data = can[0].toDataURL()
        data = data.split(',')[1]
        data = window.atob(data)
        let ia = new Uint8Array(data.length)
        for (let i = 0; i < data.length; i++) {
            ia[i] = data.charCodeAt(i)
        }
        let blob = new Blob([ia],{type:"image/png", endings:'transparent'})
        let fd = new FormData()
        fd.append('folder', this.folder)
        fd.append('filepath', this.filepath)
        fd.append('file', blob, data.filename)
        let res = await axios().post('upload', fd)
        this.uploading = false
        this.$emit('input', res.data.filename)
      }
    }
  }
</script>


<style lang="scss" scoped>
  .upload-box {
    cursor: pointer;
    position: relative;

    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      cursor: pointer;
      opacity: 0;
      z-index: 10;
      display: block;
    }

    &.uploading {
      input[type="file"] {
        z-index: -100
      }
    }

    .txt {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
