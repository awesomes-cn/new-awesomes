import axios from '~plugins/axios'
import Cookie from 'js-cookie'

export default function ({ store, redirect, isServer, req }) {
  if (isServer && !store.state.session) {
    if (!req.headers.cookie) {
      store.commit('setUser', null)
      return
    }
    let loginCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('awlogin='))
    if (!loginCookie) {
      store.commit('setUser', null)
      return
    }
    let token = loginCookie.split('=')[1]
    axios(token).get('session').then(res => {
      if (res.data.status) {
        Cookie.set('awlogin', { token: res.data.token, mem: res.data.mem })
      } else {
        Cookie.set('awlogin', null)
      }
      store.commit('setUser', res.data.mem)
    })
  }
}
