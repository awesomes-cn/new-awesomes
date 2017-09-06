<template lang="pug">
  div.webker-wrap
    div.outerwap
      div.inner
        div.banner
          h2 前端客
        article
          p 客：古有侠客，一般指行侠仗义的大侠。
          p 这里有两层含义，第一得有真功夫，第二得有侠义之心。
          p 于是我们便采用了这个 “客”，赋予前端开发者一个特殊的身份，便是 “前端客” 了。

          h4 权利
          p 1、发布情报
          p 2、发布前端库的经验

          h4 申请条件
          p GitHub 关注数 >= 100 （非硬性规定，在大厂工作或其它特殊原因可无视该条件）
          p 不发布垃圾无用的信息
          
          h4 我要申请
          template(v-if="session && session.iswebker === 'YES'")
            div.alert.alert-info 你目前已经是前端客

          template(v-if="!session || session.iswebker === 'NO'")
            div.form-group
              textarea.form-control(placeholder="申请说明（选填）" v-model="con")
            div.form-group
              button.btn.btn-danger(@click="apply") 提交申请
        
</template>
<script>
  import axios from '~/plugins/axios'
  export default {
    async asyncData ({ req, params, query }) {
    },
    data () {
      return {
        con: ''
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      apply: async function () {
        if (this.showLogin()) {
          return
        }
        let res = await axios().post('site/apply', {
          con: this.con
        })

        if (res.data.status) {
        }
      }
    }
  }
</script>

<style lang="scss">
  .page-webker {
    background: #f7f8fa;
    .webker-wrap {
      .banner {
        text-align: center;
        padding: 50px 0;
      }

      .outerwap {
        font-size: 1.1rem;
        margin: 0 auto;
        max-width: 650px;


        .inner {
          background-color: #FFF;
          padding: 50px;
        }
      }

      h4 {
        padding-top: 20px;
        padding-bottom: 10px;
      }
    }
  }
  
</style>
