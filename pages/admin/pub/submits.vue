<template lang="pug">
  div
    list(table="submit" v-bind:keys="keys" opers="['fetch']")
</template>
<script>
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
      List: () => import('~/components/admin/list.vue')
    },
    methods: {
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
