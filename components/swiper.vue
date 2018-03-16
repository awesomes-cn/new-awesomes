<template lang="pug">
  div.swiper-container(:id="'swiper-instance-' + flag")
    div.swiper-wrapper
      div.swiper-slide(v-for="item in items" href="http://www.baidu.com")
        nuxt-link.swiper-item(:to="item.link" v-bind:style="'background-image:url(' + cdn(item.img, 'repo') + ')'")
          div.slide-title
            h4 {{item.title}}
    div.swiper-pagination
    // div.swiper-button-next
    // div.swiper-button-prev  
</template>

<script>
  require('swiper/dist/css/swiper.css')
  import Swiper from 'swiper'
  export default {
    props: ['flag', 'items'],
    mounted () {
      if (process.browser) {
        new Swiper(`#swiper-instance-${this.flag}`, {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      }
    }
  }
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  .swiper-item {
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    background-position: center center;
    height: 300px;
    width: 100%;
    position: relative;
    .slide-title {
      position: absolute;
      bottom: 0;
      color: #FFF;
      background-image: linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.85) 100%);
      width: 100%;
      padding: 30px;
      h4 {
        line-height: 30px;
      }
    }
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 3px;
    border-radius: 3px;
    background: #FFF;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #FFF;
    opacity: 1
  }
}
</style>
