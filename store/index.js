import Vuex from 'vuex'
import mutations from './mutations'
const store = () => {
  return new Vuex.Store({
    state: {
      isShowLogin: false,
      session: null,
      locale: 'en',
      locales: ['en', 'zh-cn'],
      unreadNotifiy: 0,
      alert: {
        show: false,
        type: 'info',
        msg: ''
      }
    },
    mutations
  })
}

export default store
