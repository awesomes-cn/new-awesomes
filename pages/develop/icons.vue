<template lang="pug">
  div
    div.icon-outer.container
      div.icon-item(v-for="icon in icons")
        icon(:name="icon")
        h5 {{icon}}
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    data () {
      return {
        icons: []
      }
    },
    async created () {
      let res = await axios().get('develop/icons')
      this.icons = res.data
    }
  }
</script>

<style lang="scss" scoped>
  .icon-outer {
    display: flex;
    padding: 50px 0;
    flex-wrap: wrap;
  }

  .icon-item {
    width: 100px;
    margin-bottom: 20px;
    text-align: center;

    h5 {
      padding: 20px 0;
      font-weight: normal
    }
  }
</style>
