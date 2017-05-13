<template lang="pug">
  div.container
    div.site-wraper
      div.site-menus
        nuxt-link(to="/site/about") 关于
        nuxt-link(to="/site/history") 发展历程
        nuxt-link(to="/site/contact") 联系我们
        nuxt-link(to="/site/link") 友情链接
        nuxt-link(to="/site/capa") 信息无障碍
      div.content  
        nuxt-child
</template>
<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .site-wraper {
    padding: 30px;
    display: flex;
    font-size: 1.1rem;

    
  }
  .site-menus {
    width: 150px;
    flex-shrink: 0;
    a {
      display: block;
      padding: 15px;

      &.router-link-exact-active {
        color: #da552f
      }
    }
  }
  .content {
    padding: 50px;
    border: #DDD 1px dashed;
    margin-left: 10px;
    line-height: 28px;
    flex-grow: 1;

    a {
      color: #428bca
    }
  }
</style>
