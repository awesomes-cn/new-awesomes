const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

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
      res.send(data)
    })
  },

  post_index: (req, res) => {
    let memId = (jwt.verify(req.headers.atoken, 'hxh') || {}).id
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
    let memId = (jwt.verify(req.headers.atoken, 'hxh') || {}).id
    Comment.query({where: {id: req.params.action}}).fetch().then(item => {
      if (item.get('mem_id') !== memId) {
        res.send({status: false})
        return
      }

      item.destroy().then(() => {
        res.send({status: true})
      })
    })
  }
}
