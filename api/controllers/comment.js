const Comment = require('../models/comment')
const Logic = require('../lib/logic')
const Oper = require('../models/oper')


// 获取当前登录会员喜欢的评论
let getMyFavors = (atoken) => {
  if (!atoken) {
    return Promise.resolve([])
  }
  let memId = Logic.myid
  if (!memId) {
    return Promise.resolve([])
  }
  return new Promise(resolve => {
    Oper.query({
      where: {opertyp: 'FAVOR', typ: 'COMMENT', mem_id: memId},
      select: ['idcd']
    }).fetchAll().then(opers => {
      resolve(opers.map(item => {
        return item.get('idcd')
      }))
    })
  })
}


module.exports = {
  get_index: (req, res) => {
    let query = {
      where: {
        typ: req.query.typ,
        idcd: req.query.idcd
      }
    }
    Comment.query(query).fetchAll({
      withRelated: [{
        'mem': function (mqu) {
          return mqu.select('id', 'nc', 'avatar')
        }
      }]
    }).then(data => {
      getMyFavors(req.headers.atoken).then(opers => {
        let result = data.toJSON()
        result.forEach(item => {
          item.isFavor = opers.indexOf(item.id) > -1
        })
        res.send(result)
      })
    })
  },
  post_index: (req, res) => {
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({status: false})
      return
    }
    let params = {mem_id: memId}
    ;['typ', 'idcd', 'con'].forEach(key => {
      params[key] = req.body[key]
    })

    new Comment(params).save().then(item => {
      Comment.where({id: item.get('id')}).fetch({
        withRelated: [{
          'mem': function (mqu) {
            return mqu.select('id', 'nc', 'avatar')
          }
        }]
      }).then(data => {
        res.send({status: true, item: data})
      })
    })
  },

  delete_index_id: (req, res) => {
    let memId = Logic.myid(req)
    Comment.query({where: {id: req.params.action}}).fetch().then(item => {
      if (item.get('mem_id') !== memId) {
        res.send({status: false})
        return
      }

      let pwoutsesion = {}
      ;['idcd', 'typ'].forEach(key => {
        pwoutsesion[key] = item.get(key)
      })

      item.destroy().then(() => {
        Comment.updateTarget(new Comment(pwoutsesion)).then(() => {
          res.send({status: true})
        })
      })
    })
  },

  put_index_id: (req, res) => {
    let memId = Logic.myid(req)
    Comment.query({where: {id: req.params.action}}).fetch().then(item => {
      if (item.get('mem_id') !== memId) {
        res.send({status: false})
        return
      }
      item.set('con', req.body.con)
      item.save().then(() => {
        res.send({status: true})
      })
    })
  }
}
