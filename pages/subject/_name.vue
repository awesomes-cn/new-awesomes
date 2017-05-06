<template lang="pug">
  div
    div.sub-banner
      div.bglayer(v-bind:style="'background-image:url(' + cdn(sub.cover, 'subject') + ')'")
      div.bgcover

      div.container
        h1 {{sub.title}} 专题
        article {{sub.sdesc}}
    div.container
      div.sub-bav#subnav
        div.split(style="height: 50px;")
        div.first(v-for="root in sub.repos")
          span {{root.rootyp}}
          div.second(v-for="child in root.typcds")
            a(href="") {{child.typcd}} 
            i.count ({{child.repos.length}})
      div.sub-repos(style="height: 2000px")

</template>

<script>
  import axios from '~plugins/axios'
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
        console.log(JSON.stringify(result))
        res.data.repos = result
        return {
          sub: res.data
        }
      })
    },
    mounted () {
      var Ps = require('perfect-scrollbar')
      // var positions = $('.split').map(function () {
      //   return {
      //     id: $(this).attr('id'),
      //     top: $(this).offset().top
      //   }
      // })

      $(document).scroll(function () {
        var doctop = $(document).scrollTop()
        if (doctop >= $('.sub-repos').offset().top) {
          $('#subnav').addClass('fixed')
        } else {
          $('#subnav').removeClass('fixed')
        }
        // var activeEl = _.filter(positions, function (item) { return doctop >= item.top }).pop() || positions[0]
        // $('.sub-nav .second').removeClass('active')
        // $('.sub-nav .second[data-link=' + activeEl.id + ']').addClass('active')
        // $('.card').removeClass('active')
        // $('.card[data-link=' + activeEl.id + ']').addClass('active')
      }).scroll()

      Ps.initialize(document.getElementById('subnav'), {
      })
    }
  }
</script>

<style lang="scss">
  .page-subject-name {
    background-color: #f7f8fa;
    
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

    .sub-bav {
      font-weight: bold;
      color: #DDD;
      line-height: 26px;
      height: 100%;
      position: absolute;
      width: 150px;

      &.fixed {
        position: fixed;
        top: 50px;
      }

      .second {
        color: #333
      }

      .count {
        color: #8391a5;
        font-size: 0.5rem;
      }
    }
  }
</style>
