const Comment = require('../models/comment')
module.exports = {
  get_index: (req, res) => {
    let query = {
      where: {
        typ: req.query.typ,
        idcd: req.query.idcd
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

  post_index: (req, res) => {
    let params = {mem_id: 1}
    ;['typ', 'idcd', 'con'].forEach(key => {
      params[key] = req.body[key]
    })

    new Comment(params).save().then(item => {
      res.send({status: true})
    })
  }
}
