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
          nuxt-link(to="extension" class="card")
            icon(name="chrome" class="chrome-logo" width="50px")
            h2 寻找前端插件，一步到位
          
          div.card
            h5.title
              nuxt-link(to="/weuse")
                icon(name="niu" width="25px") 大牛在用
            div.usingms
              div.mem-item(v-for="mem in usingmems")
                nuxt-link(:to="/mem/ + mem.id" )
                  img.tx(:src="cdn(mem.avatar, 'mem')")
                div.right-detail
                  nuxt-link(:to="/mem/ + mem.id" class="mem-nc") {{mem.nc}}
                  p 
                    span 在用 
                    nuxt-link(to="" v-for="i in [0, 1]" class="repo") {{mem.usings[i].repo.alia}}
                    span 等
                    span.num {{mem.usings.length}}
                    span 个前端库
            nuxt-link(to="/weuse" class="more") 查看更多大牛在用    
                
          a.card(href="")
            img(src="../assets/img/jsonon.png")

          div.card.subs-card
             h5.title
              nuxt-link(to="/subjects")
                icon(name="iphone" width="25px") 专题推荐
             div.row
               div.col-md-6.col-12(v-for="sub in subjects")
                div.inner
                  nuxt-link(:to="'/subject/' + sub.key" v-bind:style="'background-image:url(' + cdn(sub.cover, 'subject', 'subject') + ')'"  class="sub-item")
                   div.detail 
                     h4 {{sub.title}}
          
          div.card.trends
            h5.title
              nuxt-link(to="/rank")
                icon(name="trend" width="25px") 前端趋势
            div.trend-item(v-for="(repo, index) in trends")
              span.rank-num {{index + 1}}
              nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
              div.middle
                nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                  h5 {{repo.name}}
                p {{repo.description_cn}}  

            nuxt-link(to="/rank" class="more") 查看完整趋势

          
                  
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
        usingmems: [],
        trends: [],
        subjects: []
      }
    },
    async asyncData () {
      let [res1] = await Promise.all([axios().get('news?limit=10')])
      let newss = res1.data.items
      newss.forEach(item => {
        item.isShowCom = false
      })
      return {
        newss: newss
      }
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
      },

      // 获取前端趋势
      fetchTrend: async function () {
        let res = await axios().get(`repo/top100?sort=trend&limit=5`)
        this.trends = res.data
      },

      // 专题推荐
      recoSubjects: async function () {
        let res = await axios().get('subject?limit=4')
        this.subjects = res.data
      }
    },
    created () {
      this.hotUsing()
      this.fetchTrend()
      this.recoSubjects()
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

    .title {
      text-align: center;
      padding: 10px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: #EEE 1px solid;
    }

    img {
      width: 100%
    }

    h2 {
      padding: 10px 0;
    }
  }

  .subs-card {
    .title {
      border: 0;
    }
    .sub-item {
      display: block;
      height: 100px;
      width: 100%;
      display: block;
      border-radius: 2px;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      background-position: center center;
      position: relative;
      color: #FFF;
      text-align: center;

      &:after {
        display: block;
        content: '';
        height: 100%;
        background-color: rgba(0, 0, 0, 0.44);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
      }

      &:hover {
        &:after {
          background-color: rgba(0, 0, 0, 0.6);
        }
      }

      .detail {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .inner {
      padding: 10px
    }
  }

  .more {
    text-align: center;
    display: block;
    padding-top: 20px;
    color: #97a8be;
  }

  .trends {
    .trend-item {
      display: flex;
      margin: 20px 0;
      align-items: center;
    }

    .rank-num {
      font-size: 1.4rem;
    }

    .cover {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin: 0 15px;
      border: #c2e4fd 1px dashed;
      padding: 2px;

      &:hover {
        border: #c2e4fd 1px solid;
      }
    }

    .middle {
      flex-grow: 1;
      flex-shrink: 1;
      word-break: keep-all;   
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
      margin-top: 10px;
      border-bottom: #EEE 1px dashed;

      .right-detail {
        padding-left: 10px;
      }

      .repo {
        display: inline-block;
        background-color: #f0f5fb;
        padding: 5px 10px;
        margin-right: 5px;
        font-size: 12px;
        border-radius: 2px;
        color: #97a8be;
        text-transform: uppercase;
      }

      .num {
        color: red;
        color: #8391a5;
        margin: 0 2px;
      }

      .mem-nc {
        font-weight: bold;
        font-size: 1.1rem
      }

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
