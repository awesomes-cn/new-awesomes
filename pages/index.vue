<template lang="pug">
  div.home-index
    div.container
      div.row
        div.col-md-7
          news(:newss="newss")
          // topics(:topics="latestTopics")
          // div.more-topics
          //   nuxt-link(to="topics") 更多优选
            
        div.col-md-5
          div.card.search
            input.search-txt(type="text" placeholder="搜索前端库")
            div
              icon(name="search")
          a.card(href="")
            icon(name="chrome" class="chrome-logo" width="50px")
            h2 寻找前端插件，一步到位

          a.card(href="")
            img(src="../assets/img/jsonon.png")
                  
</template>


<script>
  import axios from '~plugins/axios'
  import Topics from '~components/topic/list.vue'
  import News from '~components/repo/news.vue'
  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    asyncData () {
      return Promise.all([
        axios().get('news?limit=10'),
        axios().get('topic?limit=6&typcd=TOPIC')
      ]).then(([res1, res2]) => {
        return {
          newss: res1.data.items
          // latestTopics: res2.data
        }
      })
    },
    components: {
      Topics,
      News
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

  .search {
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .search-txt {
      padding: 10px;
      flex-grow: 1;
      border: 0;
      outline: none;
      font-size: 1.8rem
    }
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

  .chrome-logo {
      float: left;
      animation: spin 2s infinite linear;
      margin-right: 20px;
  }


  .more-topics {
    padding: 20px 0;
    text-align: center
  }
 }
 
</style>
