<template lang="pug">
  div
    template(v-if="comments.length > 0")
      div.comments
        div.com-item(v-for="item in comments")
          div.up 
            icon(name="arrow-up") {{item.favor}}
          div.right
            article(v-html="processAt(marked(item.con))")
            span.time {{timeago(item.created_at)}}
      pagination(flag="comments-list" v-bind:total="pagetotal" v-bind:size="pagesize")
    template(v-else)
      h2.noitem 尚未发布评论
</template>

<script>
  import axios from '~/plugins/axios'
  let pagesize = 10
  export default {
    watchQuery: ['page'],
    data () {
      return {
        pagetotal: 0,
        pagesize: pagesize
      }
    },
    asyncData ({ req, params, query, route }) {
      let page = query.page || 1
      return axios(req).get(`comment`, {
        params: {
          mem_id: route.params.id,
          limit: pagesize,
          skip: pagesize * (page - 1),
          order: 'id desc'
        }
      }).then(res => {
        return {
          comments: res.data.items,
          pagetotal: res.data.count
        }
      })
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    },
    methods: {
      // 处理 @
      processAt: function (con) {
        return con.replace(/@([^:：?\s@]+)/g, '<a href="#" class="ata">@$1</a>')
      }
    },

    created () {
    }
  }
</script>


<style lang="scss" scoped>
  .comments {
    padding: 10px 20px;
  }

  .com-item {
    display: flex;
    margin-bottom: 30px;

    .right {
      padding-left: 20px;
    }
  }

  .up {
    background-color: hsla(0,0%,95%,.8);
    color: #909090;
    padding: .2rem .2rem;
    padding-right: .5rem;
    border-radius: 2px;
    height: 30px;
  }

  .noitem {
    padding: 80px 0;
    text-align: center;
    color: #DDD;
  }
</style>
