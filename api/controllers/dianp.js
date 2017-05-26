const Dianp = require('../models/dianp')
const Logic = require('../lib/logic')

module.exports = {
  post_index: async (req, res) => {
    let me = await Logic.me(req)
    if (!me || me.get('iswebker') === 'NO') {
      res.send({status: false})
      return
    }
    let params = {
      mem_id: me.id,
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
