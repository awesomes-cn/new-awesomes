<template lang="jade">
  div.swiper-container(:id="flag")
    div.swiper-wrapper
      img.swiper-slide(v-for="item in pics" v-bind:src="item.pic")
    div.swiper-pagination
    div.swiper-button-next
    div.swiper-button-prev  
</template>

<script>
  import Swiper from 'swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    props: ['pics', 'flag'],
    data () {
      return {
      }
    },
    mounted () {
      new Swiper (`#${this.flag}`, {
      })
    }
  }
</script>

<style lang="sass" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
</style>
