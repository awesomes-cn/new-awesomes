<template lang="pug">
  div(:class="'main-in page-' + mypage")
    alert(v-show="alertData.show" v-bind:msg="alertData.msg" v-bind:type="alertData.type")
    div.admin-header
      nuxt-link(to="/admin/mem/mems") 会员
      nuxt-link(to="/admin/pub/submits") 发布
      nuxt-link(to="/admin/site/webkerapply") 站点
    div.body
      div.left-menu
        template(v-if="rouname === 'mem'")
          nuxt-link(to="/admin/mem/mems") 会员
        template(v-if="rouname === 'pub'")
          nuxt-link(to="/admin/pub/submits") 前端库提交
          nuxt-link(to="/admin/pub/comments") 评论
        template(v-if="rouname === 'site'")
          nuxt-link(to="/admin/site/webkerapply") 情报员申请  
      nuxt
</template>

<script>
import Alert from '~/components/alert.vue'
export default {
  data () {
    return {
      mypage: this.$route.name
    }
  },
  components: {
    Alert
  },
  computed: {
    rouname: function () {
      let arr = this.$route.name.split('-')
      return arr[1]
    },
    alertData: function () {
      return this.$store.state.alert
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
