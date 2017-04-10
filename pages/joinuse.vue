<template lang="pug">
  div
    div.banner
      h2 大牛在用
      p.slogon 参考大牛们在使用的框架，给自己的选择提供一个很好的参考
      nuxt-link(to="joinuse" class="share-btn") 我要分享
    div.container    
      div.alert.alert-warning.text-center 默认我们只会将 GitHub 关注数 >= 50 并且使用数 >= 5 的会员展示在该板块，但如果你在大厂工作或有其它原因，请告知我们
      div.row
        div.col-3(v-for="repo in repos")
          div.repo-inner
            nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
              img.cover(:src="cdn(repo.cover, 'repo', 'repo')")
              h6 {{repo.name}}
            span.using(@click="switchUsing(repo)")  我在用
            
</template>
<script>
  import axios from '~plugins/axios'
  export default {
    asyncData ({ req, params, query }) {
      return axios.get('repo?limit=100&sort=hot').then(res => {
        return {
          repos: res.data.items
        }
      })
    },
    methods: {
      switchUsing: function (repo) {
        if (this.showLogin()) { return }
        axios.post('oper', {
          opertyp: 'USING',
          typ: 'REPO',
          idcd: repo.id
        })
      }
    },
    created () {
      console.log('===', this.$store.state.session)
      // axios.get(`mem/${}/opers?opertyp=USING&typ=REPO`)
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

  .container {
    max-width: 1000px;
    padding-top: 20px
  }

  .repo-inner {
    text-align: center;
    margin-top: 40px;

    h6 {
      margin: 10px 0;
    }

    .using {
      cursor: pointer;
      display: inline-block;
      border: #9C9C9C 1px solid;
      padding: 5px 10px;
    }
  }

  .cover {
    width: 100px;
    max-width: 100%;
  }

  
</style>
