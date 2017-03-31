<template lang="pug">
  div
    h1 hello
</template>

<script>
  export default {
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    }
  }
</script>


<style lang="scss" scoped>
 
</style>
