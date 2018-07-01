<template lang="pug">
  div.container
    template(v-if="usings.length > 0")
      div.row
        div.col-md-3.col-sm-3.col-4(v-for="oper in usings")
          nuxt-link(:to="'/repo/' + oper.repo.owner + '/' + oper.repo.alia" class="repo-item")
            div.cover-box
              img.cover(:src="cdn(oper.repo.cover, 'repo', 'subject_repo')")
              span.usingmems {{oper.repo.using}}
            h5 {{oper.repo.alia}}
    template(v-else)
      h2.noitem 没有在用前端库
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    asyncData ({ req, params, query, route }) {
      return axios().get(`mem/${route.params.id}/opers?opertyp=USING&limit=1000`).then(res => {
        res.data.items.sort((a, b) => { return a.order - b.order })
        return {
          usings: res.data.items
        }
      })
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    }
  }
</script>


<style lang="scss" scoped>
  .repo-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    text-align: center;
    .cover-box {
      max-width: 70px;
      width: 100%;
      margin-bottom: 10px;
      position: relative;
    }
    .cover {
      width: 100%;
      border-radius: 100%;
      background-color: #FFF;
      display: block;
      padding: 5px;
      box-shadow: 0px 0px 10px #DDD;
    }

    .usingmems {
      color: #fff;
      font-size: 12px;
      display: inline-block;
      background-color: #3e9ef1;
      padding: 2px 7px;
      border-radius: 100px;
      position: absolute;
      top: -10px;
      right: -10px;
      border: 2px solid #fff;
      box-shadow: 0px 0px 10px #bcbcbc;
    }
  }

  .noitem {
    padding: 80px 0;
    text-align: center;
    color: #DDD;
  }
</style>
