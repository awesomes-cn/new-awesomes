<template lang="pug">
  div.container
    div.list-typs
      nuxt-link(v-for="first in rootyps" v-bind:to="'/repos/' + first.key")
        icon(:name="first.icon") {{first.sdesc}}
    div.result
      span 共找到
      strong {{pagetotal}}
      span 条关于
      strong {{$route.query.q}}
      span 的搜索结果 by
      a(href="https://www.algolia.com/" target="_blank")
        strong Algolia
    div.list-con
      div.list-item(v-for = "repo in repos")
        nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
          img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
        div.middle
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            h3 {{repo.name}}
          p {{repo.description_cn || repo.description}}
          div.opers
            a(href="#"  v-bind:title="repo.using + '人在用'")
              icon(name="hand" class="transform" width="15px") {{repo.using}}

            a(href="#" v-bind:title="repo.mark + '人喜欢'")
              icon(name="heart-o"  width="15px") {{repo.mark}}
        div
          fresh(:time="repo.pushed_at")    
      pagination(flag="repos-list" v-bind:total="pagetotal" v-bind:size="pagesize")
</template>

<script>
  import axios from '~/plugins/axios'
  import Fresh from '~/components/repo/fresh.vue'
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
      })
      .then(res => {
        let page = query.page || 1
        return axios().get(`repo`, {
          params: {
            page: page,
            search: query.q
          }
        })
      })
      .then(res => {
        initData.repos = res.data.items
        initData.pagetotal = res.data.count
        return initData
      })
    },
    components: {
      Fresh
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1000px;
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

    svg {
      &.transform {
        -webkit-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
      }
    }
  }

  .result {
    text-align: center;
    border-top: #EEE 1px solid;
    padding: 15px;

    strong {
      color: #20a0ff;;
      margin: 0 5px;
    }
  }

</style>
