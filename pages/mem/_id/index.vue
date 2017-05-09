<template lang="pug">
  div
    div.row
      div.col-md-3.col-sm-3.col-4.repo-item(v-for="oper in usings")
        nuxt-link(:to="'/repo/' + oper.repo.owner + '/' + oper.repo.alia")
          img.cover(:src="cdn(oper.repo.cover, 'repo', 'repo')")
          h5 {{oper.repo.alia}}
</template>

<script>
  import axios from '~plugins/axios'
  export default {
    data () {
      return {
        usings: []
      }
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    },

    methods: {

      // 获取我在用的
      fecthUsing () {
        axios().get(`mem/${this.$route.params.id}/opers?opertyp=USING&limit=1000`).then(res => {
          res.data.items.sort((a, b) => { return a.order - b.order })
          this.usings = res.data.items
        })
      }
    },

    created () {
      this.fecthUsing()
    }
  }
</script>


<style lang="scss" scoped>
  .repo-item {
    text-align: center;
    margin-top: 20px;
    .cover {
      width: 100%;
      max-width: 100px;
      margin-bottom: 10px;
    }
  }
  
</style>
