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
            span.using(@click="switchUsing(repo)" v-bind:class="'using-' + repo.isUsing")  我在用
            
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get('repo?limit=100&sort=hot').then(res => {
        let repos = res.data.items
        repos.forEach(item => {
          item.isUsing = false
        })
        return {
          repos: repos
        }
      })
    },
    methods: {
      switchUsing: function (repo) {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'USING',
          typ: 'REPO',
          idcd: repo.id
        }).then(res => {
          repo.isUsing = res.data.has
        })
      }
    },
    created () {
      let _self = this
      if (this.$store.state.session) {
        axios().get(`mem/${this.$store.state.session.id}/opers?opertyp=USING&typ=REPO`).then(res => {
          let repoIds = res.data.items.map(item => {
            return item.repo.id
          })
          _self.repos.forEach(item => {
            item.isUsing = repoIds.indexOf(item.id) > -1
          })
        })
      }
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
    border: rgba(238, 238, 238, 0.62) 1px solid;
    padding: 40px;

    h6 {
      margin: 10px 0;
    }

    .using {
      cursor: pointer;
      display: inline-block;
      border: #37c700 1px solid;
      padding: 5px 10px;
      color: #37c700;

      &.using-true {
        background-color: #37c700;
        border-color: #37c700;
        color: #FFF;
      }
    }
  }

  .cover {
    width: 100px;
    max-width: 100%;
  }

  
</style>
