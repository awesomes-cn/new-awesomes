<template lang="pug">
  div.container
    div.row
      div.col-md-7
        repo-latest(:repos="latestRepos")
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
    data () {
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


</style>
