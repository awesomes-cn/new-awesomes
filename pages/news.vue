<template lang="pug">
  div.topics-wraper
    div.container
      div.row
        div.col-md-7
          div.news-wraper
            div.banner
              h4 前端情报局
            div.inner
              news(:newss="newss" flag="news-list")
          div.pagiwraper
            pagination(flag="news-list" v-bind:total="pagetotal" v-bind:size="pagesize")  
        div.col-md-5
          div.card
            div
              editor(flag="news"  v-bind:setval="setval" v-model="newcon" placeholder="有关前端库的新闻、感想、观点短评")
            
            div.new-footer
              div.alert.alert-warning 
                span 目前只针对
                a(href="") 前端客
                span 开放报料功能
              div.btn-wraper
                button.sub-btn(@click="submit")
                  icon(name="send" width="18px") 发布
          div.card.hot
            div.head
              h5 最佳情报
              a(href="javascript:void(0)" @click="fetchBest('week')" v-bind:class="'active-' + (period == 'week')") 本周
              a(href="javascript:void(0)" @click="fetchBest('month')"  v-bind:class="'active-' + (period == 'month')") 本月
              a(href="javascript:void(0)" @click="fetchBest()"  v-bind:class="'active-' + !period") 历史
            news(:newss="best" flag="news-hot")


                  
</template>


<script>
  import axios from '~plugins/axios'
  import News from '~components/repo/news.vue'
  import { Message } from 'element-ui'
  let pagesize = 5
  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    data () {
      return {
        newcon: '',
        pagesize: pagesize,
        period: 'week',
        setval: {
          time: Date.now(),
          val: ''
        },
        best: []
      }
    },
    asyncData ({ req, params, query }) {
      let page = query.page || 1
      return axios(req).get('news', {
        params: {
          limit: pagesize,
          skip: pagesize * (page - 1)
        }
      }).then(res => {
        let newss = res.data.items
        newss.forEach(item => {
          item.isShowCom = false
        })
        return {
          newss: newss,
          pagetotal: res.data.count
        }
      })
    },
    components: {
      News
    },
    methods: {
      setEditVal: function (val) {
        this.setval = {
          time: Date.now(),
          val: val
        }
      },
      submit: function () {
        if (this.showLogin()) {
          return
        }
        if (this.newcon.trim().length < 10) {
          Message({
            message: '内容字数不能小于10',
            type: 'error'
          })
          return
        }
        let self = this
        axios().post('/news', {con: this.newcon}).then(res => {
          if (res.data.status) {
            Message({
              message: '发布成功',
              type: 'success'
            })
            self.newss.unshift(res.data.item)
            self.setEditVal('')
          }
        })
      },

      // 获取最佳
      fetchBest: function (period) {
        this.period = period
        axios().get('news/best', {
          params: {
            period: period
          }
        }).then(res => {
          res.data.isShowCom = false
          this.best = [res.data]
        })
      }
    },
    created () {
      this.fetchBest('week')
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

    .new-bar {
      margin-bottom: 10px;
    }

    .new-footer {
      display: flex;
      margin-top: 10px;

      .btn-wraper {
        padding-left: 10px;
      }
      .alert {
        flex-grow: 1
      }
    }

    .sub-btn {
      border: none;
      color: #FFF;
      background-color: #da552f;
      padding: 10px 12px;
      cursor: pointer;
      float: right
    }

    .pagiwraper {
      background-color: #FFF;
      padding: 20px 0;
    }

    .hot {
      .head {
        display: flex;
        align-items: center;
        border-bottom: #DDD 1px dashed;
        padding-bottom: 10px;

        a {
          margin-left: 8px;

          &.active-true {
            color: red
          }
        }
      }
      article {
        font-size: 1.1rem
      }
      h5 {
        flex-grow: 1
      }
      .foot {
        display: flex;
        align-items: center;
        .tx {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          margin-right: 3px;
        }
        
        * {
          color: #8590a6;
        }
        & > a, & > span {
          margin-right: 10px;
        }
      }
    }

    .news-wraper {
      background-color: #FFF;
      .inner {
        padding:0 30px;
      }
      .banner {
        padding: 20px;
        border-bottom: #EEE 1px solid;

        * {
          display: inline-block
        }

        a {
          color: #8590a6;
          float: right
        }
      }
    }
 }
 


</style>
