<template lang="pug">
  div.container
    div.list-typs
      nuxt-link(v-for="first in rootyps" v-bind:to="'/repos/' + first.key")
        icon(:name="first.icon"  width="16px") {{first.sdesc}}
    div.list-typs.bottom
      nuxt-link(v-for="second in typcds" v-bind:to="'/repos/' + rootyp + '/' + second.key" class="submenu")
        icon(:name="second.icon" width="14px") {{second.sdesc}}

    div.sorts
      div.inner
        nuxt-link(to="?sort=hot" v-bind:class="sortby == 'hot' ? 'active' : ''") 热门
        nuxt-link(to="?sort=new" v-bind:class="sortby == 'new' ? 'active' : ''") 最新
        nuxt-link(to="?sort=trend" v-bind:class="sortby == 'trend' ? 'active' : ''") 趋势 

    div.list-con
      template(v-for = "(repo, index) in repos")
        div.list-item
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
          div.middle
            nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
              h3 {{repo.name}}
            p {{repo.description_cn || repo.description}}
            div.opers
              a(href="#"  v-bind:title="repo.using + '人在用'")
                icon(name="hand"  width="15px" v-bind:scale="[-1,1]") {{repo.using}}

              a(href="#" v-bind:title="repo.mark + '人喜欢'")
                icon(name="heart-o"  width="15px") {{repo.mark}}
          div
            fresh(:time="repo.pushed_at")
      pagination(flag="repos-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>

<script>
  import axios from '~plugins/axios'
  import Fresh from '~components/repo/fresh.vue'
  let initData = {}
  let pagesize = 15
  
  export default {
    name: 'repo-list',
    data () {
      return {
        pagesize: pagesize,
        sortby: 'hot'
      }
    },
    asyncData ({ req, params, query }) {
      return axios().get('category/first')
      .then(res => {
        initData.rootyps = res.data
        initData.rootyp = params.rootyp
        return axios().get(`category/${params.rootyp}/second`)
      })
      .then(res => {
        initData.typcds = res.data
        let page = query.page || 1
        return axios().get(`repo`, {
          params: {
            rootyp: params.rootyp,
            typcd: params.typcd,
            limit: pagesize,
            skip: pagesize * (page - 1),
            sort: query.sort,
            page: page
          }
        })
      })
      .then(res => {
        initData.repos = res.data.items
        initData.pagetotal = res.data.count
        initData.sortby = query.sort || 'hot'
        return initData
      })
    },
    head () {
      return {
        title: '前端库',
        meta: [
          { hid: 'description', name: 'description', content: 'Web前端开发工程师需要的免费开源的高质量前端库、框架和插件' }
        ]
      }
    },
    components: {
      Fresh
    },
    watch: {
      '$route': function () {
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    max-width: 1000px;
    padding-top: 10px;
    padding-bottom: 100px;
  }
  .list-typs {
    text-align: center;
    padding: 5px 0;

    a {
      display: inline-block;
      margin: 15px;

      &.submenu:link,  &.submenu:visited{
        color: #979797;

        &.nuxt-link-active {
          color: #da552f;
        }
      }

      &.nuxt-link-active {
        color: #da552f;
        font-weight: bold
      }

      
    }

    svg {
      width: 17px;
      height: 17px;
      margin-right: 5px;
      float: left
    }

    &.bottom {
      border-bottom: #EEE 1px solid;
      padding-bottom: 30px;
    }
  }

  .list-con {
  }
  

  .list-item{
    padding: 20px 0;
    position: relative;
    min-height: 130px;
    overflow: hidden;
    display: flex;
    align-items: center;

    h3 {
      font-weight: 600;
      font-size: 21px;
      margin-top: 1px;
      margin-bottom: 5px;
    }

    p {
      color: #666;
      overflow: hidden;
    }

    .cover {
      height: 90px;
      border-radius: 3px;
      margin-right: 15px;
      left: 20px;
      -webkit-transition: all, .5s, ease, 0s;
      transition: all, .5s, ease, 0s;

      &:hover {
        -webkit-filter: hue-rotate(40deg);
        filter: hue-rotate(40deg);
      }
    }

    .middle {
      flex-grow: 1
    }
  }

  .opers {
    a {
      display: inline-block;
      border: #EEE 1px solid;
      font-size: 10px;
      border: rgba(1, 47, 98, 0.07) 1px solid;
      font-size: 10px;
      color: rgba(0, 39, 82, 0.39);
      padding: 5px 10px;
      border-radius: 2px;
      text-decoration: none;
      line-height: 15px;
      margin-right: 10px;
    }
  }

  .sorts {
    margin-top: -20px;
    text-align: center;
    .inner {
      display: inline-block;
      background-color: #FFF;
      padding: 0 15px;
    }
    a {
      display: inline-block;
      margin: 10px;

      &.active {
        color: #da552f
      }
    }
  }
</style>
