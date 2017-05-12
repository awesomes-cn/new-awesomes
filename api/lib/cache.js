const redis = require('redis')
const client = redis.createClient()

let Cache = {
  // expire 过期时间：秒
  set: (key, val, expire) => {
    client.set(key, JSON.stringify(val), 'EX', expire)
  },

  get: (key) => {
    return new Promise(resolve => {
      client.get(key, (err, reply) => {
        resolve(reply)
      })
    })
  },

  ensure: (key, expire, action) => {
    return new Promise(resolve => {
      Cache.get(key).then(result => {
        if (result) {
          resolve(JSON.parse(result))
        } else {
          action().then(aresult => {
            Cache.set(key, aresult, expire)
            resolve(aresult)
          })
        }
      })
    })
  }

}


module.exports = Cache
