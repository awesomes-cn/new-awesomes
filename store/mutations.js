const mutations = {
  showLogin (state) {
    state.isShowLogin = true
  },
  hideLogin (state) {
    state.isShowLogin = false
  },
  setUser (state, session) {
    state.session = session
  },
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export default mutations
