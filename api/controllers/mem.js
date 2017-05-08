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
    let limit = Math.min((req.query.limit || 10), 100)
    let skip = parseInt(req.query.skip || 0)
    let where = {
      mem_id: req.params.id
    }
    ;['opertyp', 'idcd', 'typ'].forEach(key => {
      if (req.query[key]) {
        where[key] = req.query[key]
      }
    })
    Promise.all([Oper.where(where).count('id'),
      Oper.query({
        where: where,
        limit: limit,
        offset: skip
      }).fetchAll({
        withRelated: [{
          'repo': function (query) {
            query.select('alia', 'cover', 'owner', 'id', 'using', 'stargazers_count', 'description_cn', 'rootyp', 'rootyp_zh', 'typcd', 'typcd_zh', 'mark')
          }
        }]
      })
    ]).then(([count, items]) => {
      res.send({
        items: items,
        count: count
      })
    })
  },

  // 我在用
  get_using: (req, res) => {
  }
}
