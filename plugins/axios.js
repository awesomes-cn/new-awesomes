import axios from 'axios'
let store = require('store')

export default axios.create({
  baseURL: 'http://192.168.26.128:5010/',
  headers: { atoken: ((store.get('awlogin') || {}).token) || '' }
})
