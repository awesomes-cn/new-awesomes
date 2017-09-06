<template lang="pug">
  transition(name="custom-classes-transition" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp")  
    div.login-panel(v-show="$store.state.isShowLogin")
      div.title
        h4 登录
        a.close(href="javascript:void(0)" @click="hideLogin()")
          icon(name="close")
      div.github-login
        a(href="javascript:void(0)" @click="thirtyLogin('https://api.awesomes.cn/auth/login')")
          icon(name="github" width="70px")
      div
        button.btn.btn-default.sub-btn(type="submit" @click="showEmailLogin = true" v-show="!showEmailLogin") 切换到邮箱登录
      template(v-if="showEmailLogin")    
        div.form-group
          input.form-control(type="text" v-model="uid" placeholder="邮箱" @keyup.enter="submit")

        div.form-group
          input.form-control(type="password" v-model="pwd" placeholder="密码" @keyup.enter="submit")

        div.form-group
          button.btn.btn-primary.sub-btn(@click="login" type="submit") 登录
      
</template>

<script>
  import axios from '~/plugins/axios'
  import Cookie from 'js-cookie'
  export default {
    data () {
      return {
        uid: '',
        pwd: '',
        showEmailLogin: false
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      // 登录
      login: function () {
        let self = this
        if (this.uid.trim() === '' || this.pwd.trim() === '') {
          this.$alert('danger', '请正确填写用户名和密码')
          return
        }
        axios().post(`session/login`, { uid: this.uid, pwd: this.pwd }).then(res => {
          if (!res.data.status) {
            this.$alert('danger', '登录失败，用户名或密码错误')
            Cookie.set('awlogin', null, {domain: window.location.hostname.replace(/^[A-Za-z]+/, '')})
          } else {
            this.$alert('success', '登录成功！')
            Cookie.set('awlogin', res.data.token, {domain: window.location.hostname.replace(/^[A-Za-z]+/, '')})
            self.hideLogin()
            this.$store.commit('setUser', res.data.mem)
          }
        })
      },
      thirtyLogin: function (url) {
        window.open(url, 'newwindow', 'width=500,height=500')
      }
    },
    created () {
      if (process.BROWSER_BUILD) {
        window.document.domain = window.location.hostname.replace(/^[A-Za-z]+\./, '')
      }
    }
  }
</script>

<style lang="scss" scoped>
.login-panel {
    padding: 50px;
    padding-top: 30px;
    background-color: #FFF;
    position: fixed;
    z-index: 80;
    width: 100%;
    max-width: 350px;
    left: 0;
    right: 0;
    margin: auto;
    top: 60px;
    border-bottom: #EEE 1px solid;
    box-shadow: 1px 1px 1px rgba(238, 238, 238, 0.54);
    border-left: #FAFAFA 1px solid;

    .title {
      text-align: center;
      padding-bottom: 20px;
    }

    .close {
      position: absolute;
      right: 15px;
      top: 15px;
    }
    .sub-btn {
      width: 100%
    }

    .github-login {
      text-align: center;
      padding: 20px 0;
      margin-bottom: 20px;
    }
  }
</style>
