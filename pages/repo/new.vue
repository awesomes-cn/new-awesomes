<template lang="pug">
  div.sub-new
    div
      h1 仅需1秒即可提交你的库

    div
      span 请确保提交的库是 
      strong 前端库 
      span 并且github有 
      strong 50 star 
      sapn 以上

    div
      
      input.sub-txt(type="text" placeholder="https://github.com/jquery/jquery" v-model="html_url") 
    div
      el-select(placeholder="请选择框架类型" v-model="repotyp")
        el-option(v-for="item in typs" v-bind:label="item.label" v-bind:value="item.value")
    div
      el-button(type="danger" @click="submit") 确认提交 


</template>

<script>
  import axios from '~plugins/axios'
  import _ from 'underscore'
  export default {
    data () {
      return {
        repotyp: '',
        html_url: '',
        typs: []
      }
    },
    created () {
      let self = this
      axios.get('category/all').then(res => {
        let cates = res.data
        let result = []
        cates.forEach(item => {
          if (item.typcd === 'B') {
            let typA = cates.find(cate => {
              return cate.key === item.parent
            })
            result.push({
              label: `${typA.sdesc} - ${item.sdesc}`,
              value: `${typA.key}-${item.key}`
            })
          }
        })
        self.typs = _.sortBy(result, 'label')
      })
    },
    methods: {
      submit: function () {
        let self = this
        axios.post('submit/new', {
          html_url: self.html_url,
          rootyp: self.repotyp.split('-')[0],
          typcd: self.repotyp.split('-')[1]
        }).then(res => {
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sub-new {
    text-align: center;
    padding-top: 50px;

    & > div {
      padding: 20px 0;
    }
  }

  .sub-txt {
      width: 500px;
      font-size: 1.2em;
      font-weight: 400;
      padding: 10px 16px;
      border: solid 3px rgba(10, 20, 80, 0.05);
      outline: none;
      color: #2d3855;
      font-family: sans-serif;
  }
</style>
