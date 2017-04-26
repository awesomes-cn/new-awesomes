<template lang="pug">
  div
    h4 我的收藏（{{pagetotal}}）
    div.row.repos
      div.col-md-3.col-6(v-for="mark in marks")
        div.repo-item
          h5 {{mark.repo.alia}}
          
          nuxt-link(:to="'/repo/' + mark.repo.owner + '/' + mark.repo.alia")
            img.cover(:src="cdn(mark.repo.cover, 'repo', 'repo')")
          
          div.caption {{mark.repo.description_cn}}
    pagination(flag="weuse-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>

<script>
  import axios from '~plugins/axios'
  let pagesize = 16
  export default {
    data () {
      return {
        marks: [],
        pagetotal: 0,
        pagesize: pagesize
      }
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    },

    methods: {

      // 搜藏的前端库
      markRepos: function (page) {
        axios().get(`mem/${this.$route.params.id}/opers`, {
          params: {
            opertyp: 'MARK',
            typ: 'REPO',
            limit: pagesize,
            skip: pagesize * (page - 1)
          }
        }).then(res => {
          this.marks = res.data.items
          this.pagetotal = res.data.count
        })
      }
    },

    created () {
      this.markRepos(1)
    }
  }
</script>


<style lang="scss" scoped>
  .repos {
    .repo-item {
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin-bottom: 20px;

      h5 {
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 10px 0;
        border-bottom: #EEE 1px solid;
        margin: 0;
      }
    }
    .cover {
      width: 100%;
      padding: 1px;
    }
    .caption {
      padding: 10px;
      border-top: 1px solid #EEE;
      height: 65px;
      overflow: hidden;
      line-height: 25px;
      font-size: 12px;
    }
  }
</style>
