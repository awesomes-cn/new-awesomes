<template lang="pug">
  div.row
    div.sub-item.col-md-6(v-for="sub in sliceThree(datalist)")
      nuxt-link(:to="'/subject/' + sub.key" v-bind:style="'background-image:url(' + cdn(sub.cover, 'subject', 'subject') + ')'")
        div.detail 
          h4 {{sub.title}}
</template>

<script>
  export default {
    props: ['datalist'],
    methods: {
      sliceThree: (arr) => {
        return arr.slice(0, 4)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sub-item {
    padding: 10px;
    position: relative;
    a {
      display: block;
      height: 90px;
      border-radius: 2px;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      background-position: center center;
      position: relative;
      color: #FFF;

      &:before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-color: #FFF;
        position: absolute;
        top: 35px;
        left: -10px;
        z-index: 100;
        border-radius: 100%;
      }

      &:after {
        display: block;
        content: '';
        height: 100%;
        background-color: rgba(0, 0, 0, 0.54);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
      }

      &:hover {
        &:after {
          background-color: rgba(0, 0, 0, 0.7);
        }
      }

      .detail {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        h4 {
          text-align: center;
        }

        .total {
          text-align: center;
          padding-top: 40px;
          span {
            display: inline-block;
            border: #FFF 1px dashed;
            padding: 10px 20px;
          }
        }
      }
    }
    
  }
</style>
