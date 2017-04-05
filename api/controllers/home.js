const Repo = require('../models/repo')
const Mem = require('../models/mem')
const Topic = require('../models/topic')
const Subject = require('../models/subject')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const qiniu = require('../lib/qiniu')



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
  },

  // 专题列表页面
  get_subjects: (req, res) => {
    Subject.fetchAll().then((items) => {
      res.send(items)
    })
  },

  // 获取文章
  get_topics: (req, res) => {
    let limit = Math.min((req.query.limit || 10), 20)
    let skip = parseInt(req.query.skip || 0)
    let query = {
      limit: limit,
      offset: skip,
      orderByRaw: 'id desc',
      select: ['id', 'title'],
      where: {
        typcd: req.query.typcd
      }
    }
    Topic.query(query).fetchAll().then(data => {
      res.send(data)
    })
  },

  // 上传Token
  get_uptoken: (req, res) => {
    let filename = `${req.query.prefix}/${Date.now()}.png`
    res.send({
      token: qiniu.uptoken(filename),
      filename: filename
    })
  }
}
