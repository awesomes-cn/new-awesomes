<template lang="pug">
  div.meditor
    div.toolbar
      a(href="javascript:void(0)" title="上传图片" @click="preview")
        icon(name="images")

      a(href="javascript:void(0)" title="预览" @click="preview" v-bind:class="'active-' + (view === 'preview')")
        icon(name="eye")

      button.sub-btn(v-if="subtxt" @click="submitAction" v-bind:disabled="isSubmiting") {{isSubmiting ? '提交中...' : subtxt}}

       
    div.con(v-show="view == 'editor'")
      textarea(:id="'meditor-' + flag" )
    div.preview(v-show="view == 'preview'" v-html="marked(htmlstr)")  
</template>
<script>
  import $ from '~assets/js/jquery-vendor'
  import CodeMirror from 'codemirror'
  require('codemirror/lib/codemirror.css')
  require('codemirror/mode/markdown/markdown.js')
  let markdown_editor
  export default {
    props: ['flag', 'value', 'subtxt', 'submit', 'setval'],
    data () {
      return {
        htmlstr: '',
        view: 'editor',
        isSubmiting: false
      }
    },
    watch: {
      'setval': function (val) {
        markdown_editor.setValue(val)
      }
    },
    methods: {
      preview: function () {
        if (this.view === 'editor') {
          this.htmlstr = markdown_editor.getValue()
          this.view = 'preview'
        } else {
          this.view = 'editor'
        }
        
      },

      // 提交
      submitAction: function () {
        if (this.showLogin()) {
          return
        }
        this.isSubmiting = true
        this.submit(markdown_editor.getValue()).then(() => {
          markdown_editor.setValue('')
          this.isSubmiting = false
        })
      }
    },
    mounted () {
      let self = this
      markdown_editor = CodeMirror.fromTextArea(document.getElementById('meditor-' + this.flag), {
        mode: 'markdown',
        theme: "default",
        lineWrapping: true,
        viewportMargin: Infinity,
        extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
      })

      markdown_editor.on("change",function(){
        self.$emit('input', markdown_editor.getValue())
      })

      markdown_editor.setValue(this.setval)
    }
  }
</script>

<style lang="scss" scoped>
  .meditor {
    border: #DDD 1px solid
  }
  .toolbar {
    padding: 10px;
    border-bottom: #EEE 1px solid;

    a {
      padding: 0 10px;

      &:link, &:visited {
        color: #969595
      }

      &:hover, &:active {
        color: #333
      }

      &.active-true {
        color: #da552f
      }
    }
  }

  .sub-btn {
    float: right;
    border: none;
    color: #FFF;
    background-color: #da552f;
    padding: 6px 15px;
    cursor: pointer;
  }

  .right {
    float: right
  }

  .con {
    padding: 10px;
  }

  .preview {
    padding: 20px 30px;
    font-size: 15px;
    line-height: 27px;
  }
  
</style>
