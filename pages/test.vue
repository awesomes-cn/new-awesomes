<template lang="pug">
  div
    button.btn(@click="sub") 显示消息
</template>
<script>
  export default {
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
