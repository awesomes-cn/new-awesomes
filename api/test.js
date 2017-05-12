const Cache = require('./lib/cache')
Cache.ensure('ddfff', 10, () => {
  return Promise.resolve({"hxh": "ddd", "age": Date.now()})
}).then(result => {
  console.log(result)
})


// Cache.get('huhuhu').then(result => {
//   console.log(typeof result)
// })
// const redis = require('redis')
// const client = redis.createClient()

// Cache.set('yyyy', {name: 'hxh'})


// client.hgetall('yyyy', (err, reply) => {
//   console.log(err, reply)
// })