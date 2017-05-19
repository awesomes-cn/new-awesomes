<template lang="pug">
  div(:class="'main-in page-' + mypage")
    div.admin-header
      nuxt-link(to="/admin/mem/mems") 会员
      nuxt-link(to="/admin/pub/submits") 发布
      nuxt-link(to="/admin/site") 站点
    div.body
      div.left-menu
        nuxt-link(to="/admin/mem/mems") 会员
        nuxt-link(to="/admin/pub/submits") 发布
      nuxt
</template>

<script>

export default {
  data () {
    return {
      mypage: this.$route.name
    }
  },
  watch: {
    '$route': function () {
      this.mypage = this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
  .admin-header {
    display: flex;
    box-shadow: 1px 1px 2px #eeeeee;

    a {
      display: block;
      font-weight: bold;
      padding: 20px;
      font-size: 1.1rem;

      &.nuxt-link-active {
        color: #e41818
      }
    }
  }
  .body {
    display: flex;
    padding: 30px;
    align-items: flex-start
  }
  .left-menu {
    width: 200px;
    border: #EEE 1px solid;
    height: auto;
    a {
      display: block;
      padding: 15px;
      border-top: #EEE 1px solid;

      &:first-child {
        border: 0;
      }

      &.nuxt-link-active {
        color: #e41818
      }
    }
  }
</style>
