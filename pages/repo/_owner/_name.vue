<template lang="pug">
  div
    banner(:repo="repo")

    div.container
      div.con-headers
        span 暂无中文翻译，我来翻译
      div.bar  
      article(v-html="marked(repo.about)")

      div.com-wrap
        comment(flag="repo-comment")
</template>

<script>
  import axios from '~plugins/axios'
  import Banner from '~components/repo/banner'
  import Comment from '~components/comment.vue'
  export default {
    asyncData ({ req, params, query }) {
      return axios.get(`repo/${params.owner}/${params.name}`)
      .then(res => {
        return {
          repo: res.data
        }
      })
    },
    components: {
      Banner,
      Comment
    }
  }
</script>

<style lang="scss" scoped>
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
    padding: 50px 10px;
  }
</style>
