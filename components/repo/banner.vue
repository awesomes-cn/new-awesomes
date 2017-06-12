<template lang="pug">
  div.banner
    div.container
      div.row.top-bar
        div.col
          span.category
            nuxt-link(:to="'/repos/' + repo.rootyp" class="rootyp") {{repo.rootyp_zh}}
            nuxt-link(:to="'/repos/' + repo.rootyp + '/' + repo.typcd" class="typcd") {{repo.typcd_zh}}

        div.col.right
          a(:href="'https://gitter.im/' + repo.full_name" style="color: #EF015B" title="聊天室" target="_blank")
            icon(name="gitter"  width="15px")
          a(:href="'http://stackoverflow.com/questions/tagged/' + repo.name" style="color: #F48024" title="上 Stackoverflow 提问"  target="_blank")
            icon(name="stackoverflow"  width="15px")
      div.row
        div.col-md-4.col-sm-0(style="margin-bottom: 20px;")
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            img.cover(:src="cdn(repo.cover, 'repo', 'repo')")
        div.col-md-8.col-sm-12
          h1 {{repo.alia}}
          p {{repo.description_cn}}
          div.links
            a.home(:href="repo.homepage"  target="_blank")
              icon(name="home") 官 网

            a.download(:href="`https://api.github.com/repos/${repo.full_name}/zipball`" target="_blank")
              icon(name="download" width="35px")

            a.github(:href="repo.html_url" target="_blank")
              icon(name="github") GitHub
          div
            
          div.params.row
            div.col-md-6.col-sm-12.left
              icon(name="star" width="15px") {{repo.stargazers_count}} 
              icon(name="fork"  width="15px") {{repo.forks_count}} 
              icon(name="clock"  width="15px") {{repo.forks_count}} 
            div.col-md-6.col-sm-12
              div.iuse
                nuxt-link(:to="'/mem/' + using.mem.id" v-for="using in repo.usings" v-bind:title="using.mem.nc")
                  img.mem-tx(:src="cdn(using.mem.avatar, 'mem')")
                span(v-show="repo.using > 5") 等
                span {{repo.using}} 人在用
                span.use-btn(:class="'has-' + isUsing" @click="switchUsing") 我在用       
          div.favor(:class="'has-' + isMark" @click="switchMark")
            icon(name="heart" width="35px" height="35px")
            div {{repo.mark}}

</template>

<script>
  import axios from '~plugins/axios'
  export default {
    props: ['repo'],
    data () {
      return {
        isMark: false,
        isUsing: false
      }
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

      // 是否在用
      hasUsing: function () {
        if (!this.$store.state.session) { return }
        axios().get('oper/is', {
          params: {opertyp: 'USING', idcd: this.repo.id, typ: 'REPO'}
        }).then(res => {
          this.isUsing = res.data
        })
      },

      switchMark: function () {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'MARK',
          typ: 'REPO',
          idcd: this.repo.id
        }).then(res => {
          this.repo.mark = res.data.amount
          this.isMark = res.data.has
        })
      },

      switchUsing: function () {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'USING',
          typ: 'REPO',
          idcd: this.repo.id
        }).then(res => {
          this.repo.using = res.data.amount
          this.isUsing = res.data.has
        })
      }
    },
    created () {
      this.hasMarked()
      this.hasUsing()
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    background: #f7f8fa;
    padding: 20px;

    .top-bar {
      margin-bottom: 10px;
    }

    .category {
      font-size: 0.8rem;
      a {
        display: inline-block;
        padding: 8px 12px;
        text-align: center;
        background-color: #F5F5F5;
        color: #DDD;
      }
      .rootyp {
        background-color: #DDD;
        color: #FFF;
      }
    }

    .container {
      max-width: 1000px
    }

    .right {
      text-align: right;
      a {
        margin-left: 15px;
      }
    }

    .cover {
      padding: 10px;
      background-color: #FFF;
      box-shadow: 1px 1px 10px #f4f4f4;
      max-width: 100%
    }

    .links {
      padding: 20px 0;
      display: flex;
      align-items: center;
      @media (max-width: 576px) {
        display: none;
      }
      .home, .github {
        display: inline-block;
        padding: 5px 20px;
        color: #FFF;
        text-decoration: none;
        background-color: #EEE;
        margin-right: 40px;
        border-radius: 100px;
        overflow: hidden;

        &.home {
          background-color: #19C2FF;
        }

        &.github {
          background-color: #EF4245;
        }

        svg {
          float: left;
          width: 15px;
          height: 15px;
          margin-right: 5px;
        }

        
      }
      .download {
        color: #29B996;
        margin-right: 40px;
        svg {
          width: 35px;
          height: 35px;
        }
          
      }
    }

    .params {
      color: rgba(81, 162, 81, 0.91);
      padding: 10px 0;
      .v-icon {
        margin-right: 30px;
      }
      .left {
        font-weight: bold;
      }
    }

    .favor {
      width: 35px;
      color: #CCC;
      display: inline-block;
      text-align: center;
      position: absolute;
      right: 0;
      top: 20px;
      cursor: pointer;

      &.has-true {
        color: #f14a1e;
      }
    }

    .iuse {
      color: #bbb;
      text-align: right;
      .use-btn {
        color: #BBB;
        padding: 5px 10px;
        display: inline-block;
        cursor: pointer;
        background-color: #d3d8dc;
        color: #aab1b7;

        &.has-true {
          background-color: #37c700;
          color: #FFF;
        }
      }
      span {
        margin-left: 10px;
        margin-right: 0;
      }

      svg {
        fill: #AAA
      }

      .mem-tx {
        width: 24px;
        height: 24px;
        border-radius: 100%;
        margin: 0 -3px;
        padding: 1px;
        display: inline-block;
        background-color: #FFF
      }
    }
  }  

</style>
