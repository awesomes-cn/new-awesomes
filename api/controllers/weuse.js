const Mem = require('../models/mem')
module.exports = {
  get_index: (req, res) => {
    Mem.where('reputation', '>=', 20).where('using', '>=', 5).query({
      orderByRaw: 'reputation desc',
      limit: 5,
      select: ['id', 'nc', 'avatar']
    }).fetchAll({
      withRelated: ['mem_info', {
        'opers': function (query) {
          query.where({typ: 'REPO', opertyp: 'USING'}).select('idcd', 'mem_id')
        }
      }, {
        'opers.repo': function (query) {
          query.select('alia', 'cover', 'owner', 'id')
        }
      }]
    }).then(data => {
      res.send(data)
    })
    // Mem.where('(role = ? or reputation >= 20) and `using` >= 5', 'vip').order("reputation desc").includes(:mem_info)
  }
}
