<template lang="pug">
  div
    // div.sub-banner
    //   div.bglayer(v-bind:style="'background-image:url(' + cdn(sub.cover, 'subject') + ')'")
    //   div.bgcover

    //   div.container
    //     h1 {{sub.title}} 专题
    //     article {{sub.sdesc}}
    //     a.sub-link.website(:href="sub.website" target="_blank")
    //       icon(name="home") 官  网
    //     a.sub-link.github(:href="sub.repo.html_url" target="_blank" v-if="sub.repo.id > 0")
    //       icon(name="github") GitHub
    
    div.container.list-body
      div.nav-banner
        div.sub-info
          h1 {{uperCaseTitle(sub.title)}} 专题
          article {{sub.sdesc}}
          a.sub-link.website(:href="sub.website" target="_blank")
            icon(name="home") 官  网
          a.sub-link.github(:href="sub.repo.html_url" target="_blank" v-if="sub.repo.id > 0")
            icon(name="github") GitHub
        div.nav-box
          div.nav-level(v-for="root in rootyps" v-if="root.amount > 0")
            a.root(href="javascript:void(0)"  v-bind:data-link="root.key" @click="switchTyp(root.sdesc)" )
              // icon(:name="root.icon"  width="16px") {{root.sdesc}}
              span {{root.sdesc}}
            a.second(v-for="second in typcds(root)"   href="javascript:void(0)" v-if="second.repos.length > 0"  @click="switchTyp(root.sdesc + '-' + second.sdesc)" v-bind:class="'active-' + (checkedTyp == root.sdesc + '-' + second.sdesc)")
              // icon(:name="second.icon" width="14px" ) {{second.sdesc}}
              span {{second.sdesc}}
              span.num （{{second.repos.length}}）
      //div.placeholder
      // div.list-typs
      //   div.inner
      //     template(v-for="root in rootyps" v-if="root.amount > 0")
      //       a.root(href="javascript:void(0)"  v-bind:data-link="root.key" @click="switchTyp(root.sdesc)" )
      //         icon(:name="root.icon"  width="16px") {{root.sdesc}}
      //       a.second(v-for="second in typcds(root)"   href="javascript:void(0)" v-if="second.repos.length > 0"  @click="switchTyp(root.sdesc + '-' + second.sdesc)" v-bind:class="'active-' + (checkedTyp == root.sdesc + '-' + second.sdesc)")
      //         icon(:name="second.icon" width="14px" ) {{second.sdesc}}
      div.sub-repos
        template(v-for="(typ, index1) in cates" v-if="typ.repos && typ.repo")
          div.split(:id="typ.repo.rootyp_zh + '-' + typ.repo.typcd_zh" v-bind:data-first="typ.repo.rootyp_zh")
          h3
            span {{typ.repo.rootyp_zh}} 
            span » 
            span {{typ.repo.typcd_zh}}
            span.amount （{{typ.repos.length}}）
          template(v-for="(repo, index2) in typ.repos")  
            div.repo-card
              fresh(:time="repo.pushed_at")
              nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')") 
              div.middle
                nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                  h4 {{repo.name}}
                span.sdesc {{repo.description_cn || repo.description}}
              div.stars
                icon(name="star" width="15px") {{repo.stargazers_count}}  
            
            div.ad-wraper(v-if="repo.hasad")
              div.repo-card
                  adsense(v-if="showad")
              div.repo-card
                adsense(v-if="showad")
</template>

<script>
  import axios from '~/plugins/axios'
  import Fresh from '~/components/repo/fresh.vue'
  import _ from 'underscore'
  require('perfect-scrollbar/dist/css/perfect-scrollbar.css')
  import $ from 'jquery'
  let activeTimer
  export default {
    async asyncData ({ req, params, query }) {
      let [res, cateRes] = await Promise.all([
        axios().get(`subject/${params.name}`),
        axios().get(`category/all`)
      ])

      let index = 0
      let cates = _.sortBy(cateRes.data, item => {
        return item.typcd === 'A' ? item.key : item.parent
      })
      .map(item => {
        if (item.typcd === 'B') {
          item.repos = res.data.repos.filter(repo => {
            if (repo.rootyp === item.parent && repo.typcd === item.key) {
              index++
              repo.hasad = false
              if (index === 10) {
                repo.hasad = true
              }
              return true
            }
            return false
          })
          item.repo = item.repos[0]
        }

        if (item.typcd === 'A') {
          item.amount = res.data.repos.filter(repo => {
            return repo.rootyp === item.key
          }).length
        }
        return item
      })

      return {
        sub: res.data,
        cates: cates
      }
    },
    head () {
      return {
        title: `${this.sub.title}专题`,
        meta: [
          { hid: 'description', name: 'description', content: this.sub.sdesc },
          { hid: 'keywords', name: 'keywords', content: `${this.sub.title},${this.sub.title}专题,${this.sub.title}资源,${this.sub.title}组件,${this.sub.title}插件` }
        ]
      }
    },
    data () {
      return {
        fixcate: false,
        checkedTyp: '',
        showad: false
      }
    },
    components: {
      Fresh,
      Adsense: () => import('~/components/adsense.vue')
    },
    computed: {
      rootyps: function () {
        return this.cates.filter(item => {
          return item.typcd === 'A'
        })
      }
    },
    methods: {
      uperCaseTitle: function (title) {
        return title[0].toUpperCase() + title.slice(1)
      },
      switchTyp: function (desc) {
        this.checkedTyp = desc
        $('html,body').animate({scrollTop: $(`#${desc}`).offset().top})
      },
      typcds: function (root) {
        return this.cates.filter(item => {
          return item.typcd === 'B' && item.parent === root.key
        })
      }
    },
    watch: {
      checkedTyp: function (val) {
        window.location.href = `#${val}`
      }
    },
    mounted () {
      let _self = this
      setTimeout(function () {
        _self.showad = true
      }, 2000)
      var positions = $('.split').map(function () {
        return {
          first: $(this).attr('data-first'),
          second: $(this).attr('id'),
          top: $(this).offset().top
        }
      })
      $(document).scroll(function () {
        var doctop = $(document).scrollTop()
        _self.fixcate = (doctop >= $('.list-body').offset().top - 50)
        clearTimeout(activeTimer)
        activeTimer = setTimeout(function () {
          var activeEl = _.filter(positions, function (item) { return doctop >= item.top - 170 }).pop() || positions[0]
          _self.checkedTyp = activeEl.second
        }, 300)
      }).scroll()
    }
  }
</script>

<style lang="scss">
  .page-subject-name {
    background-color: #f7f8fa;
    .list-body {
      max-width: 800px;
    }
    .split {
      height: 70px;
    }
    
    header {
      box-shadow: none!important
    }

    .nav-banner {
      background-color: #FFF;
      margin-top: 30px;
      font-size: 1.1rem;
      .sub-info {
        background-color: #437c85;
        color: #FFF;
        padding: 20px;

        article {
          color: #d3e3e6;
          margin-top: 10px;
        }
      }
      .nav-box {
        padding: 20px;
      }
      .nav-level {
        margin-top: 15px;
        & > a {
          display: inline-block;
          margin-right: 15px
        }
        .root {
          font-size: 1.2rem;
          font-weight: bold;
        }
        .num {
          color: #99a7b4
        }
      }
    }
  
    .sub-banner {
      min-height: 300px;
      padding: 50px 1%;
      position: relative;
      color: #FFF;
      overflow: hidden;

      .bglayer {
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        z-index: 1;
        overflow: hidden;
        background-position: center center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .bgcover {
        z-index: 2;
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      article {
        line-height: 35px;
      }

      .container {
        z-index: 10
      }
    }
    
    @media (max-width: 576px) {
      .list-body {
        display: block!important;
      }
      .list-typs, .placeholder {
        display: none!important;
      }

      .middle {
        white-space: nowrap!important
      }
    }


    .sub-repos {
      // max-width: 800px;
      // margin: 0 auto;
      margin-bottom: 50px;

      h3 {
        border-left: 0;
        border-right: 0;
        padding: 30px 0;
        padding-top: 0;
        padding-bottom: 20px;
        color: #8b8b8b;
        font-size: 20px;
        text-align: center;

        span:nth-child(1) {
          color: #CCC
        }

        span:nth-child(2) {
          color: #cacaca
        }
      }
    }

    .repo-card {
      margin: 0 10px;
      display: flex;
      background-color: #FFF;
      padding: 20px;
      border-radius: 2px;
      // text-overflow: ellipsis;
      // overflow: hidden;
      margin-bottom: 10px;
      border: #FFF 1px solid;
      flex-direction: row;
      align-items: center;

      .cover {
        height: 60px;
        border-radius: 4px;
        margin: 0 10px;
      }

      h4 {
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .sdesc {
        padding: 10px 0;
      }

      .middle {
        flex-grow: 1;
        word-break: keep-all;   
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
      }

      .stars {
        width: 140px;
        text-align: right;
        color: #9da09e
      }
    }

    .sub-link {
      font-size: 14px;
      padding: 10px 20px;
      margin-right: 20px;
      margin-top: 40px;
      display: inline-block;
      background-color: #da552f;
      color: #FFF;
      border: #FAFAFA 1px solid;

      &.github {
        background-color: #0275d8
      }
    }

    .amount {
      margin-left: 3px;
      font-size: 13px;
    }
    .ad-wraper {
      display: flex;
      .repo-card {
        width: 50%
      }
    }
  }
</style>
