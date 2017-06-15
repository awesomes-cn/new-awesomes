<template lang="pug">
  div.repo-list
    div.item(v-for="repo in repos")
      div.info
        div.cover-wrap
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            img.cover(:src="cdn(repo.cover, 'repo', 'repo')")
        div
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia" class="repo-name")
            h3 {{repo.name}}
          div.categorys
            nuxt-link(to="/about" class="repo-name") Dom
            span >
            nuxt-link(to="/about" class="repo-name") 加载进度

      div.desc {{repo.description_cn || repo.description}
</template>


<script>
  export default {
    props: ['repos']
  }
</script>


<style lang="scss" scoped>
 .repo-list {
   background-color: #FFF;
   padding: 10px;
   
   .item {
     margin-bottom: 40px;
   }
   .info {
     display: flex;

     h3 {
       margin: 0;
     }
   }

   .repo-name {
     color: #333;
   }

   .desc {
     padding: 15px 10px;
     background-color: #f8f9fa;
     margin-top: 10px;
   }

   .cover-wrap {
      width: 100px;
      margin-right: 15px;
   }

   .cover {
      width: 100%;
      border-radius: 4px;
   }

   .categorys {
     margin-top: 20px;
     a {
       color: #8c8c8c;
     }
     span {
       margin: 0 5px;
     }
   }
 }

</style>
