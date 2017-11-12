<template lang="pug">
  div.mem-area
    div.container
      div.row
        div.col-12.col-md-3.col-sm-5
          div.mem-banner
            div.basic
              div.bgcover(:style="{backgroundImage: 'url(' + cdn(mem.avatar, 'mem') + ')'}")
              div.conbox
                nuxt-link(to="/mem" class="tx-link") 
                  img.tx(:src="cdn(mem.avatar, 'mem')")
                h4.nc {{mem.nc}}

                div.loacom
                  icon(name="location" v-if="mem.mem_info.location" width="18px") {{mem.mem_info.location || '坐标'}}
                  icon(name="company" v-if="mem.mem_info.company"  width="18px") {{mem.mem_info.company || '公司'}}

            div.info
              // span(title="坐标")
              //   icon(name="location") {{mem.mem_info.location || '坐标'}}

              // span(title="公司")
              //   icon(name="company") {{mem.mem_info.company || '公司'}}

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
              // div.left
              //   div.dropdown-outer
              //     span.title {{getPageName()}}
              //     icon(name="arrow-up" rotate="90")
              //     div.dropdown
              //       nuxt-link(:to="'/mem/' + mem.id") {{who}}在用
              //       nuxt-link(:to="'/mem/' + mem.id + '/marks/repos'") {{who}}收藏的
              //       nuxt-link(:to="'/mem/' + mem.id + '/pubs/comments'") {{who}}发布的
              //       // nuxt-link(:to="'/mem/' + mem.id + '/ups'") {{who}}点赞的
              //   div.seconds
              //     nuxt-link(:to="'/mem/' + mem.id" v-if="routeKey === ''") 前端库
              //     nuxt-link(:to="'/mem/' + mem.id + '/marks/repos'" v-if="routeKey === 'marks'") 前端库
                  
              //     template(v-if="routeKey === 'pubs'")
              //       nuxt-link(:to="'/mem/' + mem.id + '/pubs/comments'") 评论
              //       // nuxt-link(:to="'/mem/' + mem.id + '/pubs/dianps'") 经验
              // div.right
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
      '$router.params.id': function (val) {
        axios().get(`mem/${val}`).then(res => {
          this.mem = res.data
        })
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
    background-color: #e8ece629;
    border-bottom: #eef1f1 1px solid;
    padding: 0 15px;

    a {
      padding: 15px 10px;
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

        .nc {
          font-weight: normal;
          margin-top: 20px;
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
      margin-top: 20px;
      a {
        display: block;
        padding: 10px 15px;
        color: #9e9e9e;
        border-bottom: #f8f8fa 1px solid;
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
    background: #f7f8fa
  }

  .conarea {
    background-color: #FFF;
    padding: 0;
    padding-bottom: 50px;
    flex-grow: 1;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
    .mem-body {
      padding: 20px;
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
</style>
