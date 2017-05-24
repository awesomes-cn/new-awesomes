import Vuex from 'vuex'
import mutations from './mutations'

const store = () => {
  return new Vuex.Store({
    state: {
      isShowLogin: false,
      session: null,
      locale: 'en',
      locales: ['en', 'zh-cn']
    },
    mutations
  })
}

export default store
