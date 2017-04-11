<template lang="pug">
  div.container
    div.list-typs
      nuxt-link(v-for="first in rootyps" v-bind:to="'/repos/' + first.key")
        icon(:name="first.icon")
        span {{first.sdesc}}
    div.list-typs
      nuxt-link(v-for="second in typcds" v-bind:to="'/repos/' + rootyp + '/' + second.key" class="submenu")
        icon(:name="second.icon")
        span {{second.sdesc}}

    div.list-con
      div.list-item(v-for = "repo in repos")
        nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
          img.cover(:src="cdn(repo.cover, 'repo', 'repo')")
          h3 {{repo.name}}
        p {{repo.description_cn}}
        div.opers
          a(href="#"  v-bind:title="repo.using + '人在用'")
            icon(name="hand" class="transform")
            span {{repo.using}}

          a(href="#" v-bind:title="repo.mark + '人喜欢'")
            icon(name="heart-o" )
            span {{repo.mark}}
      pagination(flag="repos-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>

<script>
  import axios from '~plugins/axios'
  let initData = {}
  let pagesize = 15
  
  export default {
    name: 'repo-list',
    data () {
      return {
        pagesize: pagesize
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
            skip: pagesize * (page - 1)
          }
        })
      })
      .then(res => {
        initData.repos = res.data.items
        initData.pagetotal = res.data.count
        return initData
      })
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 100px;
  }
  .list-typs {
    text-align: center;
    font-size: 14px;
    padding: 10px 0;

    a {
      display: inline-block;
      margin: 10px;

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
  }

  .list-con {
    border-top: #EEE 1px solid;
  }
  

  .list-item{
    padding: 20px 0;
    position: relative;
    padding-left: 170px;
    padding-right: 30px;
    min-height: 130px;
    overflow: hidden;

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
      width: 130px;
      height: 90px;
      border-radius: 3px;
      position: absolute;
      margin-right: 10px;
      left: 20px;
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

    svg {
      float: left;
      width: 15px;
      height: 15px;
      margin-right: 5px;

      &.transform {
        -webkit-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
      }
    }
  }
</style>
