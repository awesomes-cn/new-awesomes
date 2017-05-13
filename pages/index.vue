<template lang="pug">
  div.home-index
    div.container
      div.row
        div.col-md-7
          div.news-wraper
            div.banner
              h4 前端情报局
              nuxt-link(to="/news") 我有料报
            div.inner
              news(:newss="newss" flag="index-list")  
          div.more-news
            nuxt-link(to="/news") 查看更多
          // topics(:topics="latestTopics")
          // div.more-topics
          //   nuxt-link(to="topics") 更多优选
            
        div.col-md-5
          div.card.search
            input.search-txt(type="text" placeholder="搜索前端库" v-model="searchKey" @keyup.enter="searchGo")
            span(@click="searchGo")
              icon(name="search")
          a.card(href="")
            icon(name="chrome" class="chrome-logo" width="50px")
            h2 寻找前端插件，一步到位
          
          div.card
            p 看看大牛都在用什么前端库
            div.usingms
              div.mem-item(v-for="mem in usingmems")
                nuxt-link(:to="/mem/ + mem.id" )
                  img.tx(:src="cdn(mem.avatar, 'mem')")
                div
                  p {{mem.nc}}
                  p 
                    span 在用 
                    nuxt-link(to="" v-for="i in [0, 1]") {{mem.usings[i].repo.alia}}
                    span 等{{mem.usings.length}}个前端库
                
          a.card(href="")
            img(src="../assets/img/jsonon.png")
          
          
                  
</template>


<script>
  import axios from '~plugins/axios'
  import Topics from '~components/topic/list.vue'
  import News from '~components/repo/news.vue'
  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    data () {
      return {
        usingmems: []
      }
    },
    asyncData () {
      return Promise.all([
        axios().get('news?limit=10'),
        axios().get('topic?limit=6&typcd=TOPIC')
      ]).then(([res1, res2]) => {
        let newss = res1.data.items
        newss.forEach(item => {
          item.isShowCom = false
        })
        return {
          newss: newss
        }
      })
    },
    components: {
      Topics,
      News
    },
    methods: {
      // 搜索
      searchGo: function () {
        if (this.searchKey.trim() === '') {
          return
        }
        this.$router.push({path: '/search', query: {q: this.searchKey}})
      },

      // 获取最知名的几个前端开发者的在用
      hotUsing: function () {
        axios().get('/weuse?limit=4').then(res => {
          this.usingmems = res.data.items
        })
      }
    },
    created () {
      this.hotUsing()
    }
  }
</script>


<style lang="scss">
 .page-index {
   background: #f7f8fa;

  .home-index {
    padding-top: 20px;
  }
  .card {
    display: block;
    background-color: #FFF;
    padding: 30px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%
    }

    h2 {
      padding: 10px 0;
    }
  }

  .search {
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .search-txt {
      padding: 10px;
      flex-grow: 1;
      border: 0;
      outline: none;
      font-size: 1.8rem
    }
    & > span {
      cursor: pointer;
    }
  }

  .usingms {
    .mem-item {
      display: flex;

    }
    .tx {
      width: 40px;
      border-radius: 100%
    }
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

  .chrome-logo {
      float: left;
      animation: spin 2s infinite linear;
      margin-right: 20px;
  }


  .more-topics {
    padding: 20px 0;
    text-align: center
  }

  .more-news {
    background-color: #FFF;
    text-align: center;
    padding: 20px;
  }

  .news-wraper {
    background-color: #FFF;
    .inner {
      padding:0 30px;
    }
    .banner {
      padding: 20px;
      border-bottom: #EEE 1px solid;

      * {
        display: inline-block
      }

      a {
        color: #8590a6;
        float: right
      }
    }
    }
 }
 
</style>
