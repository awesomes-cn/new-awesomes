const Mem = require('../models/mem')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

module.exports = {
  // 登录
  post_login: (req, res) => {
    let uid = req.body.uid
    let pwd = crypto.createHash('md5').update(req.body.pwd).digest('hex')
    Mem.where({email: uid, pwd: pwd}).fetch().then(data => {
      if (data) {
        let token = jwt.sign({ id: data.id }, 'hxh', { expiresIn: '5h' })
        res.send({
          status: true,
          token: token,
          mem: {
            id: data.id,
            nc: data.get('nc'),
            avatar: data.get('avatar')
          }
        })
      } else {
        res.send({status: false})
      }
    })
  },

  get_index: (req, res) => {
    console.log('token 是', req.headers.atoken)
    if (!req.headers.atoken) {
      res.send({status: false})
      return
    }
    jwt.verify(req.headers.atoken, 'hxh', (err, decoded) => {
      Mem.where({id: (decoded || {}).id}).fetch().then(data => {
        if (data) {
          let token = jwt.sign({ id: data.id }, 'hxh', { expiresIn: '5h' })
          res.send({
            status: true,
            token: token,
            mem: {
              id: data.id,
              nc: data.get('nc'),
              avatar: data.get('avatar')
            }
          })
        } else {
          res.send({status: false})
        }
      })
    })
  }
}
