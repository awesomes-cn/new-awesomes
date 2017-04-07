<template lang="pug">
  div.home-index
    div.container
      div.row
        div.col-md-7
          div.topic-list(v-for="topic in latestTopics")
            div.topic-item
              div.extras
                nuxt-link(to="")
                  img.mem-tx(:src="cdn(topic.mem.avatar, 'mem')")
                  span {{topic.mem.nc}}
                span 发布于 {{timeago(topic.created_at)}}
              nuxt-link(:to="'topic/' + topic.id")
                div.cover(v-bind:style="'background-image:url(' + cdn(topic.cover, 'topic') + ')'")
                h2 {{topic.title}}
              div.extras
                span 
                  icon(name="eye-o")
                  span {{topic.visit}} 次阅读
                span 
                  icon(name="heart-o")
                  span {{topic.favor}} 人喜欢
                span 
                  icon(name="comment")
                  span(v-if="topic.comment > 0") {{topic.comment}} 条评论
                  span(v-if="topic.comment <= 0") 暂无评论
          div.more-topics
            nuxt-link(to="topics") 更多优选
            
        div.col-md-5
          a.card(href="")
            icon(name="chrome" class="chrome-logo")
            h2 寻找前端插件，一步到位

          a.card(href="")
            img(src="../assets/img/jsonon.png")
                  
</template>


<script>
  import axios from '~plugins/axios'
  import RepoLatest from '~components/repo/latest.vue'
  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    asyncData () {
      return axios.get('topic?limit=6&typcd=TOPIC').then(res => {
        return {
          latestTopics: res.data
        }
      })
    },
    components: {
      RepoLatest
    }
  }
</script>


<style lang="scss">
 .page-index {
   background: #f7f8fa;

  .home-index {
    padding-top: 20px;
  }
  .card {
    display: block;
    background-color: #FFF;
    padding: 30px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%
    }

    h2 {
      padding: 10px 0;
    }
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

  .chrome-logo {
      float: left;
      animation: spin 2s infinite linear;
      width: 50px;
      height: 50px;
      margin-right: 20px;
  }

  .topic-list {
    background-color: #FFF;

    a {
      text-decoration: none
    }
  }

  .more-topics {
    padding: 20px 0;
    text-align: center
  }

  .topic-item {
    padding: 50px 8%;
    border-bottom: #EEE 1px solid;
    .cover {
        height: 200px;
        margin: 20px 0;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-position: center center;
        position: relative;
        color: #FFF;
    }

    h2 {
      padding: 10px 0;
    }

    .mem-tx {
      border-radius: 100%;
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }

    .extras {
      color: #9a9a9a;
      padding-top: 10px;
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
    }
  }
 }
 


</style>
