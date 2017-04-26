<template lang="pug">
  div.dianp
    ul.list-group.list-group-flush
      li.list-group-item
        div.top-show
          div.left
            a.write(href="javascript:void(0)" @click="isShowEditor = true")
              icon(name="edit") 写短评
          div.middle
            article(v-html="marked(firstDianp.con)" v-if="firstDianp")
            span(v-if="!firstDianp") 说说你的用后短评？好用？有坑？经验教训？
          a.right(href="javascript:void(0)" @click="showList" v-show="diancount > 0")
            span 查看全部 {{diancount}} 条短评
    ul.list-group.list-group-flush(v-if="isShowEditor")
      li.list-group-item    
        p.alert.alert-warning 注意：为了保证质量，目前我们只针对 GitHub 粉丝数大于 50 的开发者开放点评功能！
        editor(flag="repo-dianp" hideTool="true" v-model="diancon" v-bind:setval="setval")
          div.row.align-items-center
            div.col
              span 发布点评 
              a(href="javascript:void(0)" @click="isShowEditor = false") 【关闭】
            div.col(style="text-align: right")
              button.sub-btn(@click="submit") 发布 
    ul.list-group.list-group-flush(v-if="isShowList")
      li.list-group-item(v-for="(item, index) in dianps")
        article(v-html="marked(item.con)")
        ul.extra
          li
            a.up(href="javascript:void(0)" @click="switchFavor(item)"  v-bind:class="'has-' + item.isFavor")
              icon(name="arrow-up")
              span {{item.favor}}
          li
            a(href="")
              img.mem-tx(:src="cdn(item.mem.avatar, 'mem')")
              strong {{item.mem.nc}} @Awesoms
          li
            span {{timeago(item.created_at)}}
          
          li
            a(href="javascript:void(0)" @click="item.showComment = !item.showComment")
              icon(name="comment")
              span {{item.comment}} 评论
        
        
        div.clearfix
        div(style="padding: 10px 30px" v-if="item.showComment")
          comment(:flag="'dianp-com' + index" typ="DIANP" v-bind:idcd="item.id")
      div(style="padding: 10px 0" v-show="pagetotal > pagesize")
        pagination(flag="repos-dianp" v-bind:total="pagetotal" v-bind:size="pagesize" v-bind:callback="pageCallback")     
</template>


<script>
  import axios from '~plugins/axios'
  import { Message } from 'element-ui'
  import $ from 'jquery'
  import Comment from '~components/comment.vue'
  export default {
    props: ['repo'],
    data () {
      return {
        dians: [],
        firstDianp: null,
        diancon: '',
        isSubmiting: false,
        isShowEditor: false,
        editing: null,
        dianps: [],
        pagetotal: 0,
        pagesize: 10,
        diancount: 0,
        setval: {
          time: Date.now(),
          val: ''
        },
        isShowList: false,
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
    components: {
      Comment
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

      // 初始化获取最新1条
      initList: function () {
        axios().get(`repo/${this.repo.owner}/${this.repo.name}/dianp`, {
          params: {
            limit: 1
          }
        }).then(res => {
          this.firstDianp = res.data.items[0]
          this.diancount = res.data.count
        })
      },

      showList: function () {
        this.isShowList = true
        this.list()
      },

      // 获取列表
      list: function (page) {
        page = page || 1
        axios().get(`repo/${this.repo.owner}/${this.repo.name}/dianp`, {
          params: {
            limit: this.pagesize,
            skip: this.pagesize * (page - 1)
          }
        }).then(res => {
          res.data.items.forEach(item => {
            item.showComment = false
          })
          this.dianps = res.data.items
          this.pagetotal = res.data.count
          this.initIsFavor()
        })
      },

      // 当前登陆会员喜欢的点评
      initIsFavor: function () {
        if (!this.session || this.dianps.length < 1) { return }
      },

      pageCallback: function (page) {
        this.list(page)
      },

      // 发布
      submit: function () {
        if (this.showLogin()) {
          return
        }

        if (this.diancon.trim() === '') {
          return
        }

        this.isSubmiting = true
        this.editing ? this.update() : this.save()
      },

      // 新增
      save: function () {
        axios().post(`dianp`, {
          rid: this.repo.id,
          con: this.diancon
        }).then(res => {
          console.log('成都了')
          this.dians.push(res.data.item)
          this.setEditVal('')
          this.isSubmiting = false
          Message({
            message: '新增点评成功',
            type: 'success'
          })
        })
      },

      // 更新
      update: function () {
        axios().put(`dianp/${this.editing.id}`, {
          con: this.comcon
        }).then(res => {
          this.editing.con = this.comcon
          this.setEditVal('')
          this.isSubmiting = false
          this.editing = null
        })
      },

      // 删除
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

      // 赞
      switchFavor: function (item) {
        if (this.showLogin()) { return }
        axios().post('oper', {
          opertyp: 'FAVOR',
          typ: 'DIANP',
          idcd: item.id
        }).then(res => {
          item.favor = res.data.amount
          item.isFavor = res.data.has
        })
      }
    },
    created () {
      this.initList()
    }
  }
</script>


<style lang="scss" scoped>
  .dianp {
    border: #EEE 1px solid;
  }
  .list-group-item {
    padding: 20px;
    padding-bottom: 10px;
    display: block;

    article {
      font-size: 1.1rem
    }
  }

  .write {
    margin-right: 10px;
    color: #29b996;
    svg {
      width: 15px;
      height: 15px;
      float: left;
      margin-right: 3px;
    }
  }

  .extra {
    margin: 0;
    padding: 0;
    margin-top: 10px;
    color: #bfbfbf;
    display: block;

    a:link, a:visited {
      color: #bfbfbf
    }

    a:hover, a:active {
      color: #333
    }
    
    li {
      display: inline-block;
      list-style: none;
      margin-right: 15px;
      float: left;
      padding: 10px 0;
        

      svg {
        float: left;
        margin-right: 3px;
        width: 18px;
        height: 18px;
      }

      .up {
        background-color: hsla(0,0%,95%,.8);
        color: #909090;
        padding: .2rem .2rem;
        padding-right: .5rem;
        border-radius: 2px;
        overflow: hidden;
        display: inline-block;

        &.has-true {
          background-color: rgba(240, 173, 78, 0.24);
          color: #ff9b00;
        }
      }
    }
    .mem-tx {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      margin-right: 5px;
    }
  }

  .sub-btn {
    border: none;
    color: #FFF;
    background-color: #da552f;
    padding: 6px 15px;
    cursor: pointer;
  }

  .top-show {
    position: relative;
    display: flex;

    .right {
      width: 200px;
      text-align: right;
    }

    .left {
      width: 70px;
    }
    .middle {
      height: 20px;
      overflow: hidden;
      flex-grow: 1
    }
  }

</style>
