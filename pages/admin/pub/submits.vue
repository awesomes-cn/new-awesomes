<template lang="pug">
  div
    list(table="submit" v-bind:keys="keys")
</template>
<script>
  let List = require('~components/admin/list')
  export default {
    data () {
      return {
        keys: {
          html_url: {
            alia: '地址',
            type: 'a'
          },
          typcd: '类型',
          status: {
            alia: '状态',
            trclass: true
          }
        }
      }
    },
    components: {
      List
    }
  }
</script>

<style lang="scss">
  .page-admin-pub-submits {
    tr.trflag-UNREAD * {
      color: #c7c7c7
    }
  }
</style>
