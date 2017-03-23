<template lang="pug">
  footer
    el-card.box-card
      div.box-header(slot="header")
        span(style="line-height: 36px;") 登录（免注册）
        a.close-btn(href="javascript:void(0)")
          icon.pull-right(name="close")
      div.form-area
        el-form(ref="form")
          el-form-item
            el-input(placeholder="邮箱")
          el-form-item
            el-input(placeholder="密码") 
          el-form-item
            el-button(type="primary" @click="onSubmit" class="login-btn") 登录
        div.github-login
          a(href="")
            icon(name="github")   
</template>


<style lang="scss" scoped>
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
