import Vue from 'vue'
import timeago from 'timeago.js'
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
    // cdn地址
    Vue.prototype.cdn = function (name, folder, process) {
      if (!name || name === '') {
        name = 'default.png'
      }
      if (/^http(s)?:\/\//.test(name)) {
        return name
      }
      let url = `https://awesomes.oss-cn-beijing.aliyuncs.com/${folder}/${name}`
      if (process) {
        url += `?x-oss-process=style/${process}`
      }
      return url
    }

    // 弹出登录框
    Vue.prototype.showLogin = function () {
      if (!this.$store.state.session) {
        this.$store.commit('showLogin')
        return true
      }
      return false
    }

    // 隐藏登陆框
    Vue.prototype.hideLogin = function () {
      this.$store.commit('hideLogin')
    }

    // markdown 解析
    Vue.prototype.marked = function (con) {
      return marked(con, {renderer: renderer})
    }

    // 时间本地化
    Vue.prototype.timeago = function (datetime) {
      return timeago().format(datetime, 'zh_CN')
    }

    // 消息提示
    Vue.prototype.$alert = function (type, msg) {
      this.$store.commit('showAlert', {
        type: type,
        msg: msg
      })
      let _self = this
      setTimeout(() => {
        _self.$store.commit('hideAlert')
      }, 3000)
    }
  }
})
