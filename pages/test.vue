<template lang="pug">
  div
    div.swiper-container
      div.swiper-wrapper
        div.swiper-slide Slide 1
        div.swiper-slide Slide 2
        div.swiper-slide Slide 3
        div.swiper-slide Slide 4
</template>
<script>
  
  require('swiper/dist/css/swiper.css')
  export default {
    mounted () {
      var Swiper = require('swiper')
      let myswiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        paginationClickable: true,
        freeMode: true
      })

      console.log(myswiper)
    }
  }
</script>

<style>
 .swiper-container {
    width: 200px;
    height: 300px;
    margin: 20px auto;
  }
</style>
