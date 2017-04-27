import axios from 'axios'
import Cookie from 'js-cookie'

export default (token) => {
  return axios.create({
    baseURL: 'http://127.0.0.1:5010/',
    headers: { atoken: (token || Cookie.get('awlogin') || '') }
  })
}

