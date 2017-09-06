<template lang="pug">
  div
    p 
      span Awesomes.cn 欢迎高质量的站点和我们交换链接，我们提供首页和内页的双重链接。请前往我们的 
      a(href="http://weibo.com/awesomescn") 新浪微博 
      span 私信我们。

    p 请提供给我们链接名和链接地址（以下排名不分先后）
    div.links
      a(:href="link.url" v-for="link in friends" target="_blank")  {{link.name}}
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    data () {
      return {
        friends: []
      }
    },
    created () {
      let _self = this
      axios().get('site/friendlinks').then(res => {
        _self.friends = res.data
      })
    }
  }
</script>

<style lang="scss" scoped>
  .links {
    a {
      padding: 5px 10px;
      border: #EEE 1px dashed;
      margin-top: 10px;
      margin-right: 10px;
      display: inline-block;
    }
  }
</style>
