<template lang="pug">
  div.topics-wraper
    div.container
      div.row
        div.col-md-7
          div.topic-list(v-for="topic in latestTopics")
            nuxt-link(to="")
              div.topic-item
                div.cover(v-bind:style="'background-image:url(' + cdn(topic.cover, 'topic') + ')'")
                h2 {{topic.title}} 
            
        div.col-md-5
          a.card(href="")
            img(src="../assets/img/jsonon.png")
                  
</template>


<script>
  import axios from '~plugins/axios'
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
    }
  }
</script>


<style lang="scss">
 .page-topics {
   background: #f7f8fa;

   .topics-wraper {
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
    }
 }
 


</style>
