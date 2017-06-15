<template lang="pug">
  div
    h1 {{mol}}
    upload(v-model="mol" folder="repo")
</template>
<script>
  export default {
    data () {
      return {
        mol: ''
      }
    },
    methods: {
      sub: function () {
        this.$alert('danger', 'hellhxho')
        console.log('==', this.$store.state.alert)
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
