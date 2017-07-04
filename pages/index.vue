<template lang="pug">
  div.home-wraper
    div.search-box
      div.slogn
        h3
          span 「 
          span 前端资源库
          span  」
        p Find JavaScript And CSS Repos

      div.search
        input(type="text" placeholder="搜索前端库" v-model="searchKey" @keyup.enter="searchGo")
        a.go-btn(href="javascript:void(0)" @click="searchGo")
          icon(name="search")
    div.new-box
      div.container
        div.row
          div.col-12.col-sm-6.col-md-3(v-for="repo in latests")
            div.new-item
              div.cover-box
                nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                  img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
              h4 {{repo.name}}
              article {{repo.description_cn || repo.description}}
</template>

<script>
  import axios from '~plugins/axios'
  import Topics from '~components/topic/list.vue'
  import Subitem from '~components/subitem.vue'

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
        freshok: false
      }
    },
    components: {
      Topics,
      Subitem
    },
    methods: {
      // 搜索
      searchGo: function () {
        if (this.searchKey.trim() === '') {
          return
        }
        this.$router.push({path: '/search', query: {q: this.searchKey}})
      },

      // 获取最新库
      fetchLatestRepos: async function () {
        let res = await axios().get('/repo/latest')
        this.latests = res.data
      },

      // 获取最知名的几个前端开发者的在用
      hotUsing: function () {
        axios().get('/weuse?limit=4').then(res => {
          this.usingmems = res.data.items
        })
      },

      // 获取前端趋势
      fetchTrend: async function () {
        let res = await axios().get(`repo/top100?sort=trend&limit=10`)
        this.trends = res.data
      },

      // 专题推荐
      recoSubjects: async function () {
        let res = await axios().get('subject?limit=4')
        this.subjects = res.data
      },

      // 计算趋势值实际的显示
      trendUI: function (val) {
        let maxtrend = (this.trends[0] || {}).trend || 1
        console.log('===', val, maxtrend)
        return (val / maxtrend) * 100
      }
    },
    created () {
      this.fetchLatestRepos()
    }
  }
</script>

<style lang="scss" scoped>
  .search-box {
    background-color: #f7f8fa;

    .slogn {
      padding: 80px 10px;
      padding-bottom: 30px;
      text-align: center;
      color: #9da5a9;

      p {
        font-size: 15px;
        color: #c3c3c3;
        padding-top: 10px;
      }
    }
  }

  .search {
    max-width: 400px;
    margin: 0 auto;
    padding: 100px 10px;
    padding-top: 0;
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


  .new-box {
    background-color: #FFF;
    background-color: #f7f8fa;
    padding-bottom: 100px;

    .title {
      text-align: center;
      padding-bottom: 50px;
      color: #b4c1c7;
    }

    .new-item {
      text-align: center;
      margin-bottom: 20px;
      padding: 20px;
      -webkit-transition: all .2s ease 0s;
      opacity: 0.7;

      .cover-box {
        padding: 30px;
      }
      article {
        height: 50px;
        overflow: hidden;
        padding: 10px 0;
        color: #90949c;
        margin-top: 10px;
      }

      .cover {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.36);
        transition: all .2s ease 0s;
        max-width: 120px;
        border-radius: 100%;
        padding: 10px;
      }
      
      &:hover {
        opacity: 1;
        .cover {
          padding: 0px;
        }
      }

    }

    
  }

</style>
