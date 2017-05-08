<template lang="pug">
  div.fresh(:class="format(time)" v-bind:title="'更新于' + timeago(time)")
</template>


<script>
  export default {
    props: ['time'],
    methods: {
      // 20天内算频繁
      // 7个月内算普通
      // 大于7个月算过期
      format: function (time) {
        let days = (Date.parse(new Date()) - Date.parse(new Date(time))) / 1000 / 60 / 60 / 24
        if (days <= 20) {
          return 'often'
        }
        if (days <= 7 * 30) {
          return ''
        }

        return 'outdated'
      }
    }
  }
</script>


<style lang="scss" scoped>
  .fresh {
    display: inline-block;
    background-color: #EEE;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    background-color: #EEE;
    flex-shrink: 0;

    &.often {
      background-color: #A4EDA4
    }
    &.outdated {
      background-color: #FFBCBC;
    }
  }
</style>
