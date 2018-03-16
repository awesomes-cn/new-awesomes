<template lang="pug">
  div.container
    div.form-group
      label 库别名
      input.form-control(v-model="repo.alia")
    div.form-group
      label GitHub
      input.form-control(v-model="repo.html_url")  
    div.form-group
      label 英文描述
      input.form-control(v-model="repo.description")   
    div.form-group
      label 中文描述
      input.form-control(v-model="repo.description_cn")  
    div.form-group
      label 官网
      input.form-control(v-model="repo.homepage")  
    div.form-group
      label 演示
      input.form-control(v-model="repo.demo")    
    div.form-group
      label 归类
      select.form-control(placeholder="请选择框架类型" v-model="repotyp")
        option(v-for="item in typs"  v-bind:value="item.value") {{item.label}}   
    div.form-group
      label 标签
      input.form-control(v-model="repo.tag")   
    div.form-group
      label 隐藏标识
      input.form-control(v-model="repo.hidetags")        
    
    div.form-group
      label 预览图
      div
        div(style="margin-bottom: 20px;")
          img.cover(:src="cdn(repo.cover, 'repo', 'repo')")
        upload(v-model="repo.cover" folder="repo" v-if="showUpload")
    div.form-group
      label 推荐
      input.form-control(v-model="repo.recommend") 
    div.form-group
      label 推荐大图
      div
        div(style="margin-bottom: 20px;")
          img.cover(:src="cdn(repo.banner_cover, 'repo')")
        upload(v-model="repo.banner_cover" folder="repo" v-if="showUpload")
    div.form-group
      label
      button.btn.btn-danger(@click="submit") 提交更新         
</template>
<script>
  import axios from '~/plugins/axios'
  import _ from 'underscore'
  export default {
    asyncData ({ req, params, query }) {
      return axios().get(`repo/${params.owner}/${params.name}`)
      .then(res => {
        return {
          repo: res.data,
          repotyp: `${res.data.rootyp}-${res.data.typcd}-${res.data.rootyp_zh}-${res.data.typcd_zh}`
        }
      })
    },
    data () {
      return {
        typs: []
      }
    },
    components: {
      upload: () => import('~/components/upload.vue')
    },
    methods: {
      // 提交
      submit: async function () {
        let _typval = this.repotyp.split('-')
        ;[this.repo.rootyp, this.repo.typcd, this.repo.rootyp_zh, this.repo.typcd_zh] = _typval
        await axios().put(`repo/${this.repo.id}`, this.repo)
        this.$alert('success', '更新库成功')
      }
    },
    created () {
      let self = this
      axios().get('category/all').then(res => {
        let cates = res.data
        let result = []
        cates.forEach(item => {
          if (item.typcd === 'B') {
            let typA = cates.find(cate => {
              return cate.key === item.parent
            })
            result.push({
              label: `${typA.sdesc} - ${item.sdesc}`,
              value: `${typA.key}-${item.key}-${typA.sdesc}-${item.sdesc}`
            })
          }
        })
        self.typs = _.sortBy(result, 'label')
      })
    },
    mounted () {
      this.showUpload = true
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin: 50px auto;
    max-width: 700px;

    .form-group {
      display: flex;
      label {
        display: block;
        width: 80px;
        flex-shrink: 0;
        flex-grow: 0;
        text-align: right;
        padding-right: 10px;
      }

      .cover {
        border: #DDD 5px solid;
        max-width: 600px;
      }
    }
  }
</style>
