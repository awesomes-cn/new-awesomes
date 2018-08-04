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
            div(style="margin: 10px 0" v-if="recorepos.length > 0")
              home-swiper(flag="home" :items="recorepos")
            div.left-box
              div.new-item(v-for="repo in latests")
                nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                  img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
                div.repo-data
                  nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                    h4.desc {{repo.description_cn || repo.description}}
                  div.repo-extra
                    h4.title {{repo.name}}
                    div.type-box
                      nuxt-link(:to="'/repos/' + repo.rootyp + '/' + repo.typcd" class="typcd") {{repo.typcd_zh}}
                      nuxt-link(:to="'/repos/' + repo.rootyp" class="rootyp" :style="{backgroundColor: typcolors[repo.rootyp]}") {{repo.rootyp_zh}}
          div.col-md-4.col-12
            div.right-box
              div.item-box
                h5 大牛在用
                div.item-inner
                  home-weuse(:datalist="homeData.weuses")
              
              a.item-box.link-qqs(href="//shang.qq.com/wpa/qunwpa?idkey=699c9d6d8abb0351671211a011da67b6a2f54097097482794aff64b68e046914" target="_blank")
                icon(name="qq")
                div
                  span 官方 QQ 群
                  strong 「669525022」
              
              a.item-box.link-dayfront(href="/dayfront")
                img(src="../assets/img/weixin-applet.jpg")
                div
                  h5.name 前端早8点
                  div(style="color: #979797") 每天上午8点准时推送一则小知识点
                  div(style="color: #979797") 夯实基础 + 开拓视野
              
              div.item-box
                h5 大家在关注
                div.item-inner
                  home-actions
              // div.item-box
              //   adsense(ikey="alone")
              a.item-box.link-fercard(href="/fercard")
                img(src="../assets/img/fercard-logo.png")
                div
                  div.name Front End Repo Card
                  div(style="color: #979797") 随机推荐优秀前端框架卡片
              div.item-box.item-box-rss
                div.item-inner
                  template(v-if="substatus === 'normal'")
                    icon(name="rss")
                    input.txt(type="text" placeholder="输入邮箱，回车订阅" v-on:keyup.enter="subscribe" v-model="email")
                  template(v-else)
                    div.message 订阅成功！
             
              div.item-box
                h5 专题推荐
                div.item-inner
                  home-sub(:datalist="homeData.subs")
              div.item-box
                h5 新版发布
                div.item-inner
                  home-release(:datalist="homeData.releases")
              div.item-box.item-box-child
                h5 旗下网站
                div.item-inner
                  // a(href="https://news.awesomes.cn/" target="_blank" title="前端情报局")
                  //   img(src="../assets/img/logo-news.png")
                  //   div News
                  a(href="http://loading.awesomes.cn/" target="_blank" title="可定制的 CSS Loading 动画")
                    img(src="../assets/img/logo-loading.png")
                    div Loading
                  a(href="http://json.awesomes.cn/" target="_blank" title="在线JSON格式化验证工具")
                    img(src="../assets/img/logo-json.png")
                    div JSON
                  a(href="http://gradient.awesomes.cn/" target="_blank" title="CSS 渐变背景设计")
                    img(src="../assets/img/logo-gradient.png")
                    div Gradient
                  a(href="http://filter.awesomes.cn/" target="_blank" title="在线图片滤镜效果可视化工具")
                    img(src="../assets/img/logo-filter.png")
                    div Filter

</template>

<script>
  import axios from '~/plugins/axios'
  import Topics from '~/components/topic/list.vue'
  import Subitem from '~/components/subitem.vue'
  import HomeRelease from '~/components/home/release.vue'
  import HomeActions from '~/components/home/actions.vue'
  import HomeSub from '~/components/home/sub.vue'
  import HomeWeuse from '~/components/home/weuse.vue'
  import HomeSwiper from '~/components/swiper.vue'
  import Adsense from '~/components/adsense.vue'

  export default {
    async asyncData ({ req, params, query }) {
      let [res1, res2] = await Promise.all([
        axios().get('/repo/latest'),
        axios().get('/site/home')
      ])
      let _recorepos = res2.data.recorepos.map(item => {
        return {
          link: `/repo/${item.owner}/${item.alia}`,
          img: item.banner_cover || item.cover,
          title: `${item.alia}：${item.description_cn || item.description}`
        }
      })
      return {
        latests: res1.data,
        homeData: res2.data,
        recorepos: _recorepos
      }
    },
    data () {
      return {
        usingmems: [],
        trends: [],
        subjects: [],
        searchKey: '',
        freshok: false,
        email: '',
        substatus: 'normal',
        typcolors: {
          Applications: '#def5e7',
          Mobile: '#eaf5de',
          Media: '#f5dcdc',
          Dom: 'rgb(241, 237, 224)',
          Images: '#e0f1ef',
          NodeJS: '#def6ff',
          Form: '#eaecfa'
        }
      }
    },
    components: {
      Topics,
      Subitem,
      HomeRelease,
      HomeSub,
      HomeWeuse,
      Adsense,
      HomeActions,
      HomeSwiper
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
      },

      // 订阅
      subscribe: async function () {
        if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.email)) {
          this.$alert('danger', '请填写正确的邮箱')
          return false
        }
        await axios().post('rss', {
          email: this.email
        })
        this.$alert('success', '订阅成功')
        this.substatus = 'ok'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-box {
    // background-color: #f48c38;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdfdfd;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);    
    border: rgba(149, 149, 149, 0.11) 1px solid;  
  }

  .statics-box {
    padding: 10px;
    color: #8d938d;
    display: flex;
    align-items: center;
    justify-content: center;

    .mar {
      margin-left: 10px;
    }

    .impo {
      color: #0db6a6;
      margin: 0 4px;
    }
  }

  .search {
    width: 100%;
    display: flex;
    input {
      flex-grow: 1;
      // background-color: #EEE;
      font-size: 17px;
      border: 0;
      outline: none;
      padding: 30px;
      background-color: #fdfdfd;
      &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #AAA;
      }
      &:focus {
        background-color: #FFF
      }
    }
    .go-btn {
      width: 40px;
      display: inline-flex;
      // background-color: #1dd09b;
      color: #987a62;
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
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
    }

    .new-item {
      // text-align: center;p.
      padding: 30px 20px;
      -webkit-transition: all .2s ease 0s;
      opacity: 0.9;
      display: flex;
      border-bottom: 1px solid #f4f4f4;

      &:hover {
        background-color: rgba(246, 252, 255, 0.3);
      }
      .repo-data {
        flex-grow: 1;
        padding-left: 10px;
        // word-break: keep-all;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        width: 100%;
        display: block;

        .desc {
          font-size: 1.3rem;
          line-height: 30px;
          margin-bottom: 4px;
        }

        .title {
          color: #007bff;
          font-size: 1.2rem;
        }
        .repo-extra {
          display: flex;
          justify-content: space-between
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
        max-width: 60px;
      }
    }

    .right-box {
      .item-box {
        margin-bottom: 20px;
        background-color: #FFF;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
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

        &.link-qqs {
          display: flex;
          padding: 20px;
          * {
            padding: 0;
            margin: 5px;
          }
        }

        &.link-fercard {
          display: flex;
          padding: 20px;
          align-items: center;

          img {
            margin-right: 10px;
          }

          .name {
            font-weight: bold;
            font-size: 15px;
          }
        }
        &.link-dayfront {
          display: flex;
          padding: 20px;
          flex-direction: column;
          align-items: center;
          text-align: center;
          img {
            width: 100%;
            max-width: 160px;
          }
        }

        &.item-box-rss {
          .item-inner {
            display: flex
          }
          .txt {
            width: 100%;
            padding: 5px 10px;
            outline: none;
            border: none;
          }
          .message {
            text-align: center;
            width: 100%;
            color: #34a138;
            font-size: 1.2rem;
          }
        }

        &.item-box-child {
          img {
            width: 40px;
            margin-bottom: 10px;
          }
          .item-inner {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            a {
              display: inline-block;
              width: 50px;
              text-align: center;
            }
          }
        }
      }
    }

    .type-box {
      font-size: 0.8rem;
      display: inline-block;
     
      a {
        display: inline-block;
        padding: 3px 8px;
        height: 100%;
        color: #6e7687;
        &:nth-child(1) {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          background-color: #f0f5fe;
        }
        &:nth-child(2) {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
          background-color: #def6ff
        }
      }
    }
  }
</style>
