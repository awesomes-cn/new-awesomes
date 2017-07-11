<template lang="pug">
  div.repo-detail
    banner(:repo="repo")

    div.container
      div.con-headers
        span 暂无中文翻译，我来翻译
      div.bar
      div.clearfix
      // dianp(:repo="repo")
      article(v-html="marked(repo.about_zh || repo.about)")
      div.com-wrap
        comment(flag="repo-comment" typ="REPO" v-bind:idcd="repo.id")
</template>

<script>
  import axios from '~plugins/axios'
  import Banner from '~components/repo/banner'
  import Comment from '~components/comment.vue'
  // import Dianp from '~components/repo/dianp.vue'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get(`repo/${params.owner}/${params.name}`)
      .then(res => {
        return {
          repo: res.data
        }
      })
    },
    head () {
      return {
        title: `${this.repo.alia} - Awesomes`,
        meta: [
          { hid: 'description', name: 'description', content: this.repo.description_cn },
          { hid: 'keywords', name: 'keywords', content: `${this.repo.alia},${this.repo.alia}源码,${this.repo.alia}下载,${this.repo.alia}文档,${this.repo.alia}资源库` }
        ]
      }
    },
    components: {
      Banner,
      Comment
      // Dianp
    }
  }
</script>

<style lang="scss">
  .repo-detail {

    .container {
      max-width: 1000px
    }
    article {
      font-size: 15px;
      border: #DDD 1px solid;
      border-top: #EEE 1px solid;
      padding: 20px;
      margin-top: 20px;
      line-height: 27px;
      word-break: break-all;

      img {
        max-width: 100%
      }
    }

    .con-headers {
      margin-top: 10px;
      border: #EEE 1px solid;
      border-bottom: 0;
      border-radius: 4px;
      padding: 15px 20px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .bar {
      height: 10px;
      background-color: #EEE;
      float: left;
      width: 100%;
    }

    .com-wrap {
      padding: 50px 0px;
    }
  }
</style>
