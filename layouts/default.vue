<template lang="pug">
  div(:class="'main-in page-' + mypage")
    my-header
    div.body
      nuxt
    my-footer
</template>

<script>
import MyFooter from '~components/Footer.vue'
import MyHeader from '~components/header.vue'

export default {
  data () {
    return {
      mypage: this.$route.name
    }
  },
  head () {
    return {
      titleTemplate: (this.$store.state.unreadNotifiy > 0 ? `(${this.$store.state.unreadNotifiy} 条消息) %s` : '%s')
    }
  },
  components: {
    MyFooter,
    MyHeader
  },
  watch: {
    '$route': function () {
      this.mypage = this.$route.name
    }
  }
}
</script>
