<template lang="pug">
  header
    div.container
      nav(class="navbar navbar-toggleable navbar-light")
        nuxt-link(to="/" class="navbar-brand")
          img.logo(src="../assets/img/logo-50.png")
          span.logo-txt wesomes

        div.collapse.navbar-collapse
          div(class="navbar-nav")
            nuxt-link(to="/repos/Applications/frameworks" class="nav-item nav-link") 前端库
            nuxt-link(to="/weuse"  class="nav-item  nav-link") 大牛在用
            nuxt-link(to="/subjects"  class="nav-item nav-link") 专题  
            nuxt-link(to="/topics"  class="nav-item nav-link") 优选+  
            nuxt-link(to="/rank"  class="nav-item nav-link") 前端TOP100
</template>
<script>
  export default {
  }
</script>

<style lang="scss">
  header {
    border-radius: 0;
    z-index: 2000;
    box-shadow: 1px 1px 1px #eeeeee;
    margin-bottom: 0;
    position: fixed;
    width: 100%;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: rgba(254, 254, 254, 0.97);

    a.nuxt-link-active {
      color: #da552f;
    }

    .logo {
      width: 25px;
      height: 25px;
    }

    .logo-txt {
      color: #da552f;
      padding-left: 8px;
      font-size: 1.3rem
    }
  }
</style>
