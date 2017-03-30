<template lang="pug">
  div.banner
    div.container
      div.row
        div.col
        div.col.right
          a(href="" style="color: #EF015B" title="聊天室"): icon(name="gitter")
          a(href="" style="color: #F48024" title="上 Stackoverflow 提问"): icon(name="stackoverflow")
      div.row
        div.col-md-4.col-sm-0
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            img.cover(:src="cdn(repo.cover, 'repo', 'repo')")
        div.col-md-8.col-sm-12
          h1 {{repo.alia}}
          p {{repo.description_cn}}
          div.links
            a.home(:href="repo.homepage"  target="_blank")
              icon(name="home")
              span 官 网

            a.download(href="")
              icon(name="download")

            a.github(:href="repo.html_url" target="_blank")
              icon(name="github")
              span GitHub
          div.params
            div
              icon(name="star")
              span {{repo.stargazers_count}} 
            div
              icon(name="fork")
              span {{repo.forks_count}}  
            div
              icon(name="clock")
              span {{repo.forks_count}} 
            div.iuse
              span {{repo.using}} 人在用
              span.btn 我在用       
          div.favor
            icon(name="heart")
            div {{repo.mark}}

</template>

<script>
  export default {
    props: ['repo']
  }
</script>

<style lang="scss" scoped>
  .banner {
    background: #f7f8fa;
    padding: 20px;

    .container {
      max-width: 1000px
    }

    .right {
      text-align: right;
      svg {
        width: 15px;
        height: 15px;
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
      .home, .github {
        display: inline-block;
        padding: 10px 20px;
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
      & > div {
        display: inline-block;
      }
      svg {
        width: 13px;
        height: 13px;
        float: left;
        margin-right: 3px;
        color: rgba(81, 162, 81, 0.91);
      }
      span {
        margin-right: 30px;
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

      svg {
        width: 35px;
        height: 35px;
      }
    }

    .iuse {
      float: right;
      color: #bbb;
      .btn {
        border: #DDD 1px solid;
        color: #BBB;
        padding: 5px 10px;
        display: inline-block;
        cursor: pointer;
      }
      span {
        margin-right: 10px;
      }

      svg {
        fill: #AAA
      }
    }
  }  

</style>
