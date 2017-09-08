<template lang="pug">
  div.home-wraper
    div.new-box
      div.container(style="max-width: 1000px")
        div.row
          div.col-md-8.col-12
            div.search-box
              div.search
                input(type="text" placeholder="搜索前端库" v-model="searchKey" @keyup.enter="searchGo")
                a.go-btn(href="javascript:void(0)" @click="searchGo")
                  icon(name="search")
            div.left-box
              div.new-item(v-for="repo in latests")
                nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                  img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
                div.repo-data
                  nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                    h4.desc {{repo.description_cn || repo.description}}
                  h4.title {{repo.name}}
                  div
                    nuxt-link(:to="'/repos/' + repo.rootyp" class="rootyp") {{repo.rootyp_zh}}
                    span  > 
                    nuxt-link(:to="'/repos/' + repo.rootyp + '/' + repo.typcd" class="typcd") {{repo.typcd_zh}}
          div.col-md-4.col-12
            div.right-box
              div.item-box
                h5 大牛在用
                div.item-inner
                  home-weuse(:datalist="homeData.weuses")
              div.item-box
                h5 专题推荐
                div.item-inner
                  home-sub(:datalist="homeData.subs")
              div.item-box
                h5 新版发布
                div.item-inner
                  home-release(:datalist="homeData.releases")
              a.item-box.link-news(href="https://news.awesomes.cn")
                h5 前端情报局
                div 每天刷一刷，跟上前端快步伐 
               
              a.item-box.link-news(href="http://json.awesomes.cn" style="background-color: #007bff")
                div 也许是最好用的
                h5 在线 JSON 格式化工具

               

</template>

<script>
  import axios from '~/plugins/axios'
  import Topics from '~/components/topic/list.vue'
  import Subitem from '~/components/subitem.vue'
  import HomeRelease from '~/components/home/release.vue'
  import HomeSub from '~/components/home/sub.vue'
  import HomeWeuse from '~/components/home/weuse.vue'

  export default {
    async asyncData ({ req, params, query }) {
      let res = await axios().get('/repo/latest')
      return {
        latests: res.data
      }
    },
    data () {
      return {
        usingmems: [],
        trends: [],
        subjects: [],
        searchKey: '',
        freshok: false,
        homeData: {
          releases: [],
          subs: []
        }
      }
    },
    components: {
      Topics,
      Subitem,
      HomeRelease,
      HomeSub,
      HomeWeuse
    },
    methods: {
      uperCaseTitle: function (title) {
        return title[0].toUpperCase() + title.slice(1)
      },
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

      // 计算趋势值实际的显示
      trendUI: function (val) {
        let maxtrend = (this.trends[0] || {}).trend || 1
        return (val / maxtrend) * 100
      }
    },
    async created () {
      let res = await axios().get('/site/home')
      this.homeData = res.data
    }
  }
</script>

<style lang="scss" scoped>
  .search-box {
    // background-color: #f48c38;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: #FFF;
    margin-bottom: 10px;
  }

  .search {
    max-width: 400px;
    width: 90%;
    display: flex;
    input {
      flex-grow: 1;
      padding: 12px 15px;
      background-color: #EEE;
      border: 0;
      outline: none;
      &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #AAA;
      }
    }
    .go-btn {
      width: 40px;
      display: inline-flex;
      background-color: #1dd09b;
      color: #FFF;
      justify-content: center;
    }
  }

  .home-wraper {
    background-color: #f7f8fa;
    
  }
  .new-box {
    padding: 100px 0;
    padding-top: 50px;

    .left-box {
      background-color: #FFF;
    }

    .new-item {
      // text-align: center;p.
      padding: 30px 20px;
      -webkit-transition: all .2s ease 0s;
      opacity: 0.9;
      display: flex;
      border-bottom: 1px solid #f4f4f4;
      .repo-data {
        flex-grow: 1;
        padding-left: 10px;
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        display: block;

        .desc {
          font-size: 1.3rem
        }

        .title {
          color: #007bff;
          font-size: 1.2rem;
          margin: 10px 0
        }
      }
      article {
        height: 50px;
        overflow: hidden;
        padding: 10px 0;
        margin-top: 10px;
      }

      .cover {
        background-color: rgba(255, 255, 255, 0.36);
        transition: all .3s ease 0s;
        max-width: 70px;
      }
    }

    .right-box {
      .item-box {
        margin-bottom: 20px;
        background-color: #FFF;
        h5 {
          padding: 15px 20px;
          margin: 0
        }
        .item-inner {
          padding: 20px;
          border-top: 1px solid #f4f4f4;
        }

        &.link-news{
          display: block;
          padding: 20px;
          text-align: center;
          background-color: #ee6c46;
          color: #FFF
        }
      }
    }
  }
</style>
