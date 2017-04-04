import axios from 'axios'
let store = require('store')

export default axios.create({
  baseURL: 'http://127.0.0.1:5010/',
  headers: { atoken: ((store.get('awlogin') || {}).token) || '' }
})
