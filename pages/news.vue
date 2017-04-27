<template lang="pug">
  div.topics-wraper
    div.container
      div.row
        div.col-md-7
          news(:newss="newss")
            
        div.col-md-5
          div.card
            // h5 我要爆料
            editor(flag="news"  v-bind:setval="setval")
            button.sub-btn(@click="submit")
              icon(name="send" width="18px") 报个料
                  
</template>


<script>
  import axios from '~plugins/axios'
  import News from '~components/repo/news.vue'
  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    data () {
      return {
        setval: {
          time: Date.now(),
          val: ''
        }
      }
    },
    asyncData () {
      return axios().get('news?limit=10').then(res => {
        let newss = res.data.items
        newss.forEach(item => {
          item.isShowCom = false
        })
        return {
          newss: newss
        }
      })
    },
    components: {
      News
    }
  }
</script>


<style lang="scss">
 .page-news {
   background: #f7f8fa;
   padding-bottom: 50px;

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

    .sub-btn {
      border: none;
      color: #FFF;
      background-color: #da552f;
      padding: 8px 10px;
      cursor: pointer;
      margin-top: 10px;
      float: right
    }
 }
 


</style>
