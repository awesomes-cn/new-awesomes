<template lang="pug">
  div(:class="'page-' + mypage")
    div.body
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

<style>
</style>
