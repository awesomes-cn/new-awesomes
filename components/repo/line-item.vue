<template lang="pug">
  div.list-con
    template(v-for = "(repo, index) in repos")
      div.list-item
        nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
          img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
        div.middle
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            h3 {{repo.name}}
          p {{repo.description_cn || repo.description}}
          div.opers
            a(href="#"  v-bind:title="repo.using + '人在用'")
              icon(name="hand"  width="15px" v-bind:scale="[-1,1]") {{repo.using}}

            a(href="#" v-bind:title="repo.mark + '人喜欢'")
              icon(name="heart-o"  width="15px") {{repo.mark}}
        div
          // fresh(:time="repo.pushed_at")
          a(href="/score" :title="'综合得分 ' + repo.score" v-if="repo.score > 0")
            chart(:val="repo.score" size="30" :flag="repo.id")
</template>

<script>
import Chart from '~/components/chart'
export default {
  props: ['repos'],
  components: {
    Chart
  }
}
</script>

<style lang="scss" scoped>
.list-con {  
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
      height: 80px;
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
      flex-grow: 1;
      padding-right: 20px;
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
  }
}
</style>
