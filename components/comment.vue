<template lang="pug">
  div.comment-wraper
    div.editor-go
      // button.sub-btn(@click="submit" v-bind:disabled="isSubmiting") {{subMap[editing ? 'edit' : 'new'][isSubmiting ? 'ing' : 'ready']}}
      editor(:flag="flag"  v-model="comcon" v-bind:setval="setval" placeholder="我有话说")
      // div.row.align-items-center
      //   div.col
      //     span {{editing ? '编辑评论中' : '发布评论'}}
      //     a.cancel-edit(href="javascript:void(0)" @click="cancelEditing" v-show="editing") 取消编辑
      //   div.col(style="text-align: right")
      //     button.sub-btn(@click="submit" v-bind:disabled="isSubmiting") {{subMap[editing ? 'edit' : 'new'][isSubmiting ? 'ing' : 'ready']}}

    div.citem(v-for="(item, index) in coms")
      nuxt-link(:to="'/mem/' + item.mem.id")
        img.mem-tx(:src="cdn(item.mem.avatar, 'mem')")
        strong {{item.mem.nc}}
      span.time {{timeago(item.created_at)}}
      article(v-html="processAt(marked(item.con))")
      div.opers
        a.up(href="javascript:void(0)" @click="switchFavor(item)" v-bind:class="'has-' + item.isFavor")
          icon(name="arrow-up") {{item.favor}}

        a(href="javascript:void(0)" @click="reply(item, $event)")
          icon(name="reply" ) 回复

        a.extra(href="javascript:void(0)" @click="edit(item, $event)" v-if="session && item.mem.id == session.id")
          span 编辑

        a.extra(href="javascript:void(0)" @click="destroy(item, index)"  v-if="session && item.mem.id == session.id")
          span 删除  



</template>
<script>
  import axios from '~plugins/axios'
  import $ from 'jquery'
  export default {
    props: ['flag', 'typ', 'idcd'],
    data () {
      return {
        coms: [],
        comcon: '',
        isSubmiting: false,
        editing: null,
        setval: {
          time: Date.now(),
          val: ''
        },
        subMap: {
          new: {
            ready: '提交',
            ing: '提交中...'
          },
          edit: {
            ready: '更新评论',
            ing: '更新中...'
          }
        }
      }
    },
    computed: {
      session () {
        return this.$store.state.session
      }
    },
    methods: {
      setEditVal: function (val) {
        this.setval = {
          time: Date.now(),
          val: val
        }
      },

      // 获取评论列表
      list: function () {
        if (this.idcd && this.idcd > 0) {
          axios().get(`comment?typ=${this.typ}&idcd=${this.idcd}`).then(res => {
            let data = res.data
            this.coms = data
          })
        }
      },

      // 发布评论
      submit: function () {
        if (this.showLogin()) {
          return
        }

        if (this.comcon.trim() === '') {
          return
        }

        this.isSubmiting = true
        this.editing ? this.update() : this.save()
      },

      // 新增评论
      save: function () {
        axios().post(`comment`, {
          typ: this.typ,
          idcd: this.idcd,
          con: this.comcon
        }).then(res => {
          this.coms.push(res.data.item)
          this.setEditVal('')
          this.isSubmiting = false
        })
      },

      // 更新评论
      update: function () {
        axios().put(`comment/${this.editing.id}`, {
          con: this.comcon
        }).then(res => {
          this.editing.con = this.comcon
          this.setEditVal('')
          this.isSubmiting = false
          this.editing = null
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

      // 滚到编辑器
      scrollToEditor: function (event) {
        $('html,body').animate({scrollTop: $(event.target).closest('.comment-wraper').find('.editor-go').offset().top - 100})
      },

      // 编辑
      edit: function (item, event) {
        this.scrollToEditor(event)
        this.editing = item
        this.setEditVal(item.con)
      },

      // 取消编辑
      cancelEditing: function () {
        this.editing = null
        this.setEditVal('')
      },

      // 回复
      reply: function (item, event) {
        this.scrollToEditor(event)
        this.setEditVal(this.comcon + `@${item.mem.nc} `)
      },

      // 处理 @
      processAt: function (con) {
        return con.replace(/@([^:：?\s@]+)/g, '<a href="#" class="ata">@$1</a>')
      },

      switchFavor: function (item) {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'FAVOR',
          typ: 'COMMENT',
          idcd: item.id
        }).then(res => {
          item.favor = res.data.amount
          item.isFavor = res.data.has
        })
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

          &.has-true {
            background-color: rgba(240, 173, 78, 0.24);
            color: #ff9b00;
          }
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
    position: relative;
    // padding-right: 80px;
  }

  article {
    margin: 10px 0;
  }

  .sub-btn {
    border: none;
    color: #FFF;
    background-color: #da552f;
    padding: 10px 20px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 4px;
  }

  .cancel-edit {
    margin-left: 10px;
    color: #da552f;
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
