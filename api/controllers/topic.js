const Topic = require('../models/topic')
module.exports = {
  // 获取文章
  get_index: (req, res) => {
    let limit = Math.min((req.query.limit || 10), 20)
    let skip = parseInt(req.query.skip || 0)
    let query = {
      limit: limit,
      offset: skip,
      orderByRaw: 'id desc',
      select: ['id', 'title', 'cover', 'mem_id', 'favor', 'comment', 'visit', 'created_at'],
      where: {
        typcd: req.query.typcd
      }
    }
    Topic.query(query).fetchAll({
      withRelated: [{
        'mem': function (mqu) {
          return mqu.select('id', 'nc', 'avatar')
        }
      }]
    }).then(data => {
      res.send(data)
    })
  },

  get_index_id: (req, res) => {
    Topic.query({where: {id: req.params.action}}).fetch({
      withRelated: [{
        'mem': function (mqu) {
          return mqu.select('id', 'nc', 'avatar')
        }
      }]
    }).then(data => {
      res.send(data)
    })
  },

  post_index: function (req, res) {
    let params = {}
    ;['cover', 'title', 'con', 'typcd'].forEach(key => {
      params[key] = req.body[key]
    })

    new Topic(params).save().then(item => {
      res.send({status: true})
    })
  }
}
