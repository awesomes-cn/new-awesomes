<template lang="pug">
  div
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
            el-input(placeholder="查找库"  icon="search")

        div.right
          a(href="" v-if="session")
            icon(name="more")

            div.memeus
              nuxt-link(to="/about") 我的收藏
              nuxt-link(to="/about") 个人资料
              nuxt-link(to="/about"  @click="logout()") 注 销

          a(href="javascript:void(0)" @click="showLogin()" v-if="!session") 登录
          nuxt-link(to="/mem" v-if="session") 
            img.tx(:src="cdn(session.avatar, 'mem')")
            

          a(href="" v-show="session")
            icon(name="bell")

          a(href="")
            icon(name="plus")    
    
    // 登录框
    transition(name="custom-classes-transition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUpBig")  
      el-card.box-card(v-show="$store.state.isShowLogin")
        div.box-header(slot="header")
          span(style="line-height: 36px;") 登录（免注册）
          a.close-btn(href="javascript:void(0)"  @click="hideLogin()")
            icon.pull-right(name="close")
        div.form-area
          el-form(ref="form")
            el-form-item
              el-input(placeholder="邮箱" v-model="uid")
            el-form-item
              el-input(placeholder="密码"  v-model="pwd" type="password") 
            el-form-item
              el-button(type="primary"  class="login-btn" @click="login" native-type="submit") 登录
          div.github-login
            a(href="")
              icon(name="github")   

</template>

<script>
  import axios from '~plugins/axios'
  let store = require('store')
  let expirePlugin = require('store/plugins/expire')
  store.addPlugin(expirePlugin)
  export default {
    data () {
      return {
        uid: '',
        pwd: ''
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      login: function () {
        let self = this
        axios.post(`login`, { uid: this.uid, pwd: this.pwd }).then(res => {
          console.log(res.data)
          if (!res.data.status) {
            self.$message({
              message: '登录失败，用户名或密码错误',
              type: 'error'
            })
            store.set('awlogin', null)
          } else {
            self.$message({
              message: '登录成功！',
              type: 'success'
            })

            store.set('awlogin', { token: res.data.token, mem: res.data.mem }, 1000 * 60 * 60 * 3)
            self.hideLogin()
            this.$store.commit('setUser', res.data.mem)
          }
        })
      },
      logout: function () {
        store.set('awlogin', null)
        this.$store.commit('setUser', null)
      }
    },
    created () {
      let session = (store.get('awlogin') || {}).mem
      if (!session) {
        axios.get('session').then(res => {
          if (res.data.status) {
            store.set('awlogin', { token: res.data.token, mem: res.data.mem }, 1000 * 60 * 60 * 3)
          } else {
            store.set('awlogin', null)
          }
          this.$store.commit('setUser', res.data.mem)
        })
      }
    }
  }
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
    position: relative;

    a {
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

  .memeus {
    width: 150px;
    background-color: #FFF;
    position: absolute;
    top: 60px;
    right: 0;
    border: #DDD 1px solid;
    border-top: 0;
    text-align: center;
    display: none;

    a {
      display: block;
      border-top: #EEE 1px solid;
      height: auto;
      padding: 20px 0;
    }
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

  .box-card {
    position: fixed;
    top: 60px;
    width: 320px;
    left: 50%;
    margin-left: -160px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #FFF;
    z-index: 1000
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
    * {
      display: inline-block;
    }
    svg {
      width: 60px;
      height: 60px;
    }
  }


</style>
