import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    isShowLogin: false,
    session: null
  },
  mutations: {
    showLogin (state) {
      state.isShowLogin = true
    },
    hideLogin (state) {
      state.isShowLogin = false
    },
    setUser (state, session) {
      state.session = session
    }
  },
  actions: {
  }
})

export default store
