<template lang="pug">
  div.main-area
    template(v-if="notifiys.length > 0")
      div.toitem(v-for="item in notifiys")
        article(v-html="processAt(marked(item.con))")
        span.time {{timeago(item.created_at)}}
        span.flag(:class="item.status")
        
      pagination(flag="notifiy-list" v-bind:total="pagetotal" v-bind:size="pagesize")
    template(v-else)
      h2.noitem 消息列表为空
</template>
<script>
  import axios from '~/plugins/axios'
  let pagesize = 15
  export default {
    data () {
      return {
        pagesize: pagesize
      }
    },
    async asyncData ({ req, params, query }) {
      let page = query.page || 1
      let res = await axios(req).get('notification', {
        params: {
          limit: pagesize,
          skip: pagesize * (page - 1)
        }
      })
      return {
        notifiys: res.data.items,
        pagetotal: res.data.count
      }
    },
    methods: {
      // 处理 @
      processAt: function (con) {
        return con.replace(/@([^:：?\s@]+)/g, '<a href="#" class="ata">@$1</a>')
      },
      // 重置状态
      resetStatus: function () {
        let unreads = this.notifiys.filter(item => {
          return item.status === 'UNREAD'
        }).map(item => {
          return item.id
        })
        if (unreads.length < 1) {
          return
        }
        axios().post('notification/reset', {
          ids: unreads
        })
      }
    },
    mounted () {
      setTimeout(this.resetStatus, 1000)
    }
  }
</script>

<style lang="scss">
  .page-notifications {
    background: #f7f8fa;
    
    .main-area {
      background-color: #FFF;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
      max-width: 800px;
      margin: 50px auto;
      padding: 40px;
      font-size: 1.1rem;
      color: #666;
      a:link, a:visited {
        color: #666;
      }

      a:hover, a:active {
        color: #333;
      }

      a {
        font-weight: bold;
      }

      .toitem {
        display: flex;
        margin: 10px 0;
        align-items: center;

        article {
          flex-grow: 1
        }

        .time {
          color: #BBB
        }
        
        .flag {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #EEE;
          border-radius: 100%;
          margin-left: 20px;

          &.UNREAD {
            background-color: #22e076
          }
        }
      }
    }

    .noitem {
      padding: 80px 0;
      text-align: center;
      color: #DDD;
    }
  }
</style>
