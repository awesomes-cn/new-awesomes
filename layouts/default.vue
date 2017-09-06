<template lang="pug">
  div(:class="'main-in page-' + mypage")
    my-header
    div.body
      alert(v-show="alertData.show" v-bind:msg="alertData.msg" v-bind:type="alertData.type")
      nuxt
    my-footer
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/header.vue'
import Alert from '~/components/alert.vue'

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
    MyHeader,
    Alert
  },
  computed: {
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
