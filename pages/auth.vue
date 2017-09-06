<template lang="pug">
  div
</template>
<script>
  import axios from '~/plugins/axios'
  import Cookie from 'js-cookie'
  export default {
    data () {
      return {
        mol: ''
      }
    },
    created () {
      if (process.BROWSER_BUILD) {
        window.document.domain = window.location.hostname.replace(/^[A-Za-z]+\./, '')
      }
      axios().post(`auth/session`, {token: this.$route.query.token}).then(res => {
        Cookie.set('awlogin', res.data.token, {domain: window.location.hostname.replace(/^[A-Za-z]+/, '')})
        this.$store.commit('setUser', res.data.mem)
        window.opener.location.reload()
        window.close()
      })
    }
  }
</script>
