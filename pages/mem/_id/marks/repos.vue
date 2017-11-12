<template lang="pug">
  div.repos.container
    template(v-if="marks.length > 0")
      div.row
        div.col-md-3.col-sm-3.col-4(v-for="mark in marks")
          ul.list-group.repo-item(style="margin-bottom: 20px")
            li.list-group-item
              nuxt-link(:to="'/repo/' + mark.repo.owner + '/' + mark.repo.alia")
                // img.cover(:src="cdn(mark.repo.cover, 'repo', 'subject_repo')")
                h5.reponame {{mark.repo.alia}}
            li.list-group-item(:class="'list-group-item list-group-item-' + getColor(mark.repo.alia)")
              nuxt-link(:to="'/repo/' + mark.repo.owner + '/' + mark.repo.alia")
                img.cover(:src="cdn(mark.repo.cover, 'repo', 'subject_repo')")
              div {{mark.repo.typcd_zh}} 
              icon(name="collect" width="18px") {{mark.repo.mark}}
            li.list-group-item
              div.caption {{mark.repo.description_cn || mark.repo.description }}
            li.list-group-item
              div.time-box
                icon(name="clock-o") {{timeago(mark.created_at)}}
                a.remove-btn(href="javascript:void(0)" title="取消收藏")
                  icon(name="cancel" width="14px")
      pagination(flag="weuse-list" v-bind:total="pagetotal" v-bind:size="pagesize")
    template(v-else)
      h2.noitem 尚未收藏前端库
</template>

<script>
  import axios from '~/plugins/axios'
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
    },
    methods: {
      getColor: function (name) {
        let colors = ['primary', 'success', 'danger', 'warning', 'info', 'secondary']
        let _index = Math.abs(parseInt((name.length + '').split('').pop()) - 5)
        return colors[_index]
      }
    }
  }
</script>


<style lang="scss" scoped>
  .repos {
    .cover {
      width: 40px;
      float: left;
      margin-right: 10px;
      border-radius: 100%;
      padding: 5px;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .reponame {
      word-break: keep-all;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      padding: 0;
    }
    .caption {
      line-height: 25px;
      height: 50px;
      overflow: hidden;
      font-size: 12px;
      color: #99a0a3;
    }

    .repo-item {
      .remove-btn {
        float: right;
        color: red;
        display: none;
      }

      &:hover {
        .remove-btn {
          display: inline-block;
        }
      }
    }

    .noitem {
      padding: 80px 0;
      text-align: center;
      color: #DDD;
    }
  }
</style>
