import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    isShowLogin: false
  },
  mutations: {
    showLogin (state) {
      state.isShowLogin = true
    },
    hideLogin (state) {
      state.isShowLogin = false
    }
  }
})

export default store
