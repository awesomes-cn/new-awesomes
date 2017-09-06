<template lang="pug">
  div
    list(table="mem" v-bind:keys="keys")
</template>
<script>
  let List = require('~/components/admin/list')
  export default {
    data () {
      return {
        keys: {
          nc: '昵称',
          email: '邮箱'
        }
      }
    },
    components: {
      List
    }
  }
</script>

<style lang="scss" scoped>
</style>
