<template lang="pug">
  div
    table.table.table-striped.table-bordered
      thead
        tr
          th #
          th(v-for="value in keys") {{typeof value == 'object' ? value.alia : value}}
          th 创建时间
          th 操作
      tbody
        tr(v-for="(item, index) in items" v-bind:class="'trflag-' + item[trClassKey]")
          td {{item.id}}
          td(v-for="(value, key) in keys")
            span(v-if="typeof value != 'object'") {{item[key]}}
            template(v-if="typeof value == 'object'")
              a(:href="value.link ? value.link(item) : item[key]" v-if="value.type == 'a'" target="_blank") {{item[key]}}
              span(v-if="!value.type") {{item[key]}}
          td {{item.created_at}}
          td.opers
            a(href="javascript:void(0)" @click="destroy(item, index)") 删除
            a(href="javascript:void(0)" @click="fetch(item)" v-if="hasOper('fetch')") 提取
            a(href="javascript:void(0)" @click="agreeWebkerApply(item)" v-if="hasOper('agree_webker_apply')") 同意
            slot
    pagination(flag="repos-list" v-bind:total="pagetotal" v-bind:size="pagesize")          
</template>
<script>
  import axios from '~/plugins/axios'
  let pagesize = 15
  export default {
    props: ['table', 'keys', 'opers'],
    data () {
      return {
        items: [],
        pagetotal: 0,
        pagesize: pagesize
      }
    },
    watch: {
      '$route': function () {
        this.fetchList()
      }
    },
    computed: {
      // 以哪个字段值设置为当前 tr 的样式
      trClassKey: function () {
        let _key = ''
        for (let key in this.keys) {
          if (typeof this.keys[key] === 'object' && this.keys[key].trclass) {
            _key = key
          }
        }
        return _key
      }
    },
    methods: {
      // 是否包含某个操作
      hasOper: function (oper) {
        return this.opers && this.opers.indexOf(oper) > -1
      },
      // 获取数据列表
      fetchList: async function () {
        let page = this.$route.query.page || 1
        let res = await axios().get(`admin/tables`, {
          params: {
            table: this.table,
            limit: pagesize,
            skip: pagesize * (page - 1)
          }
        })
        let items = res.data.items
        this.items = items
        this.pagetotal = res.data.count
      },
      // 删除
      destroy: async function (item, index) {
        if (!confirm('确定删除该数据？')) {
          return false
        }
        let res = await axios().post(`admin/destroy`, {
          table: this.table,
          id: item.id
        })
        if (res.data.status) {
          this.items.splice(index, 1)
          this.$alert('success', '删除数据成功！')
        }
      },
      // 提取 Repo
      fetch: async function (item) {
        await axios().get(`submit/${item.id}/fetch`, {
          table: this.table,
          id: item.id
        })
        item.status = 'READED'
        this.$alert('success', '提取成功！')
      },
      // 同意情报员申请
      agreeWebkerApply: async function (item) {
        await axios().post(`mem/${item.from}/setwebker`)
        this.$alert('success', '设置成功！')
      }
    },
    created () {
      this.fetchList()
    }
  }
</script>

<style lang="scss" scoped>
  table {
    width: 100%
  }
  .opers {
    a {
      margin-right: 10px;
    }
  }
</style>
