<template lang="pug">
  div
    div.sub-banner
      div.bglayer(v-bind:style="'background-image:url(' + cdn(sub.cover, 'subject') + ')'")
      div.bgcover

      div.container
        h1 {{sub.title}} 专题
        article {{sub.sdesc}}
    div.container
      div.sub-nav#subnav
        div.split(style="height: 50px;")
        div.first(v-for="root in sub.repos")
          span {{root.rootyp}}
          div.second(v-for="child in root.typcds" v-bind:data-link="root.rootyp + '-' + child.typcd")
            a(:href="'#' + root.rootyp + '-' + child.typcd") {{child.typcd}} 
            span.count ({{child.repos.length}})
      div.sub-repos
        template(v-for="root in sub.repos")
          template(v-for="child in root.typcds")
            div.split(:id="root.rootyp + '-' + child.typcd")
            h3
              span {{root.rootyp}} 
              span » 
              span {{child.typcd}}
            template(v-for="repo in child.repos")  
              div.repo-card
                fresh(:time="repo.pushed_at")
                nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                  img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')") 
                div.middle
                  nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
                    h4 {{repo.name}}
                  span.sdesc {{repo.description_cn}}
                div.stars
                  icon(name="star" width="15px") {{repo.stargazers_count}}  

</template>

<script>
  import axios from '~plugins/axios'
  import Fresh from '~components/repo/fresh.vue'
  import _ from 'underscore'
  require('perfect-scrollbar/dist/css/perfect-scrollbar.css')
  import $ from 'jquery'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get(`subject/${params.name}`).then(res => {
        let tmp = _.groupBy(res.data.repos, item => {
          return item.rootyp_zh
        })

        let result = []
        for (let rootyp in tmp) {
          let subs = _.groupBy(tmp[rootyp], item => {
            return item.typcd_zh
          })

          let subResult = []
          for (let typcd in subs) {
            subResult.push({
              typcd: typcd,
              repos: subs[typcd]
            })
          }
          result.push({
            rootyp: rootyp,
            typcds: subResult
          })
        }
        res.data.repos = result
        return {
          sub: res.data
        }
      })
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
    components: {
      Fresh
    },
    mounted () {
      var Ps = require('perfect-scrollbar')
      var positions = $('.split').map(function () {
        return {
          id: $(this).attr('id'),
          top: $(this).offset().top
        }
      })

      $(document).scroll(function () {
        var doctop = $(document).scrollTop()
        if (doctop >= $('.sub-repos').offset().top) {
          $('#subnav').addClass('fixed')
        } else {
          $('#subnav').removeClass('fixed')
        }
        var activeEl = _.filter(positions, function (item) { return doctop >= item.top - 20 }).pop() || positions[0]
        $('.sub-nav .second').removeClass('active')
        $('.sub-nav .second[data-link=' + activeEl.id + ']').addClass('active')
        $('.card').removeClass('active')
        $('.card[data-link=' + activeEl.id + ']').addClass('active')
      }).scroll()

      Ps.initialize(document.getElementById('subnav'), {
      })
    }
  }
</script>

<style lang="scss">
  .page-subject-name {
    background-color: #f7f8fa;
    height: 100%;

    .split {
      height: 70px;
    }
    
    header {
      box-shadow: none!important
    }
  
    .sub-banner {
      height: 300px;
      text-align: center;
      padding: 50px 1%;
      position: relative;
      color: #FFF;

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
        opacity: 0.5;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      article {
        line-height: 30px;
      }

      .container {
        z-index: 10
      }
    }

    .sub-nav {
      font-weight: bold;
      color: #DDD;
      line-height: 26px;
      height: 100%;
      position: absolute;
      width: 150px;
      padding-bottom: 20px;

      &.fixed {
        position: fixed;
        top: 10px;
      }

      .second {
        color: #333;

        &.active  a{
          color: #da552f
        }
      }

      .count {
        color: #8391a5;
        font-size: 0.5rem;
      }
    }

    .sub-repos {
      max-width: 800px;
      margin: 0 auto;
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
      text-overflow: ellipsis;
      overflow: hidden;
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
        margin: 0;
      }

      .sdesc {
        padding: 10px 0;
        color: rgba(0, 0, 0, 0.54118);
      }

      .middle {
        flex-grow: 1;
        word-break: keep-all;   
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .stars {
        width: 140px;
        text-align: right;
        color: #DDD
      }
    }
  }
</style>
