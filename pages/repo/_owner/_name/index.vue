<template lang="pug">
  div.repo-detail
    banner(:repo="repo")
    div.container
      div.row
        div.col-9
          // div.con-headers
          //   span 暂无中文翻译，我来翻译
          // div.bar
          // dianp(:repo="repo")
          div.item-box
            article.repo-con(v-html="marked(repo.about_zh || repo.about)")
          div.com-wrap
            comment(flag="repo-comment" typ="REPO" v-bind:idcd="repo.id")
        div.col-3.right-col
          div.item-box
            // nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            //   img.cover(:src="cdn(repo.cover, 'repo', 'repo')" width="100%")
            div.fresh-box
              span(:title="timeago(repo.pushed_at)" :class="'fresh-tag ' + freshFrmat(repo.pushed_at).key")
              span {{freshFrmat(repo.pushed_at).alia}}（{{timeago(repo.pushed_at)}}）
            
            div.links-box
              a(:href="'https://gitter.im/' + repo.full_name" style="color: #EF015B" title="聊天室" target="_blank")
                icon(name="gitter"  width="15px")
              a(:href="'http://stackoverflow.com/questions/tagged/' + repo.name" style="color: #F48024" title="上 Stackoverflow 提问"  target="_blank")
                icon(name="stackoverflow"  width="15px")
          // div.item-box.oper-box
          //   a(href="javascript:void(0)")
          //     icon(name="heart" width="40px")
          //   div {{repo.mark}}
          div.item-box
            button.btn.btn-success(style="width: 100%; text-align: center; margin-bottom: 10px;")
              icon(name="heart") 喜欢
            button.btn.btn-info(style="width: 100%; text-align: center") 我在用
            div.iuse
              nuxt-link(:to="'/mem/' + using.mem.id" v-for="using in repo.usings" v-bind:title="using.mem.nc")
                img.mem-tx(:src="cdn(using.mem.avatar, 'mem')")
            div(style="text-align: center")
              span(v-show="repo.using > 5") 等
              span {{repo.using}} 人在用
            
</template>

<script>
  import axios from '~/plugins/axios'
  import Banner from '~/components/repo/banner'
  import Comment from '~/components/comment.vue'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get(`repo/${params.owner}/${params.name}`)
      .then(res => {
        return {
          repo: res.data
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
    components: {
      Banner,
      Comment
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
      }
    }
  }
</script>

<style lang="scss">
  .page-repo-owner-name {
    background: #f7f8fa;
    .repo-detail {
      .container {
        max-width: 1000px
      }

      .item-box {
        background-color: #FFF;
        padding: 30px;
        margin-top: 20px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
        border-radius: 3px;
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
        margin: 10px 0;
        text-align: center;
        .mem-tx {
          width: 24px;
          height: 24px;
          border-radius: 100%;
          margin: 0 -3px;
          padding: 1px;
          display: inline-block;
          background-color: #FFF
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
        border-top: 1px solid #e6eaed;
        padding: 10px;
        padding-bottom: 0;
        margin-top: 20px;

        a {
          margin-right: 10px;
        }
      }

      .oper-box {
      }
    }
  }
</style>
