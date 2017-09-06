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
  },
  notifiy (state, unreadNotifiy) {
    state.unreadNotifiy = unreadNotifiy
  },
  showAlert (state, {type, msg}) {
    state.alert.type = type
    state.alert.msg = msg
    state.alert.show = true
  },
  hideAlert (state) {
    state.alert.show = false
  }
}

export default mutations
