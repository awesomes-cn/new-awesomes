<template lang="pug">
  div
    header
      div.container
        div.left
          nuxt-link(to="/")
            img.logo(src="../assets/img/logo-50.png")
            span.logo-txt.hide-small wesomes
          a(href="javascript:void(0)" @click="isHideMenu = !isHideMenu" class="show-small")
            icon(name="list" width="16px")
        div.middle
          div.inner(:style="isHideMenu ? 'height: 60px' : ''")
            nuxt-link(to="/repos/Applications/frameworks") 前端库
            nuxt-link(to="/weuse") 大牛在用
            nuxt-link(to="/subjects") 专题  
            // a(href="http://news.awesomes.cn") 情报局
            nuxt-link(to="/releases" ) 新版发布
            nuxt-link(to="/rank" ) 前端TOP100
            

        div.right
          a.hide-small(href="javascript:void(0)" v-show="session" @mouseover="showmemeus = true" @mouseleave="showmemeus = false")
            icon(name="more" width="20px")

          div.memeus(v-show="showmemeus" @mouseover="showmemeus = true" @mouseleave="showmemeus = false")
            nuxt-link(:to="'/mem/' + (session || {}).id + '/marks/repos'") 我的收藏
            nuxt-link(:to=`'/mem/' + (session || {}).id + '/profile'`) 个人资料
            a(href="javascript:void(0)" @click="logout()") 注 销

          a(href="javascript:void(0)" @click="showLogin()" v-show="!session") 登录

          nuxt-link(:to="'/mem/' + (session || {}).id" v-show="session") 
            img.tx(:src="cdn((session || {}).avatar, 'mem', 'repo-50')")
            

          nuxt-link.hide-small.notifiys(to="/notifications" v-show="session" v-bind:class="$store.state.unreadNotifiy > 0 ? 'active' : ''")
            icon(name="bell"  width="22px")
            span.num(v-show="$store.state.unreadNotifiy > 0") {{$store.state.unreadNotifiy}}

          nuxt-link(to="/repo/new")
            icon(name="plus"  width="20px")    

          div.hide-small.search-top
            input.search-txt(type="text" placeholder="搜索前端库" v-model="searchKey" @keyup.enter="searchGo")
            span(@click="searchGo")
              icon(name="search" width="15px")
    
    // 登录框
    login
    
</template>

<script>
  import Cookie from 'js-cookie'
  import Login from './login'
  export default {
    data () {
      return {
        uid: '',
        pwd: '',
        isHideMenu: true,
        showmemeus: false,
        searchKey: ''
      }
    },
    watch: {
      '$route': function () {
        this.searchKey = this.$route.query.q
      }
    },
    components: {
      Login
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      // 注销
      logout: function () {
        Cookie.set('awlogin', null, {domain: window.location.hostname.replace(/^[A-Za-z]+/, '')})
        this.$store.commit('setUser', null)
        this.$alert('success', '注销成功！')
      },
      // 搜索
      searchGo: function () {
        if (this.searchKey.trim() === '') {
          return
        }
        this.$router.push({path: '/search', query: {q: this.searchKey}})
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
    background-color: rgba(254, 254, 254, 0.97);

    a.nuxt-link-active {
      color: #da552f;
    }

    .container {
      display: flex;
      align-items: flex-start;
    }
  }

  .notifiys {
    &.active {
      color: #da552f
    }
  }

  .search-top {
    border: #EEE 1px solid;
    margin-right: 20px;
    .search-txt {
      padding: 8px 10px;
      border: none;
      outline: none;
      color: #ababab;
      width: 150px;
    }

    & > span {
      margin:0 5px;
      color: #AAA;
      cursor: pointer;
    }
  }

  .left, .middle .inner, .right {
    display: flex;
  }

  .left {
    flex-shrink: 0
  }
  
  .right {
    align-items: center;
    flex-shrink: 0
  }

  .middle {
  }

  .middle .inner{
    flex-wrap: wrap;
    overflow: hidden;

    @media (max-width: 576px) {
      display: block;
    }

  }

  .swiper-container {
      width: 100%;
      height: 50px;
  }

  .right {
    flex-grow: 1;
    flex-direction: row-reverse;
    position: relative;
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
    // display: none;

    a {
      display: block;
      border-top: #EEE 1px solid;
      height: auto;
      padding: 15px 0;
    }
  }
  

  a {
    text-decoration: none;
    height: 60px;
    color: #7b7676;
    padding: 0 15px;
    display: flex;
    align-items: center;
    &:hover {
      color: #da552f
    }
    
  }

  .right > a {
    padding: 0 15px;
  }

  .left a, .right a {
    @media (max-width: 576px) {
      padding: 0 10px;
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
  }

  .show-small {
    display: none;
  }

  @media (max-width: 1000px) {
    .hide-small {
      display: none;
    }
    .show-small {
      display: flex;
    }
  }
</style>
