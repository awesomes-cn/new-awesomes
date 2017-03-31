const Repo = require('../models/repo')
const Mem = require('../models/mem')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')



module.exports = {

  // repo 列表
  get_repos: (req, res) => {
    let limit = Math.min((req.query.limit || 10), 20)
    let skip = parseInt(req.query.skip || 0)
    let where = {}
    let query = {
      limit: limit,
      offset: skip,
      orderByRaw: 'id desc',
      select: ['id', 'name', 'cover', 'description_cn', 'owner', 'alia', 'using', 'mark']
    }

    ;['rootyp', 'typcd'].forEach(key => {
      let val = req.query[key]
      if (val) {
        where[key] = val
      }
    })

    query.where = where

    Promise.all([Repo.where(where).count('id'), Repo.query(query).fetchAll()])
    .then(([count, repos]) => {
      res.send({
        items: repos,
        count: count
      })
    }).catch((err) => {
      console.error(err)
    })
  },

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
  }
}
