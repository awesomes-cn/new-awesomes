const DB = require('../lib/db')
const localEnv = require('../config.json')
const request = require('request')

module.exports = DB.Model.extend({
  tableName: 'repos',
  hasTimestamps: true,
  syncData: function () {
    let _self = this
    const githubAPI = `https://api.github.com/repos/${_self.get('full_name')}?client_id=${localEnv.github.client_id}&client_secret=${localEnv.github.client_secret}`
    return new Promise(resolve => {
      request({
        url: githubAPI,
        headers: {
          'User-Agent': 'Awesomes'
        }
      }, (error, response, body) => {
        let result = JSON.parse(body)
        let keyMaps = {
          stargazers_count: 'stargazers_count',
          forks_count: 'forks_count',
          subscribers_count: 'subscribers_count',
          pushed_at: 'pushed_at',
          github_created_at: 'created_at',
          description: 'description'
        }
        for (let key in keyMaps) {
          _self.set(key, result[keyMaps[key]])
        }
        return _self.save().then(() => {
          resolve()
        })
      })
    })
  }
})
