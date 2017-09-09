<template lang="pug">
  div
    list(table="mem" v-bind:keys="keys")
</template>
<script>
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
      List: () => import('~/components/admin/list.vue')
    }
  }
</script>

<style lang="scss" scoped>
</style>
