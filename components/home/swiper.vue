<template lang="pug">
  div
    swiper(:options="swiperOption")
      swiper-slide(v-for="slide in swiperSlides") I'm Slide {{ slide }}
      div(class="swiper-pagination" slot="pagination")
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted () {
      setInterval(() => {
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
  }
</script>

<style lang="scss" scoped>
</style>
