<template lang="pug">
  div
    div.topic-header
      div.row.align-items-center
        div.col
          nuxt-link(to="/")
            img.logo(src="../../assets/img/logo-50.png")
        div.col
          h3 发布文章  
        div.col.right
          el-button(class="send-btn" @click="submit")
            icon(name="send")
            span 发布
    div.container
      div.tip 
        strong 发布需知：
        span 文章主要内容必须围绕前端框架的用法、经验、新闻等方面去展开。本着对用户负责的态度，对于未达到质量要求的文章将不会审核通过！
      div.upload-cover(v-bind:style="newTopic.cover ? 'background-image:url(' + cdn(newTopic.cover, 'topic') + ')' : ''")
        icon(name="camera")
        upload(v-model="newTopic.cover" folder="topic")
      input.title-txt(type="text" placeholder="请输入标题" v-model="newTopic.title")
      editor(flag="demo" v-model="newTopic.con" hideFooter="true" hideBorder="true")
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    data () {
      return {
        newTopic: {
          cover: null,
          title: '',
          con: '',
          typcd: 'TOPIC'
        }
      }
    },
    methods: {
      submit: function () {
        this.$confirm('确认写作完毕？提交后将交由管理审核！', '发布确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios().post('topic', this.newTopic).then(res => {
            if (res.data.status) {

            }
          })
        }).catch(() => {
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
      padding: 0 20px;
      
      .row {
        height: 70px;
      }

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
      max-width: 800px;
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
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      background-position: center center;

      svg {
        width: 50px;
        height: 50px;
        fill: #DDD
      }
    }

  }
</style>
