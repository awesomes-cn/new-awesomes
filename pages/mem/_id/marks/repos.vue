<template lang="pug">
  div.repos.container
    template(v-if="marks.length > 0")
      div.row
        div.col-md-4.col-sm-4.col-4(v-for="mark in marks")
          ul.list-group.repo-item(style="margin-bottom: 20px")
            li.list-group-item
              nuxt-link(:to="'/repo/' + mark.repo.owner + '/' + mark.repo.alia")
                // img.cover(:src="cdn(mark.repo.cover, 'repo', 'subject_repo')")
                h5.reponame {{mark.repo.alia}}
            li.list-group-item.color-item
              nuxt-link(:to="'/repo/' + mark.repo.owner + '/' + mark.repo.alia")
                img.cover(:src="cdn(mark.repo.cover, 'repo', 'subject_repo')")
              // div {{mark.repo.typcd_zh}} 
              // icon(name="collect" width="18px") {{mark.repo.mark}}
            li.list-group-item
              div.caption {{mark.repo.description_cn || mark.repo.description }}
            li.list-group-item
              div.time-box
                icon(name="clock-o" width="17px" :title="'收藏于' + timeago(mark.created_at)") {{timeago(mark.created_at)}}
                a.remove-btn(href="javascript:void(0)" title="取消收藏" @click="cancel(mark)" v-if="session.id === mark.mem_id")
                  icon(name="cancel" width="12px")
      pagination(flag="weuse-list" v-bind:total="pagetotal" v-bind:size="pagesize" style="margin-top: 30px;")
    template(v-else)
      h2.noitem 尚未收藏前端库
</template>

<script>
  import axios from '~/plugins/axios'
  let pagesize = 20
  export default {
    scrollToTop: true,
    watchQuery: ['page'],
    data () {
      return {
        pagesize: pagesize
      }
    },
    asyncData ({ req, params, query, route }) {
      let page = query.page || 1
      return axios().get(`mem/${params.id}/opers`, {
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
      cancel: async function (mark) {
        let res = await axios().post('oper', {
          opertyp: 'MARK',
          typ: 'REPO',
          idcd: mark.repo.id
        })
        if (!res.data.has) {
          this.marks.splice(this.marks.indexOf(mark), 1)
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .repos {
    .cover {
      margin-right: 10px;
      // border-radius: 100%;
      padding: 5px;
      background-color: rgba(255, 255, 255, 0.4);
      width: 100px;
    }
    
    .reponame {
      word-break: keep-all;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      padding: 0.6rem 0;
      font-size: 1.3rem;
    }
    .caption {
      line-height: 25px;
      height: 50px;
      overflow: hidden;
      font-size: 12px;
      color: #99a0a3;
    }

    .repo-item {
      box-shadow: 0px 0px 10px #ededed;
      max-width: 200px;
      margin-bottom: 3rem;
      border: #e9e9e9 1px solid;
      .remove-btn {
        float: right;
        color: red;
        display: none;
      }

      .list-group-item {
        // border: 1px solid rgba(104, 129, 134, 0.125);
        border: none;
      }

      &:hover {
        .remove-btn {
          display: inline-block;
        }
      }

      .time-box {
        color: #9b9b9b
      }
    }

    .noitem {
      padding: 80px 0;
      text-align: center;
      color: #DDD;
    }

    .color-item {
      background-color: rgba(198, 186, 143, 0.08);
      background-color: #f7f8fa;
      text-align: center
    }
  }
</style>
