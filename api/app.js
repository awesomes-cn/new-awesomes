var express = require('express')
var app = express()
var router = require('./lib/router')
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  console.log('====', req.path)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, atoken')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')


  // 滑动刷新token
  // jwt.verify(req.headers.atoken, 'hxh', (err, decoded) => {
  //   if (decoded) {
  //     jwt.sign(decoded, 'hxh', { expiresIn: '5h' })
  //   }
  //   next()
  // })
  next()
})

app.use(router)

app.listen(5010)
