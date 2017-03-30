<template lang="pug">
  footer
    transition(name="custom-classes-transition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUpBig")  
      el-card.box-card(v-show="$store.state.isShowLogin")
        div.box-header(slot="header")
          span(style="line-height: 36px;") 登录（免注册）
          a.close-btn(href="javascript:void(0)"  @click="hideLogin()")
            icon.pull-right(name="close")
        div.form-area
          el-form(ref="form")
            el-form-item
              el-input(placeholder="邮箱")
            el-form-item
              el-input(placeholder="密码") 
            el-form-item
              el-button(type="primary"  class="login-btn") 登录
          div.github-login
            a(href="")
              icon(name="github")   
</template>


<style lang="scss" scoped>
  footer {
    margin-top: 50px;
  }
  .box-card {
    position: fixed;
    top: 60px;
    width: 320px;
    left: 50%;
    margin-left: -160px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .box-header {
    text-align: center;
    font-size: 1.1rem;
  }

  .form-area {
    padding: 20px;
  }

  .login-btn {
    width: 100%
  }

  .close-btn {
    float: right
  }

  .github-login {
    text-align: center;

    svg {
      width: 60px;
      height: 60px;
    }
  }

</style>
