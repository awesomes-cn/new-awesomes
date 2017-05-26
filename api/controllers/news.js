const MBlog = require('../models/microblog')
const Logic = require('../lib/logic')
const moment = require('moment')
module.exports = {
  get_index: async (req, res) => {
    let limit = Math.min((req.query.limit || 10), 100)
    let skip = parseInt(req.query.skip || 0)
    let where = {}
    if (req.query.mem > 0) {
      where = {
        mem_id: req.query.mem
      }
    }
    let query = {
      limit: limit,
      offset: skip,
      orderByRaw: 'id desc',
      where: where
    }

    let [count, newss, favors] = await Promise.all([
      MBlog.where(where).count('id'),
      MBlog.query(query).fetchAll({
        withRelated: [
          {
            'mem': function (mqu) {
              return mqu.select('id', 'nc', 'avatar')
            }
          }, {
            'mem.mem_info': function (query) {
              query.select('company', 'mem_id')
            }
          }]
      }),
      Logic.fetchMyOpers(req, 'FAVOR', 'NEWS')
    ])

    let result = newss.toJSON()
    result.forEach(item => {
      item.isFavor = favors.indexOf(item.id) > -1
    })

    res.send({
      items: result,
      count: count
    })
  },

  post_index: async (req, res) => {
    let me = await Logic.me(req)
    if (!me || me.get('iswebker') === 'NO') {
      res.send({status: false})
      return
    }
    let params = {mem_id: me.id}
    ;['con'].forEach(key => {
      params[key] = req.body[key]
    })

    let item = await new MBlog(params).save()
    let newItem = await MBlog.where({id: item.get('id')}).fetch({
      withRelated: [
        {
          'mem': function (mqu) {
            return mqu.select('id', 'nc', 'avatar')
          }
        }, {
          'mem.mem_info': function (query) {
            query.select('company', 'mem_id')
          }
        }]
    })

    res.send({status: true, item: newItem})
  },

  // 最佳
  get_best: (req, res) => {
    let period = req.query.period
    let query = MBlog

    let firstDay = {
      week: moment().days(-7).format(),
      month: moment().days(-30).format()
    }[period]

    if (firstDay) {
      query = query.where('created_at', '>', firstDay)
    }

    query.query({
      orderByRaw: 'favor desc'
    }).fetch({
      withRelated: [
        {
          'mem': function (mqu) {
            return mqu.select('id', 'nc', 'avatar')
          }
        }, {
          'mem.mem_info': function (query) {
            query.select('company', 'mem_id')
          }
        }]
    }).then(item => {
      if (item) {
        res.send(item)
      } else {
        res.send('nobest')
      }
    })
  }
}
