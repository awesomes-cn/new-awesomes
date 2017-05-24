const Comment = require('../models/comment')
const Logic = require('../lib/logic')
const Oper = require('../models/oper')


// 获取当前登录会员喜欢的评论
let getMyFavors = (req) => {
  if (!req.headers.atoken) {
    return Promise.resolve([])
  }
  let memId = Logic.myid(req)
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
  get_index: async (req, res) => {
    let limit = Math.min((req.query.limit || 30), 100)
    let skip = parseInt(req.query.skip || 0)
    let where = {}
    ;['typ', 'idcd', 'mem_id'].forEach(key => {
      let val = req.query[key]
      if (val) {
        where[key] = val
      }
    })
    let query = {
      where: where,
      limit: limit,
      offset: skip
    }

    let [comments, count, myfavors] = await Promise.all([
      Comment.query(query).fetchAll({
        withRelated: [{
          'mem': function (mqu) {
            return mqu.select('id', 'nc', 'avatar')
          }
        }]
      }),
      Comment.where(where).count('id'),
      getMyFavors(req)
    ])
    let result = comments.toJSON()
    result.forEach(item => {
      item.isFavor = myfavors.indexOf(item.id) > -1
    })
    res.send({
      items: result,
      count: count
    })
  },
  post_index: async (req, res) => {
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({status: false})
      return
    }
    let params = {mem_id: memId}
    ;['typ', 'idcd', 'con'].forEach(key => {
      params[key] = req.body[key]
    })

    let newItem = await new Comment(params).save()
    let backitem = await Comment.where({id: newItem.get('id')}).fetch({
      withRelated: [{
        'mem': function (mqu) {
          return mqu.select('id', 'nc', 'avatar')
        }
      }]
    })

    res.send({status: true, item: backitem})
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
