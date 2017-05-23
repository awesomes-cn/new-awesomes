let Link = require('../models/link')
let Msg = require('../models/msg')
const Logic = require('../lib/logic')

module.exports = {
  // 获取友情链接
  get_friendlinks: (req, res) => {
    Link.query({
      orderByRaw: '`order` desc'
    }).fetchAll().then(items => {
      res.send(items)
    })
  },

  // 前端客申请
  post_apply: async (req, res) => {
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({status: false})
      return
    }

    await new Msg({
      typ: 'webker-apply',
      title: '前端客申请',
      con: req.body.con,
      level: 'admin',
      from: memId
    }).save()

    res.send({status: true})
  }
}
