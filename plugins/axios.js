import axios from 'axios'
import Cookie from 'js-cookie'

export default (token) => {
  return axios.create({
    baseURL: 'http://192.168.26.128:5010/',
    headers: { atoken: (token || Cookie.get('awlogin') || '') }
  })
}

