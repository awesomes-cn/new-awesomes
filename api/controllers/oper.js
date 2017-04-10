const Mem = require('../models/mem')
const Oper = require('../models/oper')
module.exports = {
  get_index: (req, res) => {
    let limit = Math.min((req.query.limit || 5), 20)
    let skip = parseInt(req.query.skip || 0)
    Promise.all([Mem.where('reputation', '>=', 20).where('using', '>=', 5).count('id'), Mem.where('reputation', '>=', 20).where('using', '>=', 5).query({
      orderByRaw: 'reputation desc',
      select: ['id', 'nc', 'avatar'],
      limit: limit,
      offset: skip
    }).fetchAll({
      withRelated: ['mem_info', {
        'opers': function (query) {
          query.where({typ: 'REPO', opertyp: 'USING'}).select('idcd', 'mem_id')
        }
      }, {
        'opers.repo': function (query) {
          query.select('alia', 'cover', 'owner', 'id', 'using')
        }
      }]
    })]).then(([count, data]) => {
      res.send({
        items: data,
        count: count
      })
    })
    // Mem.where('(role = ? or reputation >= 20) and `using` >= 5', 'vip').order("reputation desc").includes(:mem_info)
  },

  post_index: (req, res) => {
    let params = {mem_id: 1}
    ;['opertyp', 'idcd', 'typ'].forEach(key => {
      params[key] = req.body[key]
    })

    new Oper(params).save().then(item => {
      res.send({status: true})
    })
  }
}
