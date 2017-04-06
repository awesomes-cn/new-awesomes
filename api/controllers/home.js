const Repo = require('../models/repo')
const Mem = require('../models/mem')
const Topic = require('../models/topic')
const Subject = require('../models/subject')
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

  get_session: (req, res) => {
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
  },

  // 我们在用
  get_weuses: (req, res) => {
    Mem.where('reputation', '>=', 20).where('using', '>=', 5).query({
      orderByRaw: 'reputation desc',
      limit: 5,
      select: ['id', 'nc', 'avatar']
    }).fetchAll({
      withRelated: ['mem_info', {
        'opers': function (query) {
          query.where({typ: 'REPO', opertyp: 'USING'}).select('idcd', 'mem_id')
        }
      }, {
        'opers.repo': function (query) {
          query.select('alia', 'cover', 'owner', 'id')
        }
      }]
    }).then(data => {
      res.send(data)
    })
    // Mem.where('(role = ? or reputation >= 20) and `using` >= 5', 'vip').order("reputation desc").includes(:mem_info)
  }
}
