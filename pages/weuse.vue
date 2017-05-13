<template lang="pug">
  div
    div.banner
      h2 大牛在用
      p.slogon 参考大牛们在使用的框架，给自己的选择提供一个很好的参考
      nuxt-link(to="joinuse" class="share-btn") 我要分享
    div.container    
      div.share-item(v-for="mem in mems")
        div.mem-info
          nuxt-link(:to="'mem/' + mem.id")
            img.tx(:src="cdn(mem.avatar, 'mem')")
          h5
            span {{mem.nc}} 
            span(v-if="isExsit(mem.mem_info.company)") @ {{mem.mem_info.company}}
          div.links
            a.a-home(:href="mem.mem_info.blog" v-if="isExsit(mem.mem_info.blog)" target="_blank")
              icon(name="home")
            a.a-github(:href="'https://github.com/' + mem.mem_info.github"  v-if="isExsit(mem.mem_info.github)" target="_blank")
              icon(name="github")
            a.a-weibo(:href="'http://weibo.com/' + mem.mem_info.weibo_url"  v-if="isExsit(mem.mem_info.weibo_url)" target="_blank")
              icon(name="weibo")
            a.a-twitter(:href="'https://twitter.com/' + mem.mem_info.twitter"  v-if="isExsit(mem.mem_info.twitter)" target="_blank")
              icon(name="twitter")      
        div.repos.row
          div.col-md-3.col-sm-3.col-6(v-for="oper in mem.usings")
            div.repo-item
              nuxt-link(:to="'/repo/' + oper.repo.owner + '/' + oper.repo.alia")
                img.cover(:src="cdn(oper.repo.cover, 'repo', 'subject_repo')")
                div.alia
                  strong {{oper.repo.alia}}
                span.usingmems {{oper.repo.using}} 人在用
      div(style="margin-top: 30px;")        
        pagination(flag="weuse-list" v-bind:total="pagetotal" v-bind:size="pagesize")      

</template>
<script>
  import axios from '~plugins/axios'
  let pagesize = 5
  export default {
    asyncData ({ req, params, query }) {
      let page = query.page || 1
      return axios().get('weuse', {
        params: {
          limit: pagesize,
          skip: pagesize * (page - 1)
        }
      }).then(res => {
        return {
          mems: res.data.items,
          pagetotal: res.data.count,
          pagesize: pagesize
        }
      })
    },
    methods: {
      isExsit: (str) => {
        return str && str.trim() !== ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    text-align: center;
    padding: 50px;
    background: #f7f8fa;

    .slogon {
      padding: 20px 0;
    }
  }
  
  .share-btn {
    display: inline-block;
    border: #a94442 1px solid;
    padding: 10px 20px;
    color: #d9534f;
    text-decoration: none;
  }

  .share-item {
    padding: 50px 0;
    .cover {
      width: 100%;
      max-width: 80px;
      border-radius: 4px;
    }
  }
  .mem-info {
    text-align: center;
    .tx {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    h5 {
      margin: 10px 0;
      font-size: 1.1rem
    }

    .links {
      margin-bottom: 20px;
      a {
        margin: 5px;
        display: inline-block;

        &.a-home {
          color: #dccb9f
        }

        &.a-weibo {
          color: #E6162D
        }

        &.a-twitter {
          color: #1AB2E8
        }
        
      }
    }
  }

  .repo-item {
    text-align: center;
    border: 1px solid #f1f1f1;
    margin-bottom: 20px;
    padding: 30px 0;

    .cover {
      border-radius: 100%;
      width: 50px;
    }

    &:hover {
      border-color: #bfe4f3
    }
  }

  .container {
    max-width: 1000px;
  }

  .repos {
    .usingmems {
      color: #a7a7a7;
      padding-top: 5px;
    }

    .alia {
      margin-top: 10px;
      font-size: 1.3rem;
      overflow: hidden;
      height: 25px;
    }
  }

  

  
</style>
