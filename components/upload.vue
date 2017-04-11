<template lang="pug">
  div.upload-box
    input(type="file"  @change="uploadChange")
</template>

<script>
  import $ from '~assets/js/jquery-vendor'
  import aliyun from '~assets/js/aliyun'
  export default {
    props: ['value', 'folder'],
    methods: {
      // 选择上传图片
      uploadChange: function (event) {
        let self = this
        aliyun.upload($(event.target)[0].files[0], this.folder).then(res => {
          self.$emit('input', res.name.split('/').pop())
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
