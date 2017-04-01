<template lang="pug">
  div
    div.banner
      h2 大牛在用
      p.slogon 参考大牛们在使用的框架，给自己的选择提供一个很好的参考
      a.share-btn(href="#") 我要分享
    div.container    
      div.share-item(v-for="mem in mems")
        div.mem-info
          nuxt-link(:to="'mem/' + mem.id")
            img.tx(:src="cdn(mem.avatar, 'mem')")
            h4 {{mem.nc}}
        div.repos.row
          div.col-md-2.col-sm-3.col-4.repo-item(v-for="oper in mem.opers")
            nuxt-link(:to="'/repo/' + oper.repo.owner + '/' + oper.repo.alia")
              img.cover(:src="cdn(oper.repo.cover, 'repo', 'repo')")
              p {{oper.repo.alia}}

</template>
<script>
  import axios from '~plugins/axios'
  export default {
    asyncData () {
      return axios.get('weuses').then(res => {
        return {
          mems: res.data
        }
      })
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
    border-bottom: #DDD 1px dashed;
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
  }

  .repo-item {
    margin-bottom: 20px;
    text-align: center;

  }

  .container {
    max-width: 1000px;
  }

  
</style>
