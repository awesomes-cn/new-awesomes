const Mem = require('../models/mem')
const Oper = require('../models/oper')


let memUsing = (mids) => {
  return Oper.where({typ: 'REPO', opertyp: 'USING'}).where('mem_id', 'in', mids).query({
    select: ['idcd', 'mem_id']
  }).fetchAll({
    withRelated: [{
      'repo': function (query) {
        query.select('alia', 'cover', 'owner', 'id', 'using')
      }
    }]
  })
}


module.exports = {
  get_index: (req, res) => {
    let limit = Math.min((req.query.limit || 5), 20)
    let skip = parseInt(req.query.skip || 0)
    Promise.all([Mem.where('reputation', '>=', 20).where('using', '>=', 5).count('id'), Mem.where('reputation', '>=', 20).where('using', '>=', 5)
    .query({
      orderByRaw: 'reputation desc',
      select: ['id', 'nc', 'avatar'],
      limit: limit,
      offset: skip
    }).fetchAll({
      withRelated: ['mem_info']
    })]).then(([count, data]) => {
      let mems = data.toJSON()
      let mids = mems.map(mem => {
        return mem.id
      })

      memUsing(mids).then(usings => {
        mems.forEach(mem => {
          mem.usings = usings.filter(item => {
            return item.get('mem_id') === mem.id
          })
        })

        res.send({
          items: mems,
          count: count
        })
      })
    })
  },

  post_index: (req, res) => {
  }
}
