<template lang="pug">
  div.container.topic-container
    div.banner
      div.extras
        nuxt-link(to="")
          img.mem-tx(:src="cdn(topic.mem.avatar, 'mem')")
          span {{topic.mem.nc}}
        span 发布于 {{timeago(topic.created_at)}}
      img.cover(:src="cdn(topic.cover, 'topic')")
      h3 {{topic.title}}
      div.extras
        span 
          icon(name="eye-o") {{topic.visit}} 次阅读
        span 
          icon(name="heart-o") {{topic.favor}} 人喜欢
        span 
          icon(name="comment") {{topic.comment > 0 ? topic.comment + ' 条评论' : '暂无评论'}}
    article(v-html="marked(topic.con)")

      
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    asyncData ({req, params, query}) {
      return axios().get(`topic/${params.id}`).then(res => {
        return {
          topic: res.data
        }
      })
    }
  }
</script>

<style lang="scss">
  .page-topic-id {
    header {
      box-shadow: none!important;
      border-bottom: #EEE 1px solid
    }

    .topic-container {
      max-width: 700px;
      padding-top: 40px;

      .cover {
        width: 100%
      }

      .banner {
        h3 {
          padding: 20px 0;
        }

        .extras {
          color: #9a9a9a;
          padding-bottom: 10px;
          & > span {
            margin: 0 8px;
            display: inline-block;
            position: relative
          }

          svg {
            width: 18px;
            height: 18px;
            float: left;
            margin-right: 3px;
          }
          .mem-tx {
            border-radius: 100%;
            width: 25px;
            height: 25px;
            margin-right: 5px;
          }
        }
      }

      article {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
</style>
