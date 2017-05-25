<template lang="pug">
  div.main-area
    div.toitem(v-for="item in notifiys")
      article(v-html="processAt(marked(item.con))")
      span.flag(:class="item.status")
      
    pagination(flag="notifiy-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>
<script>
  import axios from '~plugins/axios'
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
      }
    }
  }
</script>

<style lang="scss">
  .page-notifications {
    background: #f7f8fa;
    
    .main-area {
      background-color: #FFF;
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

        article {
          flex-grow: 1
        }
        
        .flag {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #EEE;
          border-radius: 100%;

          &.UNREAD {
            background-color: #22e076
          }
        }
      }
    }
  }
</style>
