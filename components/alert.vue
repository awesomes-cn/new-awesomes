<template lang="pug">
  transition(name="custom-classes-transition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUpBig")  
    div.alert(:class="'alert-' + type")
      span {{msg}}
      button(type="button" class="close" aria-label="Close" @click="close")
        span(aria-hidden="true") &times;
</template>
<script>
  export default {
    props: ['type', 'msg'],
    methods: {
      close: function () {
        this.$store.commit('hideAlert')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .alert {
    position: fixed;
    z-index: 100;
    margin: auto;
    left: 0; 
    right: 0; 
    border-radius: 0;
    text-align: center;
    opacity: 0.9;
    .close {
      outline: none;
    }
  }
  .animated {
    animation-duration: .5s;
  }
</style>
