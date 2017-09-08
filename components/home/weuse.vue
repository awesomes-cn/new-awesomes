<template lang="pug">
  div.weuse-box
    div.weuse-item(v-for="mem in datalist")
      nuxt-link(:to="'mem/' + mem.id")
        img.tx(:src="cdn(mem.avatar, 'mem', 'repo-50')")
      div.right-con
        div.memname
          nuxt-link(:to="'mem/' + mem.id")
            strong {{mem.nc}}
          small.num 在用 {{mem.using}} 个前端库
        div.repos
          div.repo-item(v-for="repo in mem.usings")
            nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia" )
              img.cover(:src="cdn(repo.cover, 'repo', 'repo-50')")
            // span.usingmems {{repo.using}}
</template>

<script>
  export default {
    props: ['datalist']
  }
</script>

<style lang="scss" scoped>
  .weuse-box {
    .weuse-item {
      display: flex;
      margin-bottom: 15px;
      align-items: center;
    }
    .tx {
      width: 40px;
      height: 40px;
      border-radius: 100%
    }

    .right-con {
      flex-grow: 1;
      padding-left: 10px;

      .memname {
        margin-bottom: 5px;
        font-size: 1.1rem;
        .num {
          margin-left: 10px;
          color: #343a40
        }
      }
      .repos {
        display: flex;
        justify-content: space-between;

        .repo-item {
          position: relative;
          opacity: .9;
          &:hover {
            opacity: 1
          }
        }
      }
      .cover {
        width: 25px;
        height: 25px;
      }

      .usingmems {
        font-size: 12px;
        color: #ffffff;
        font-size: 12px;
        display: inline-block;
        background-color: #3e9ef1;
        padding: 2px 7px;
        border-radius: 100px;
        position: absolute;
        top: -10px;
        right: -10px;
        border: #FFF 2px solid;
      }
    }
  }
</style>
