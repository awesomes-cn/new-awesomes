<template lang="pug">
  div
    div.mem-banner
      div.container
        div.mem-navs
          nuxt-link(to="/mem" v-if="session") 收藏
          nuxt-link(to="/mem" v-if="session") 文档
          nuxt-link(to="/mem" v-if="session") 代码
          nuxt-link(to="/mem" v-if="session") 评论

      nuxt-link(to="/mem" class="tx-link") 
        img.tx(:src="cdn(mem.avatar, 'mem')")
      h4 {{mem.nc}}

      div.info
        span
          icon(name="location")
          span 北京
        span(title="公司")
          icon(name="company")
          span Awesomes
        a(href="")
          icon(name="home")
          span 个人主页
        a(href="")
          icon(name="github")
          span GitHub  
        

    div.container.conarea
      nuxt-child  
</template>

<script>
  import axios from '~plugins/axios'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get(`mem/${params.id}`).then(res => {
        return {
          mem: res.data
        }
      })
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    }
  }
</script>


<style lang="scss" scoped>
  .mem-banner {
    text-align: center;
    padding: 50px;
    background: #f7f8fa;

    .tx-link {
      display: inline-block;
      border-radius: 100%;
      background-color: rgba(255, 255, 255, 0.25);
      padding: 10px;
      height: 120px;
    }
    .tx {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      margin-bottom: 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.39);
    }

    .info {
      line-height: 20px;
      margin-top: 20px;
      & > a, & > span {
        display: inline-block;
        padding: 0 10px;
        color: #9e9e9e
      }
      svg {
        float: left;
        margin-right: 3px;
      }
    }
  }

  .conarea {
    max-width: 900px;
  }

  .mem-navs {
    text-align: right;
    display: block;
    // border: #DDD 1px solid;
    border-left: 0;
    border-right: 0;
    padding: 5px;

    a {
      padding: 0 20px;
      font-weight: bold
    }
  }
</style>
