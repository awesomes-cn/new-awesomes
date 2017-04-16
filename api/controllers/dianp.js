const Dianp = require('../models/dianp')
const jwt = require('jsonwebtoken')

module.exports = {
  post_index: (req, res) => {
    let memId = (jwt.verify(req.headers.atoken, 'hxh') || {}).id
    if (!memId) {
      res.send({status: false})
      return
    }
    let params = {
      mem_id: memId,
      repo_id: req.body.rid,
      con: req.body.con
    }
    new Dianp(params).save().then(item => {
      Dianp.where({id: item.get('id')}).fetch({
        withRelated: [{
          'mem': function (mqu) {
            return mqu.select('id', 'nc', 'avatar')
          }
        }]
      }).then(data => {
        res.send({status: true, item: data})
      })
    })
  }
}