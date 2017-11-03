import axios from 'axios'
import Cookie from 'js-cookie'
const Config = require('../config')

// 请求分为两类：
// 1类是客户端发出的请求：直接用 Cookie.get('awlogin') 即可
// 2类是服务端发出的请求：则需要通过 req.headers.cookie 去获取了
export default (req) => {
  let token = null
  if (req && req.headers.cookie) {
    let _cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('awlogin='))
    if (_cookie) {
      token = _cookie.split('=')[1]
    }
  }
  return axios.create({
    baseURL: Config.API,
    headers: { atoken: (token || Cookie.get('awlogin') || '') }
  })
}

