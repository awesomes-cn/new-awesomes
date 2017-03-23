<template lang="pug">
  div
    my-header
    div.body
      nuxt
    //- my-footer
</template>

<script>
import MyFooter from '~components/Footer.vue'
import MyHeader from '~components/header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>


</style>
