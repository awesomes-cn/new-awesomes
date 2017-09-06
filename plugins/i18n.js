import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import store from '~/store'

Vue.use(VueI18n)

const i18n = new VueI18n({
  // locale: store.state.locale,
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages: {
    'en': require('~/locales/en.json'),
    'zh-cn': require('~/locales/zh-cn.json')
  }
})

export default i18n
