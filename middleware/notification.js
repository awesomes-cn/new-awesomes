import axios from '~/plugins/axios'

export default async function ({ store, redirect, req, head }) {
  if (store.state.session) {
    let notifications = await axios(req).get('notification/unread')
    store.commit('notifiy', notifications.data.count)
  }
}
