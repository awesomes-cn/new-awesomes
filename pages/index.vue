<template lang="pug">
  div.home-wraper
    div.search-box
      div.search
        input(type="text" placeholder="搜索前端库" v-model="searchKey" @keyup.enter="searchGo")
        a.go-btn(href="javascript:void(0)" @click="searchGo")
          icon(name="search")
    div.use-box
      h4.title
        icon(name="niu" width="60px")
        p 大牛都在用的框架
      div.container
        div.row
          div.mem-item.col-md-3.col-sm-12.col-6(v-for="mem in usingmems")
            nuxt-link(:to="/mem/ + mem.id" )
              img.tx(:src="cdn(mem.avatar, 'mem')")
              p
                span {{mem.nc}}
                span(v-if="mem.mem_info.company && mem.mem_info.company.trim() !== ''") @ {{mem.mem_info.company}}
            div
              template(v-for="i in 8")
                nuxt-link(:to="'/repo/' + mem.usings[i].repo.owner + '/' + mem.usings[i].repo.alia"  v-bind:title="mem.usings[i].repo.alia" v-if="mem.usings[i]")
                  img.cover(:src="cdn(mem.usings[i].repo.cover, 'repo', 'repo_small')")  

    div.sub-box
      h4.title
        nuxt-link(to="/subjects")
          icon(name="iphone" width="25px") 专题推荐
      div.container
        div.row
          div.col-md-6.col-12(v-for="sub in subjects")
            div.inner
              subitem(:sub="sub")
    div.top-box
      h4.title
        nuxt-link(to="/subjects")
          icon(name="trend" width="25px") 前端趋势
      div.inner
        div.trend-item(v-for="(repo, index) in trends")
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
          div.val-out
            div.value(v-bind:style="{width: trendUI(repo.trend) + '%'}" v-bind:class="'trend-' + index")
            h6 {{repo.name}}
</template>

<script>
  import axios from '~plugins/axios'
  import Topics from '~components/topic/list.vue'
  import Subitem from '~components/subitem.vue'

  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
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
      this.hotUsing()
      this.fetchTrend()
      this.recoSubjects()
    }
  }
</script>

<style lang="scss" scoped>
  .search-box {
    background-color: #f7f8fa;
  }

  .search {
    max-width: 400px;
    margin: 0 auto;
    padding: 100px 10px;
    display: flex;
    input {
      flex-grow: 1;
      padding: 15px;
      background-color: #EEE;
      border: 0;
      outline: none;
    }
    .go-btn {
      width: 50px;
      display: inline-flex;
      background-color: #1dd09b;
      color: #FFF;
      justify-content: center;
    }
  }


  .use-box {
    background-color: #FFF;
    padding: 100px 0;

    .title {
      text-align: center;
      color: #919dad;
      margin-bottom: 80px;
    }

    .mem-item {
      text-align: center;
    }

    .tx {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    .cover {
      width: 40px;
      margin: 5px;
      background-color: #f0f5fb;
      padding: 3px;
    }
  }

  .sub-box {
    background-color: #f7f8fa;
    padding: 100px 10px;

    .title {
      text-align: center
    }

    .inner {
      max-width: 400px;
      margin: 0 auto;
    }
    .sub-out {
      display: flex;
      justify-content: center;
      padding: 30px 0;
    }

    .cover {
      width: 100%
    }
  }

  .top-box {
    padding: 100px 10px;
    .title {
      text-align: center
    }

    .inner {
      max-width: 600px;
      margin: 0 auto;
      margin-top: 50px
    }

    .trend-item {
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      
    }

    .val-out {
      flex-grow: 1;
    }

    .value {
      height: 20px;
      background-color: #DDD;
      margin-bottom: 10px;

      &.trend-0 {
        background-color: #f98a8a
      }

      &.trend-1 {
        background-color: #8af99c
      }

      &.trend-2 {
        background-color: #8ae1f9
      }
    }

    .cover {
      height: 50px;
      margin-right: 5px;
    }
  }

</style>
