<template lang="pug">
  div.repos
    div.repo-item(v-for="mark in marks")
      div.left
        nuxt-link(:to="'/repo/' + mark.repo.owner + '/' + mark.repo.alia")
          img.cover(:src="cdn(mark.repo.cover, 'repo', 'subject_repo')")
      div.center
        nuxt-link(:to="'/repo/' + mark.repo.owner + '/' + mark.repo.alia")
          h5 {{mark.repo.alia}}
        div.caption {{mark.repo.description_cn || mark.repo.description }}
        div.more
          span {{mark.repo.rootyp_zh}} > {{mark.repo.typcd_zh}} 
          icon(name="star" width="15px") {{mark.repo.stargazers_count}}
          icon(name="heart-o" width="15px") {{mark.repo.mark}}
          icon(name="hand" width="15px" v-bind:scale="[-1,1]") {{mark.repo.using}}
      // div.right
      //   a(href="") 取消收藏
    pagination(flag="weuse-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>

<script>
  import axios from '~plugins/axios'
  let pagesize = 20
  export default {
    data () {
      return {
        pagesize: pagesize
      }
    },
    asyncData ({ req, params, query, route }) {
      let page = query.page || 1
      return axios().get(`mem/${route.params.id}/opers`, {
        params: {
          opertyp: 'MARK',
          typ: 'REPO',
          limit: pagesize,
          skip: pagesize * (page - 1)
        }
      }).then(res => {
        return {
          marks: res.data.items,
          pagetotal: res.data.count
        }
      })
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    }
  }
</script>


<style lang="scss" scoped>
  .repos {
    padding: 10px;
    .repo-item {
      border-radius: 4px;
      margin-bottom: 30px;
      display: flex;
      width: 100%;
      border-bottom: #DDD 1px dashed;
      padding-bottom: 30px;
      
      .left {
        width: 80px;
      }

      .center {
        flex-grow: 1;
        padding-left: 10px;
      }

      .right {
        width: 90px;
        text-align: right;
        * {
          display: none;
        }
      }

      &:hover {
        .right * {
          display: inline-block
        }
      }
    }
    .cover {
      width: 100%;
      padding: 1px;
    }
    .caption {
      padding-bottom: 10px;
      overflow: hidden;
    }
    .more {
      font-size: 12px;
      display: flex;
      align-items: center;

      * {
        color: #AAA
      }

      span {
        margin-right: 10px;
      }
    }
  }
</style>
