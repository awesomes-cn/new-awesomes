<template lang="pug">
  div.main-area
    nuxt-child
</template>
<script>
  export default {
    layout: 'admin'
  }
</script>

<style lang="scss" scoped>
  .main-area {
    padding: 0 30px;
    flex-grow: 1
  }
</style>
