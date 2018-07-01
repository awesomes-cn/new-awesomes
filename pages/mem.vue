<template lang="pug">
  div.mem-area
    div.container
      div.row
        div.col-12.col-md-3.col-sm-5
          div.mem-banner
            div.basic
              div.bgcover(:style="{backgroundImage: 'url(' + cdn(mem.avatar, 'mem') + ')'}")
              div.conbox
                nuxt-link(:to="'/mem/' + mem.id + '/profile'" class="edit-link" title="更新资料" v-if="session.id === mem.id")
                  icon(name="edit")
                nuxt-link(:to="'/mem/' + mem.id" class="tx-link") 
                  img.tx(:src="cdn(mem.avatar, 'mem', 'subject_repo')")
                h4.nc {{mem.nc}}

                div.loacom
                  icon(name="location" v-if="mem.mem_info.location" width="18px") {{mem.mem_info.location || '坐标'}}
                  icon(name="company" v-if="mem.mem_info.company"  width="18px") {{mem.mem_info.company || '公司'}}
            div.actions
              div
                nuxt-link(:to="'/mem/' + mem.id") {{mem.using}}
                div 在用
              div
                nuxt-link(:to="'/mem/' + mem.id + '/marks/repos'") {{mem.marks}}
                div 收藏
            div.info
              a(:href="mem.mem_info.blog" target="_blank" v-if="isExsit(mem.mem_info.blog)" )
                icon(name="home" style="color: #009688")
                span.desc 主页

              a(:href="'http://weibo.com/' + mem.mem_info.weibo_url" target="_blank" v-if="isExsit(mem.mem_info.weibo_url)")
                icon(name="weibo" style="color: #FF0000")
                span.desc {{mem.mem_info.weibo_url}}

              a(:href="'https://twitter.com/' + mem.mem_info.twitter" target="_blank"  v-if="isExsit(mem.mem_info.twitter)")
                icon(name="twitter" style="color: #06A2F3")
                span.desc {{mem.mem_info.twitter}}

              a(:href="'https://github.com/' + mem.mem_info.github" target="_blank"  v-if="isExsit(mem.mem_info.github)")
                icon(name="github" style="color: #252E2F")
                span.desc {{mem.mem_info.github}}
            
        div.col-12.col-md-9.col-sm-7
          div.conarea
            div.mem-menus
              nuxt-link(:to="'/mem/' + mem.id") {{who}}在用
              nuxt-link(:to="'/mem/' + mem.id + '/marks/repos'") {{who}}收藏的
              nuxt-link(:to="'/mem/' + mem.id + '/pubs/comments'") {{who}}的评论
            div.mem-body  
              nuxt-child  
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    async asyncData ({ req, params, query }) {
      let res = await axios().get(`mem/${params.id}`)
      return {
        mem: res.data
      }
    },
    watch: {
      '$route.params.id': function (val) {
        window.location.reload()
      }
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      },
      who () {
        return this.session.id === parseInt(this.$route.params.id) ? '我' : 'TA'
      },
      routeKey () {
        return this.$route.name.split('-')[2] || ''
      }
    },
    methods: {
      isExsit: (str) => {
        return str && str.trim() !== ''
      },
      getPageName: function () {
        return {
          '': `${this.who}在用`,
          'marks': `${this.who}收藏的`,
          'pubs': `${this.who}发布的`
        }[this.routeKey]
      }
    },
    created () {
    }
  }
</script>


<style lang="scss" scoped>
  .mem-menus {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    margin-bottom: 10px;
    // background-color: #e8ece629;
    border-bottom: #eef1f1 1px solid;
    padding: 0 15px;
    border: #f3f4f5 1px solid;
    box-shadow: 0px 0px 100px #f1f1f1;
    a {
      padding: 20px;
      display: inline-block;

      &.nuxt-link-exact-active {
        color: #da552f
      }
    }
  }
  .mem-banner {
    background: #FFF;

    .basic {
      padding: 50px;
      color: #FFF;
      position: relative;
      overflow: hidden;
      height: 250px;
      .bgcover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-position: 50%;
        opacity: 0.4;
        filter: blur(5px);
      }

      .conbox {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.25);

        &:hover {
          .edit-link {
            display: inline-block
          }
        }

        .nc {
          font-weight: normal;
          margin-top: 20px;
        }

        .edit-link {
          position: absolute;
          right: 10px;
          top: 10px;
          color: #FFF;
          display: none;
        }

        .loacom {
          font-size: 12px;
          color: #f7f7f7;
          margin-top: 10px;
          & > span {
            margin-left: 10px
          }
        }
      }
    }

    .tx-link {
      display: inline-block;
      border-radius: 100%;
      background-color: rgba(255, 255, 255, 0.25);
      padding: 10px;
      height: 120px;
    }
    .tx {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      margin-bottom: 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.39);
    }

    .info {
      line-height: 20px;
      background-color: #fdfeff;
      a {
        display: block;
        padding: 10px 15px;
        color: #9e9e9e;
        border-top: #f8f8fa 1px solid;
        .desc {
          display: inline-block;
          float: right
        }
      }
      svg {
        float: left;
        margin-right: 3px;
      }
    }
  }

  .mem-area {
    padding: 50px 0;
    background: #f7f8fa;
    min-height: 500px;
  }

  .conarea {
    background-color: #FFF;
    // background-color: #fbfcfb;
    padding: 0;
    padding-bottom: 50px;
    flex-grow: 1;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
    padding: 30px;
    .mem-body {
      padding: 20px 0;
    }
  }

  .mem-navs {
    text-align: right;
    display: block;
    // border: #DDD 1px solid;
    border-left: 0;
    border-right: 0;
    padding: 5px;

    a {
      padding: 0 20px;
      font-weight: bold
    }
  }

  .actions {
    display: flex;
    text-align: center;
    & > div {
      flex-grow: 1;
      padding:20px 10px;
    }

    a {
      color: #FF9800;
      font-size: 1.5rem;
    }
  }
</style>
