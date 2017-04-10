const Mem = require('../models/mem')
const Oper = require('../models/oper')

module.exports = {
  get_index_id: function (req, res) {
    Mem.query({
      where: {id: req.params.action},
      select: ['id', 'nc', 'avatar']
    }).fetch({
      withRelated: ['mem_info']
    }).then(data => {
      res.send(data)
    })
  },
  get_opers: function (req, res) {
    let where = {
      mem_id: req.params.id
    }
    ;['opertyp', 'idcd', 'typ'].forEach(key => {
      if (req.query[key]) {
        where[key] = req.query[key]
      }
    })
    Oper.query({
      where: where
    }).fetchAll({
      withRelated: [{
        'repo': function (query) {
          query.select('alia', 'cover', 'owner', 'id', 'using')
        }
      }]
    }).then(data => {
      res.send(data)
    })
  }
}
