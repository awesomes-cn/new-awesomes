<template lang="pug">
  div.home-index
    div.container
      div.row
        div.col-md-7
          topics(:topics="latestTopics")
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
  import Topics from '~components/topic/list.vue'
  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    asyncData () {
      return axios().get('topic?limit=6&typcd=TOPIC').then(res => {
        return {
          latestTopics: res.data
        }
      })
    },
    components: {
      Topics
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


  .more-topics {
    padding: 20px 0;
    text-align: center
  }
 }
 
</style>
