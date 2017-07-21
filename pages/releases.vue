<template lang="pug">
  div
    div.top-banner
      h2 新版本发布
      p 一网打尽最近 5 天发布的关注量 > 1000 的前端库版本更新
    div.container.releases-area
      div(v-for="item in releases")
        div.rbanner
          div.rcon
            nuxt-link(:to="'/repo/' + item.repo.owner + '/' + item.repo.alia")
              img.cover(:src="cdn(item.repo.cover, 'repo', 'subject_repo')")
          div.bg-cover(:style="'background-image:url(' + cdn(item.repo.cover, 'repo', 'subject_repo') + ')'")
        div.rdetail
          div.inner
            h3
              span {{item.repo.name}}
              a.version(:href="'https://github.com/' + item.repo.full_name + '/releases/tag/' + item.tag_name" target="_blank")
                icon(name="tag") {{item.tag_name}}
              span.time
                icon(name="clock-o") {{timeago(item.published_at)}}
            a.download(:href="'https://github.com/' + item.repo.full_name + '/archive/' + item.tag_name + '.zip'") 下载 zip  
          article.repo-con(v-html="marked(item.body)") 
</template>
<script>
  import axios from '~plugins/axios'
  export default {
    async asyncData ({ req, params, query }) {
      let res = await axios().get('/repo/releases')
      return {
        releases: res.data
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
      background-color: #FFF;
      margin: 50px auto;
      // padding: 50px;
      padding: 0;
      max-width: 900px;

      .rbanner {
        text-align: center;
        padding: 20px 0;
        position: relative;
        overflow: hidden;
        height: 150px;

        & > div {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }

        .rcon {
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bg-cover {
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 0;
          filter: blur(70px);
        }

        .cover {
          border-radius: 100%;
          background-color: #FFF;
          padding: 10px;
          width: 100px;
        }
      }

      .rdetail {
        padding: 20px;

        .inner {
          display: flex;
          align-items: center;
        }
        h3 {
          display: flex;
          align-items: flex-end;
          flex-grow: 1
        }
        a.version {
          display: inline-block;
          background-color: #ec971f;
          padding: 10px;
          /* border-radius: 10px; */
          margin: 0 10px;
          box-shadow: 1px 1px 1px #DDD;
          color: #FFF;
          letter-spacing: 2px;
        }

        .time {
          font-size: 60%;
          color: #989898;
          font-weight: normal;
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
