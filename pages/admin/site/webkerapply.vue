<template lang="pug">
  div
    list(table="webkerapply" v-bind:keys="keys" opers="['agree_webker_apply']")
</template>
<script>
  export default {
    data () {
      return {
        keys: {
          from: {
            alia: '会员',
            type: 'a',
            link: (item) => {
              return `/mem/${item.from}`
            }
          },
          con: '理由'
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
