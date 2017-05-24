const Msg = require('../models/msg')
const Logic = require('../lib/logic')

module.exports = {
  get_index: async (req, res) => {
    let limit = Math.min((req.query.limit || 10), 20)
    let skip = parseInt(req.query.skip || 0)
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({status: false})
      return
    }
    let _where = {
      to: memId
    }

    let [items, count] = await Promise.all([
      Msg.query({
        where: _where,
        limit: limit,
        offset: skip,
        orderByRaw: 'id desc'
      }).fetchAll(),
      Msg.where(_where).count('id')
    ])

    res.send({
      items: items,
      count: count
    })
  },
  get_unread: async (req, res) => {
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({status: false})
      return
    }
    let count = await Msg.where({
      status: 'UNREAD',
      to: memId
    }).count('id')
    res.send({
      status: true,
      count: count
    })
  }
}
