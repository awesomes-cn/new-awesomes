<template lang="pug">
  div
    div.top-banner
      h2 新版本发布
      p 一网打尽最近 5 天发布的关注量 > 1000 的前端库版本更新
    div.container.releases-area
      div.options
        button.btn.btn-default(@click="expandAll") 全部展开
        button.btn.btn-danger(@click="foldAll") 全部折叠
        
      div.r-item(v-for="item in releases")
        div.rbanner
          div.rb-left
            nuxt-link(:to="'/repo/' + item.repo.owner + '/' + item.repo.alia")
              img.cover(:src="cdn(item.repo.cover, 'repo', 'subject_repo')")
          div.rb-middle
            h3.title {{item.repo.name}}
            a.version(:href="'https://github.com/' + item.repo.full_name + '/releases/tag/' + item.tag_name" target="_blank")
              icon(name="tag") {{item.tag_name}} 
            div
              span.time 发布于{{timeago(item.published_at)}}
          div.rb-right
            a.download(:href="'https://github.com/' + item.repo.full_name + '/archive/' + item.tag_name + '.zip'") 下载 zip  
            a.fold-expand(href="javascript:void(0)" @click="item.showDetail = !item.showDetail")
              icon(name="fold" v-if="item.showDetail" title="折叠")
              icon(name="expand" v-else  title="展开")
        div.rdetail(v-show="item.showDetail")
          article.repo-con(v-html="marked(item.body || '')") 
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    async asyncData ({ req, params, query }) {
      let res = await axios().get('/repo/releases')
      let items = res.data.map(item => {
        item.showDetail = true
        return item
      })
      return {
        releases: items
      }
    },
    methods: {
      foldAll: function () {
        this.releases.forEach(item => {
          item.showDetail = false
        })
      },
      expandAll: function () {
        this.releases.forEach(item => {
          item.showDetail = true
        })
      }
    }
  }
</script>

<style lang="scss">
  .page-releases {
    background: #f7f8fa;

    .top-banner {
      text-align: center;
      padding-top: 50px;

      h2 {
        padding-bottom: 10px;
      }
    }
    .releases-area {
      // margin: 50px auto;
      margin-bottom: 50px;
      // padding: 50px;
      padding: 0;
      max-width: 700px;

      .options {
        padding: 10px;
        text-align: right
      }
      .r-item {
        margin-bottom: 40px;
        background-color: #FFF;
        box-shadow: 1px 1px 5px #EEE;

        &:hover {
          .fold-expand {
            display: block!important;
          }
        }
      }

      .rbanner {
        // text-align: center;
        padding: 20px 0;
        position: relative;
        overflow: hidden;
        height: 150px;
        display: flex;

        .rb-left {
          display: flex;
          width: 120px;
          align-items: center;
          justify-content: center;
        }

        .rb-middle {
          flex-grow: 1;
          .version {
            display: inline-block;
            color: #0275d8;
            letter-spacing: 4px;
            font-size: 2rem;
            font-weight: bolder;
            padding: 5px 0;
          }
          .title {
            margin: 0;
          }
        }

        .rb-right {
          display: flex;
          width: 120px;
          align-items: center;
          justify-content: center;
          position: relative;

          .fold-expand {
            position: absolute;
            bottom: 0;
            color: #1572a0;
            display: none;
            width: 100%;
            text-align: center;
          }
        }

        .cover {
          border-radius: 100%;
          background-color: #FFF;
          width: 80px;
        }

        

        .download {
          display: inline-block;
          border: #31708f  1px solid;
          padding: 10px 20px;
          color: #31708f ;

          &:hover {
            color: #f14a1e;
            border: #f14a1e 1px solid;
          }
        }

        .time {
          color: #989898;
          font-weight: normal;
          background-color: #eeeeee;
          padding: 5px 10px;
        }
      }

      .rdetail {
        padding: 20px;
        border-top: #f47107 1px solid;
      }

      article.repo-con {
        font-size: 15px;
        padding: 20px;
        margin-top: 20px;
        line-height: 27px;
        word-break: break-all;

        img {
          max-width: 100%;
        }
      }
    }
  }
</style>
