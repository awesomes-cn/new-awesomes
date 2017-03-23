<template lang="pug">
  header
    div.container
      div.left
        nuxt-link(to="/")
          img.logo(src="../assets/img/logo-50.png")
          span.logo-txt wesomes
        nuxt-link(to="/about") 大牛在用
        nuxt-link(to="/about") 专题  
        nuxt-link(to="/about") 版本更新  
        nuxt-link(to="/about") 前端TOP100
        a
          el-input(v-model="input" placeholder="查找库"  icon="search")

      div.right
        a(href="javascript:void(0)" @click="showLogin()") 登录
        // a(href="")
        //   icon(name="more")

        // a(href="") 
        //   img.tx(src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/170107150059-97-1.jpg")    
        
        a(href="")
          icon(name="plus")  

        // a(href="")
        //   icon(name="bell")  

</template>

<script>
 
</script>

<style lang="scss" scoped>
  header {
    border-radius: 0;
    z-index: 2000;
    box-shadow: 1px 1px 2px #eeeeee;
    margin-bottom: 0;
    position: fixed;
    width: 100%;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: #FFF
  }

  .container {
    display: flex
  }

  .left, .right {
    display: flex
  }

  .right {
    flex-grow: 1;
    flex-direction: row-reverse;

    a {
      padding: 0 10px;
    }
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
  

  a {
    text-decoration: none;
    height: 60px;
    color: #7b7676;
    padding: 0 20px;
    display: flex;
    align-items: center;
    &:hover {
      color: #da552f
    }
  }

  .tx {
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }


</style>
