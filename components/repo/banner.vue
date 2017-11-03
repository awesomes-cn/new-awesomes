<template lang="pug">
  div.container
    div.banner
      div.top-box
        div.right
          div.title 
            h1 {{repo.name}}
            a(href="/score" :title="'综合得分 ' + repo.score" v-if="repo.score > 0" :class="'score-tag ' + formatScore(repo.score)")  
              icon(name="certificate" width="40px")
              div.score {{repo.score}}
          article.desc
            img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')")
            span {{repo.description_cn || repo.description}}

      div.links
        a.btn.btn-primary(:href="repo.html_url" target="_blank")
          icon(name="github") GitHub

        a.btn.btn-danger(:href="repo.homepage"  target="_blank")
          icon(name="home") 官 网
        a.btn.btn-light(:href="repo.homepage"  target="_blank")
          icon(name="star" width="15px") {{repo.stargazers_count}}

        a.btn.btn-light(:href="repo.homepage"  target="_blank")
          icon(name="fork" width="15px") {{repo.forks_count}}

        a(href="javascript:void(0)" title="收藏" :class="'btn pr mark-' + isMark + (isMark ? ' btn-warning' : ' btn-secondary') + (marking ? ' disabled' : '')" @click="switchMark")
          icon(:name="isMark ? 'collect_fill' : 'collect'" width="16px") {{repo.mark}}

        a.btn.btn-info.pr(:href="`https://api.github.com/repos/${repo.full_name}/zipball`" target="_blank")
          icon(name="download" width="20px") 下载
</template>

<script>
  import axios from '~/plugins/axios'
  import Chart from '~/components/chart'
  export default {
    props: ['repo'],
    data () {
      return {
        isMark: false,
        marking: false
      }
    },
    components: {
      Chart
    },
    methods: {

      // 是否收藏
      hasMarked: function () {
        if (!this.$store.state.session) { return }
        axios().get('oper/is', {
          params: {opertyp: 'MARK', idcd: this.repo.id, typ: 'REPO'}
        }).then(res => {
          this.isMark = res.data
        })
      },

      switchMark: function () {
        if (this.showLogin()) { return }
        this.marking = true
        axios().post('oper', {
          opertyp: 'MARK',
          typ: 'REPO',
          idcd: this.repo.id
        }).then(res => {
          this.repo.mark = res.data.amount
          this.isMark = res.data.has
          this.marking = false
        })
      },

      formatScore: function (score) {
        if (score < 30) {
          return 's'
        }
        if (score < 60) {
          return 'm'
        }
        return 'b'
      }
    },
    created () {
      this.hasMarked()
    }
  }
</script>

<style lang="scss" scoped>
.banner {
  background-color: #FFF;
  padding: 30px;
  margin-top: 20px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  border-radius: 3px;
  max-width: 1000px;

  .title {
    display: flex;
  }

  article {
    margin-top: 10px;
  }

  .links {
    margin-top: 20px;
    .btn {
      border-radius: 1px;
      border-radius: 2px;
      color: #FFF;
      display: inline-block;
    }
    a {
      margin-right: 20px;

      &.pr {
        float: right;
        margin-right: 0;
        margin-left: 20px;
      }

      &.mark-true {
        background-color: #f3960c;
        border-color: #df9512
      }
    }

    .btn-light {
      color: rgba(81,162,81,.91);
      font-weight: bold
    }
  }

  .desc {
    font-size: 1.2rem
  }

  .score-tag {
    position: relative;
    color: #35bd3a;
    font-size: 12px;
    font-weight: bold;
    .score {
      position: absolute;
      width: 40px;
      height: 40px;
      text-align: center;
      left: 0;
      top: 0;
      color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.s {
      color: #ff2e2e;
    }
    &.m {
      color: #b4b2b9;
    }
  }

  .meta-bage {
    display: inline-block;
    border: #DDD 1px solid;
    border-radius: 2px;

    span {

    }
  }

  .top-box {
    display: flex;
    padding-bottom: 10px;

    .cover {
      height: 23px;
      margin-right: 5px;
      background-color: #FFF;
      // box-shadow: 0px 0px 10px #ddd6d6;
    }
  }
}  
</style>
