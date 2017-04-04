<template lang="pug">
  div.home-index
    div.container
      div.row
        div.col-md-7
          div.repo-list(v-for="repo in latestRepos")
            nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
              div.repo-item
                div.cover(v-bind:style="'background-image:url(' + cdn(repo.cover, 'repo') + ')'")
        div.col-md-5
          a.card(href="")
            icon(name="chrome" class="chrome-logo")
            h2 寻找前端插件，一步到位

          a.card(href="")
            img(src="../assets/img/jsonon.png")
                  
</template>


<script>
  import axios from '~plugins/axios'
  import RepoLatest from '~components/repo/latest.vue'
  export default {
    name: 'home',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    asyncData () {
      return axios.get('repo/latest').then(res => {
        return {
          latestRepos: res.data
        }
      })
    },
    components: {
      RepoLatest
    }
  }
</script>


<style lang="scss" scoped>
 .home-index {
   background: #f7f8fa;
   padding-top: 20px;
 }
 .card {
   display: block;
   background-color: #FFF;
   padding: 30px;
   overflow: hidden;
   margin-bottom: 20px;

   img {
     width: 100%
   }
 }

 @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

 .chrome-logo {
    float: left;
    animation: spin 2s infinite linear;
    width: 50px;
    height: 50px;
    margin-right: 20px;
 }

 .repo-list {
   background-color: #FFF;
 }

 .repo-item {
   padding: 50px 8%;
   border-bottom: #EEE 1px solid;
   .cover {
      height: 250px;
      margin: 20px 0;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      background-position: center center;
      position: relative;
      color: #FFF;
   }
 }


</style>
