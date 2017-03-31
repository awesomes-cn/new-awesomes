import Vue from 'vue'
var marked = require('marked')
var Prism = require('prismjs')
var renderer = new marked.Renderer()

renderer.code = (code, language) => {
  return '<pre class="language-' + language + '"><code class="hljs language-' + language + '">' +
    Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript) +
    '</code></pre>'
}

Vue.use({
  install: function (Vue, options) {
    Vue.prototype.cdn = function (name, folder, process) {
      let url = `https://awesomes.oss-cn-beijing.aliyuncs.com/${folder}/${name}`
      if (process) {
        url += `?x-oss-process=style/${process}`
      }
      return url
    }

    Vue.prototype.showLogin = function () {
      this.$store.commit('showLogin')
    }

    Vue.prototype.hideLogin = function () {
      this.$store.commit('hideLogin')
    }

    Vue.prototype.marked = function (con) {
      return marked(con, {renderer: renderer})
    }
  }
})
