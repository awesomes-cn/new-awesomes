<template lang="pug">
  div.meditor(:style="hideBorder ? 'border: 0' : ''")
    div.con(v-show="view == 'editor'")
      textarea(:id="'meditor-' + flag" v-bind:placeholder="placeholder")
    div.preview(v-show="view == 'preview'" v-html="marked(htmlstr)")
</template>

<script>
  require('codemirror/lib/codemirror.css')
  let markdown_editor
  export default {
    props: ['flag', 'value', 'setval', 'hideTool', 'hideFooter', 'hideBorder', 'placeholder'],
    data () {
      return {
        htmlstr: '',
        view: 'editor'
      }
    },
    watch: {
      'setval': function (val) {
        markdown_editor.setValue(val.val)
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
      }
    },
    mounted () {
      if (process.browser) {
        var CodeMirror = require('codemirror')
        require('codemirror/mode/markdown/markdown.js')
        var placeholder = require('~/assets/js/placeholder.js')
        let self = this
        placeholder(CodeMirror)
        markdown_editor = CodeMirror.fromTextArea(document.getElementById('meditor-' + this.flag), {
          mode: 'markdown',
          theme: "default",
          lineWrapping: true,
          viewportMargin: Infinity,
          extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
        })
        markdown_editor.on('focus', function () {
          console.log('要写了')
        })

        markdown_editor.on("change",function(editor){
          self.$emit('input', editor.getValue())
        })
      }

      // if (this.setval) {
      //   markdown_editor.setValue(this.setval.val)
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .meditor {
    border: #DDD 1px solid;
    border-radius: 2px;
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

  .right {
    float: right
  }

  .con {
    padding: 8px;
  }

  .preview {
    padding: 20px 30px;
    font-size: 15px;
    line-height: 27px;
  }

  .footbar {
    padding: 10px;
    border-top: #EEE 1px solid;
    overflow: hidden;
    position: relative;

    .info {
      color: #DDD
    }
  }
  
</style>
