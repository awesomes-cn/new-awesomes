const Mem = require('../models/mem')
const Oper = require('../models/oper')
const Logic = require('../lib/logic')

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
  },

  get_is: (req, res) => {
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({has: false})
      return
    }
    let params = {mem_id: memId}
    ;['opertyp', 'idcd', 'typ'].forEach(key => {
      params[key] = req.query[key]
    })
    Oper.query({where: params}).fetch().then(data => {
      res.send(data ? true : false)
    })
  },

  post_index: (req, res) => {
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({status: false})
      return
    }

    let params = {mem_id: memId}
    let pwoutsesion = {}
    ;['opertyp', 'idcd', 'typ'].forEach(key => {
      params[key] = req.body[key]
      pwoutsesion[key] = req.body[key]
    })

    Oper.query({where: params}).fetch().then(data => {
      if (data) {
        data.destroy().then((model) => {
          Oper.updateTarget(new Oper(pwoutsesion)).then(amount => {
            res.send({has: false, amount: amount})
          })
        })
      } else {
        Oper.maxOrder({opertyp: 'USING', mem_id: memId}).then(maxOrder => {
          params.order = maxOrder + 10000

          new Oper(params).save().then(model => {
            Oper.sameAmount(pwoutsesion).then(amount => {
              res.send({has: true, amount: amount})
            })
          })
        })
      }
    })
  }
}
