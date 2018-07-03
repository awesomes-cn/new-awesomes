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
        nuxt-link(to="?sort=score" v-bind:class="sortby == 'score' ? 'active' : ''") 评分
        nuxt-link(to="?sort=new" v-bind:class="sortby == 'new' ? 'active' : ''") 最新
        nuxt-link(to="?sort=trend" v-bind:class="sortby == 'trend' ? 'active' : ''") 趋势 

    line-repo(:repos="repos")
    pagination(flag="repos-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>

<script>
  import axios from '~/plugins/axios'
  import LineRepo from '~/components/repo/line-item'
  let initData = {}
  let pagesize = 15
  
  export default {
    name: 'repo-list',
    watchQuery: ['page', 'sort'],
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
      LineRepo
    },
    watch: {
      '$route': function () {
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    max-width: 900px;
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
