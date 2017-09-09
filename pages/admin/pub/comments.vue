<template lang="pug">
  div
    list(table="comment" v-bind:keys="keys")
</template>
<script>
  const Config = require('../../../config')
  export default {
    data () {
      return {
        keys: {
          idcd: {
            alia: '目标ID',
            type: 'a',
            link: (item) => {
              return `${Config[process.env.NODE_ENV].API}comment/${item.id}/target`
            }
          },
          mem_id: {
            alia: '用户',
            type: 'a',
            link: (item) => {
              return `/mem/${item.mem_id}`
            }
          },
          typ: '目标类型',
          con: '内容'
        }
      }
    },
    components: {
      List: () => import('~/components/admin/list.vue')
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .page-admin-pub-comments {
    tr.trflag-UNREAD * {
      color: #c7c7c7
    }
  }
</style>
