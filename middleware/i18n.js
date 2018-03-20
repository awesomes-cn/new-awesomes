// this example is https://github.com/nuxt/nuxt.js/blob/master/examples/i18n/middleware/i18n.js
export default function ({ req, i18n, store, route, params, error, redirect }) {
  if (process.server) {
    let locale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase() || 'en'
    if (locale === 'zh') {
      locale = 'zh-cn'
    }
    store.commit('SET_LANG', locale)
    // i18n.locale = store.state.locale
  }
}
