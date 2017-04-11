<template lang="pug">
  div
    div.sub-banner
      div.bglayer(v-bind:style="'background-image:url(' + cdn(sub.cover, 'subject') + ')'")
      div.bgcover

      div.container
        h1 {{sub.title}} 专题
        article {{sub.sdesc}}
</template>

<script>
  import axios from '~plugins/axios'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get(`subject/${params.name}`).then(res => {
        return {
          sub: res.data
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sub-banner {
    height: 300px;
    text-align: center;
    padding: 50px 1%;
    position: relative;
    color: #FFF;

    .bglayer {
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      z-index: -2;
      overflow: hidden;
      background-position: center center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .bgcover {
      z-index: -1;
      background-color: #000;
      opacity: 0.5;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    article {
      line-height: 30px;
    }
  }
</style>
