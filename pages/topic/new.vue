<template lang="pug">
  div
    div.topic-header.row
      div.col
        nuxt-link(to="/")
          img.logo(src="../../assets/img/logo-50.png")
      div.col
        h3 发布文章  
      div.col.right
        el-button 发布
    div.container
      div.tip 
        strong 发布需知：
        span 文章主要内容必须围绕前端框架的用法、经验等方面去展开。本着对用户负责的态度，对于未达到质量要求的文章将不会审核通过！
      div.upload-cover
        icon(name="camera")
        upload
      input.title-txt(type="text" placeholder="请输入标题")
      editor(flag="demo")
</template>

<script>
  import Upload from '~components/upload.vue'
  export default {
    components: {
      Upload
    }
  }
</script>

<style lang="scss">
  .page-topic-new {
    header {
      display: none;
    }

    .topic-header {
      z-index: 2000;
      margin-bottom: 0;
      position: fixed;
      width: 100%;
      font-size: 1.1rem;
      font-weight: bold;
      background-color: rgba(255, 255, 255, 0.97);
      border-bottom: #EEE 1px solid;
      top: 0;
      padding: 5px 10px;

      h3 {
        text-align: center;
      }

      .logo {
        width: 30px;
        height: 30px;
      }

      .right {
        text-align: right
      }
    }

    .container {
      max-width: 900px;
    }

    .tip {
      margin-top: 30px;
      padding: 10px;
      background-color: rgba(247, 186, 42, 0.33);
      color: #af8934;
    }

    .title-txt {
      font-weight: bold;
      font-size: 40px;
      border: 0;
      outline: none;
      margin: 20px 0;
    }

    .upload-cover {
      height: 180px;
      background-color: #f7f8f9;
      text-align: center;
      padding-top: 70px;
      position: relative;
      margin-top: 30px;

      svg {
        width: 50px;
        height: 50px;
        fill: #DDD
      }
    }
  }
</style>
