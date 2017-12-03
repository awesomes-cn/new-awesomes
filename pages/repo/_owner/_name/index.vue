<template lang="pug">
  div.repo-detail
    banner(:repo="repo")
    div.container
      div.row
        div.col-md-9.col-12
          div.item-box
            article(v-html="marked(repo.about_zh || repo.about)" :class="'repo-con showAll-' + isAllShow")
            div.more-box(v-show="isAllShow == false")
              button(type="button" class="btn btn-outline-primary" @click="isAllShow = true")
                icon(name="template" width="14px") 阅读全部
          div.item-box
            h5.title 也许你还需要它们
            related(:rid="repo.id")
          div.item-box
            h5.title 评论区
            comment(flag="repo-comment" typ="REPO" v-bind:idcd="repo.id" placeholder="我们会认真对待你的想法、建议和反馈")
        
        div.col-md-3.right-col.col-12
          div.item-box.without-padding
            div.fresh-box.inner
              span(:title="timeago(repo.pushed_at)" :class="'fresh-tag ' + freshFrmat(repo.pushed_at).key")
              span {{freshFrmat(repo.pushed_at).alia}}

            div.inner.border-top.times
              p
                span 创建于 
                strong {{timeago(repo.github_created_at)}}
              div
                span 最近更新于 
                strong {{timeago(repo.pushed_at)}}

            div.links-box.inner.border-top
              a(:href="'https://gitter.im/' + repo.full_name" style="color: #EF015B" title="聊天室" target="_blank")
                icon(name="gitter"  width="15px")
              a(:href="'http://stackoverflow.com/questions/tagged/' + repo.name" style="color: #F48024" title="上 Stackoverflow 提问"  target="_blank")
                icon(name="stackoverflow"  width="15px")
          div.item-box.cate-box
            span(style="color: #929ca1;")
              icon(name="template" width="16px")
            nuxt-link(:to="'/repos/' + repo.rootyp" class="rootyp") {{repo.rootyp_zh}}
            div(style="width: 20px")
            nuxt-link(:to="'/repos/' + repo.rootyp + '/' + repo.typcd" class="typcd") {{repo.typcd_zh}}

          div.item-box
            button(@click="switchUsing" :class="'btn using-btn mark-' + isUsing + (isUsing ? ' btn-warning' : ' btn-secondary')")
              icon(name="tip" width="15px" v-if="isUsing") 我已在用
              span(v-else) 我在用
            template(v-if="repo.using > 0")
              div.iuse
                nuxt-link(:to="'/mem/' + using.mem.id" v-for="using in repo.usings" v-bind:title="using.mem.nc")
                  img.mem-tx(:src="cdn(using.mem.avatar, 'mem', 'repo-50')")
              div(style="text-align: center")
                span(v-show="repo.using > 5") 等 
                span {{repo.using}} 人在用
            
</template>

<script>
  import axios from '~/plugins/axios'
  import Banner from '~/components/repo/banner'
  import Related from '~/components/repo/related'
  import Comment from '~/components/comment.vue'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get(`repo/${params.owner}/${params.name}`)
      .then(res => {
        return {
          repo: res.data,
          isUsing: false
        }
      })
    },
    head () {
      return {
        title: `${this.repo.alia} - Awesomes`,
        meta: [
          { hid: 'description', name: 'description', content: this.repo.description_cn },
          { hid: 'keywords', name: 'keywords', content: `${this.repo.alia},${this.repo.alia}源码,${this.repo.alia}下载,${this.repo.alia}文档,${this.repo.alia}资源库` }
        ]
      }
    },
    data () {
      return {
        isAllShow: false
      }
    },
    components: {
      Banner,
      Comment,
      Related
    },
    methods: {
      // 20天内算频繁
      // 7个月内算普通
      // 大于7个月算过期
      freshFrmat: function (time) {
        let days = (Date.parse(new Date()) - Date.parse(new Date(time))) / 1000 / 60 / 60 / 24
        if (days <= 20) {
          return {
            key: 'often',
            alia: '积极维护'
          }
        }
        if (days <= 7 * 30) {
          return {
            key: 'normal',
            alia: '正常维护'
          }
        }
        return {
          key: 'outdated',
          alia: '很久没更新了'
        }
      },
      // 是否在用
      hasUsing: function () {
        if (!this.$store.state.session) { return }
        axios().get('oper/is', {
          params: {opertyp: 'USING', idcd: this.repo.id, typ: 'REPO'}
        }).then(res => {
          this.isUsing = res.data
        })
      },
      switchUsing: function () {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'USING',
          typ: 'REPO',
          idcd: this.repo.id
        }).then(res => {
          this.repo.using = res.data.amount
          this.isUsing = res.data.has
        })
      }
    },
    created () {
      this.hasUsing()
    }
  }
</script>

<style lang="scss">
  .page-repo-owner-name {
    background: #f7f8fa;
    .repo-detail {
      padding-bottom: 50px;
      .container {
        max-width: 1000px;
      }

      .more-box {
        position: absolute;
        width: 100%;
        z-index: 10;
        left: 0;
        height: 120px;
        background-image: linear-gradient(transparent,#fff 30%);
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item-box {
        background-color: #FFF;
        padding: 30px;
        margin-top: 20px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
        border-radius: 3px;
        position: relative;

        .title {
          margin-bottom: 20px;
        }

        &.without-padding {
          padding: 0!important;
        }

        .inner {
          padding: 20px;

          &.border-top {
            border-top: 1px solid rgba(230, 234, 237, 0.55);
          }

          &.times {
            strong {
              color: #3d8ece
            }
          }
        }
      }

      .right-col {
        .item-box {
          padding: 20px;
        }
      }

      article.repo-con {
        font-size: 15px;
        line-height: 27px;
        word-break: break-all;
        max-height: 700px;
        overflow: hidden;

        &.showAll-true {
          max-height: max-content;
        }

        img {
          max-width: 100%
        }
      }

      .con-headers {
        margin-top: 10px;
        border: #EEE 1px solid;
        border-bottom: 0;
        border-radius: 4px;
        padding: 15px 20px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      .bar {
        height: 10px;
        background-color: #EEE;
        float: left;
        width: 100%;
      }

      .com-wrap {
        padding: 50px 0px;
      }

      .iuse {
        margin: 15px 0;
        text-align: center;
        .mem-tx {
          width: 24px;
          height: 24px;
          border-radius: 100%;
          margin: 0 -3px;
          padding: 1px;
          display: inline-block;
          background-color: #FFF;
          box-shadow: 0px 0px 5px #e5e5e5;
        }
      }

      .fresh-box {
        display: flex;
        align-items: center;
        .fresh-tag {
          display: inline-block;
          background-color: #4CAF50;
          border: rgba(255, 255, 255, 0.76) 5px solid;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          margin-right: 10px;

          &.often {
            background-color: #4CAF50;
          }

          &.normal {
            background-color: #03A9F4;
          }

          &.outdated {
            background-color: red;
          }
        }
      }
      .links-box {
        padding: 10px;
        padding-bottom: 0;
        a {
          margin-right: 10px;
        }
      }

      .oper-box {
      }

      .using-btn {
        width: 100%;
        text-align: center;
        color: #FFF!important;
        &.mark-true {
          background-color: #f3960c;
          border-color: #df9512
        }
      }

      .cate-box {
        background-image: linear-gradient(120deg,rgba(255, 255, 242, 0.63) 50%,#f8ffe5 0);
        display: flex;
        a {
          display: block;
          flex-grow: 1;
          text-align: center;
          flex-basis: 100px;
          color: #c0c077;
        }
      }
    }
  }
</style>
