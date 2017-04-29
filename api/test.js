// var redis = require("redis"),
//     client = redis.createClient()


// client.set("hello", "hxh", "EX", 30, function (params) {
//   console.log('设置成功')
// })


const jwt = require('jsonwebtoken')

jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDkzMzkwMzQzLCJleHAiOjE0OTM0MDgzNDN9.CcbyD4yNIGJrJqP-zoqrziGZs4pFIwWsyqDZvqC4zaE', 'hxh')