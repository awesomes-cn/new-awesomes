<template lang="pug">
  div
    div.newss
      news(:newss="newss" flag="my-news-list")
    pagination(flag="news-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>

<script>
  import axios from '~plugins/axios'
  import News from '~components/repo/news.vue'
  let pagesize = 10
  export default {
    data () {
      return {
        pagetotal: 0,
        pagesize: pagesize
      }
    },
    asyncData ({ req, params, query, route }) {
      let page = query.page || 1
      return axios(req).get(`news?mem=${route.params.id}`, {
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
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    },
    components: {
      News
    },
    methods: {
    },

    created () {
    }
  }
</script>


<style lang="scss" scoped>
  .newss {
    padding: 10px 20px;
  }
</style>
