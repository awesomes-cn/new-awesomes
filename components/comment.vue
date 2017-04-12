<template lang="pug">
  div.comment-wraper
    div.editor-go
      editor(:flag="flag" subtxt="提交" v-bind:submit="submit" v-bind:setval="comcon")

    div.citem(v-for="(item, index) in coms")
      nuxt-link(:to="'/mem/' + item.mem.id")
        img.mem-tx(:src="cdn(item.mem.avatar, 'mem')")
        strong {{item.mem.nc}}
      span.time {{timeago(item.created_at)}}
      article(v-html="processAt(marked(item.con))")
      div.opers
        a.up(href="javascript:void(0)")
          icon(name="arrow-up")
          span {{item.favor}}

        a(href="javascript:void(0)" @click="reply(item)")
          icon(name="reply" )
          span 回复

        a.extra(href="javascript:void(0)" @click="edit(item)" v-if="session && item.mem.id == session.id")
          span 编辑

        a.extra(href="javascript:void(0)" @click="destroy(item, index)"  v-if="session && item.mem.id == session.id")
          span 删除  



</template>
<script>
  import axios from '~plugins/axios'
  export default {
    props: ['flag', 'typ', 'idcd'],
    data () {
      return {
        coms: [],
        comcon: ''
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {

      // 获取评论列表
      list: function () {
        if (this.idcd && this.idcd > 0) {
          axios().get(`comment?typ=${this.typ}&idcd=${this.idcd}`).then(res => {
            this.coms = res.data
          })
        }
      },

      // 发布评论
      submit: function (val) {
        return new Promise((resolve) => {
          axios().post(`comment`, {
            typ: this.typ,
            idcd: this.idcd,
            con: val
          }).then(res => {
            this.coms.push(res.data.item)
            resolve()
          })
        })
      },

      // 删除评论
      destroy: function (item, index) {
        let self = this
        this.$confirm('确认删除该评论？不是手抖吧！', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios().delete(`comment/${item.id}`).then(res => {
            if (res.data.status) {
              self.coms.splice(index, 1)
            }
          })
        }).catch(() => {
        })
      },

      // 编辑
      edit: function (item) {
      },

      // 回复
      reply: function (item) {
        this.comcon = this.comcon + `@${item.mem.nc} `
      },

      // 处理 @
      processAt: function (con) {
        return con.replace(/@([^:：?\s@]+)/g, '<a href="#" class="ata">@$1</a>')
      }
    },
    watch: {
      'idcd': function () {
        this.list()
      }
    },
    created () {
      this.list()
    }
  }
</script>

<style lang="scss" scoped>
  .citem {
    position: relative;
    padding-left: 35px;
    margin-bottom: 30px;

    &:hover {
      .opers .extra {
        display: inline-block;
      }
    }

    .time {
      color: #ababab;
      margin-left: 10px;
    }

    .opers {
      a {
        color: #DDD;
        display: inline-block;
        margin-right: 10px;

        &.up {
          background-color: hsla(0,0%,95%,.8);
          color: #909090;
          padding: .2rem .2rem;
          padding-right: .5rem;
          border-radius: 2px;
        }
      }
      svg {
        width: 15px;
        height: 15px;
        float: left;
        margin-right: 3px;
      }

      .extra {
        display: none
      }
    }
  }

  .editor-go {
    margin-bottom: 40px;
  }

  article {
    margin: 10px 0;
  }

  
  .mem-tx {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 5px;
  }

  
</style>
