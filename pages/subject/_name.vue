<template lang="pug">
  div
    div.sub-banner
      div.bglayer(v-bind:style="'background-image:url(' + cdn(sub.cover, 'subject') + ')'")
      div.bgcover

      div.container
        h1 {{sub.title}} 专题
        article {{sub.sdesc}}
        a.sub-link.website(:href="sub.website" target="_blank")
          icon(name="home") 官  网
        a.sub-link.github(:href="sub.repo.html_url" target="_blank" v-if="sub.repo.id > 0")
          icon(name="github") GitHub
    div.nav-banner
      // div.first(v-for="root in sub.repos" v-bind:data-link="root.rootyp")
      //   a(:href="'#' + root.rootyp + '-' + root.typcds[0].typcd") {{root.rootyp}}
      //   div.second(v-for="child in root.typcds" v-bind:data-link="root.rootyp + '-' + child.typcd")
      //     a(:href="'#' + root.rootyp + '-' + child.typcd")
      //       span {{child.typcd}} 
      //     span.count {{child.repos.length}}
      div.list-typs(:class="'fixed-' + fixcate")
        template(v-for="root in rootyps" v-if="root.amount > 0")
          a.root(href="javascript:void(0)"  v-bind:data-link="root.key" @click="switchTyp(root.sdesc)" )
            icon(:name="root.icon"  width="16px") {{root.sdesc}}
            // span {{root.amount}}
          a(v-for="second in typcds(root)"   href="javascript:void(0)" v-if="second.repos.length > 0"  @click="switchTyp(root.sdesc + '-' + second.sdesc)" v-bind:class="'active-' + (checkedTyp == root.sdesc + '-' + second.sdesc)")
            icon(:name="second.icon" width="14px" ) {{second.sdesc}}
            span {{second.repos.length}}
        // div.list-typs.bottom
        //   a(v-for="second in typcds"  href="javascript:void(0)" v-if="second.repos.length > 0")
        //     icon(:name="second.icon" width="14px" ) {{second.sdesc}}
        //     span {{second.repos.length}}

    div.container
      // div.sub-nav#subnav
      //   div.split(style="height: 50px;")
      //   div.first(v-for="root in sub.repos" v-bind:data-link="root.rootyp")
      //     a(:href="'#' + root.rootyp + '-' + root.typcds[0].typcd") {{root.rootyp}}
      //     div.second(v-for="child in root.typcds" v-bind:data-link="root.rootyp + '-' + child.typcd")
      //       a(:href="'#' + root.rootyp + '-' + child.typcd")
      //         span > 
      //         span {{child.typcd}} 
      //       span.count {{child.repos.length}}
      div.sub-repos
        template(v-for="typ in cates" v-if="typ.repos && typ.repo")
          div.split(:id="typ.repo.rootyp_zh + '-' + typ.repo.typcd_zh" v-bind:data-first="typ.repo.rootyp_zh")
          h3
            span {{typ.repo.rootyp_zh}} 
            span » 
            span {{typ.repo.typcd_zh}}
          template(v-for="repo in typ.repos")  
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
</template>

<script>
  import axios from '~plugins/axios'
  import Fresh from '~components/repo/fresh.vue'
  import _ from 'underscore'
  require('perfect-scrollbar/dist/css/perfect-scrollbar.css')
  import $ from 'jquery'
  export default {
    async asyncData ({ req, params, query }) {
      let [res, cateRes] = await Promise.all([
        axios().get(`subject/${params.name}`),
        axios().get(`category/all`)
      ])

      let cates = _.sortBy(cateRes.data, item => {
        return item.typcd === 'A' ? item.key : item.parent
      })
      .map(item => {
        if (item.typcd === 'B') {
          item.repos = res.data.repos.filter(repo => {
            return repo.rootyp === item.parent && repo.typcd === item.key
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
        checkedTyp: ''
      }
    },
    components: {
      Fresh
    },
    computed: {
      rootyps: function () {
        return this.cates.filter(item => {
          return item.typcd === 'A'
        })
      }
    },
    methods: {
      switchTyp: function (desc) {
        this.checkedTyp = desc
        $('html,body').animate({scrollTop: $(`#${desc}`).offset().top - 100})
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
        // $('html,body').animate({scrollTop: $(`#${val}`).offset().top - 100})
      }
    },
    mounted () {
      // var Ps = require('perfect-scrollbar')
      var positions = $('.split').map(function () {
        return {
          first: $(this).attr('data-first'),
          second: $(this).attr('id'),
          top: $(this).offset().top
        }
      })
      let _self = this
      $(document).scroll(function () {
        var doctop = $(document).scrollTop()
        _self.fixcate = (doctop >= $('.nav-banner').offset().top)
        var activeEl = _.filter(positions, function (item) { return doctop >= item.top - 170 }).pop() || positions[0]
        _self.checkedTyp = activeEl.second
      }).scroll()
    }
  }
</script>

<style lang="scss">
  .page-subject-name {
    background-color: #f7f8fa;

    .split {
      height: 70px;
    }
    
    header {
      box-shadow: none!important
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
    
    .nav-banner {

    }

    .list-typs {
      // text-align: center;
      padding: 10px;

      &.fixed-true {
        position: fixed;
        z-index: 100000;
        background-color: #FFF;
        width: 100%;
        top: 0;
      }
      a {
        display: inline-block;
        margin: 15px 5px;
        padding: 2px 0px;
        padding: 2px 10px;

        &.active-true {
          background-color: #da552f;
          color: #FFF;
          
        }

       
        &.root {
          background-color: rgba(150, 120, 68, 0.58);
          color: #ffffff;
          padding: 2px 10px;
        }
      }

      svg {
        width: 17px;
        height: 17px;
        margin-right: 5px;
        float: left
      }

      &.bottom {
        border-bottom: #EEE 1px solid;
        padding-bottom: 30px;
      }
    }

    // .sub-nav {
    //   font-weight: bold;
    //   color: #DDD;
    //   line-height: 26px;
    //   height: 100%;
    //   position: absolute;
    //   width: 150px;
    //   padding-bottom: 20px;

    //   &.fixed {
    //     position: fixed;
    //     top: 10px;
    //   }

    //   .second {
    //     color: #333;
    //     display: none;
    //     & > a {
    //       color: #b1b1b1
    //     }
    //     &.active  a {
    //       color: #da552f
    //     }
    //   }

    //   .first {
    //     & > a {
    //     }
    //     &.active {
    //       .second {
    //         display: block;
    //       }
    //     }
    //   }

    //   .count {
    //     color: #8391a5;
    //   }
    // }

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

    .sub-link {
      font-size: 14px;
      padding: 10px 30px;
      margin-top: 40px;
      display: inline-block;
      background-color: #da552f;
      color: #FFF;

      &.github {
        background-color: #0275d8
      }
    }
  }
</style>
