const MBlog = require('../models/microblog')
const Logic = require('../lib/logic')
const moment = require('moment')
module.exports = {
  get_index: (req, res) => {
    let limit = Math.min((req.query.limit || 10), 100)
    let skip = parseInt(req.query.skip || 0)
    let query = {
      limit: limit,
      offset: skip,
      orderByRaw: 'id desc'
    }

    Promise.all([MBlog.count('id'), MBlog.query(query).fetchAll({
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
    })])
    .then(([count, newss]) => {
      Logic.fetchMyOpers(req, 'FAVOR', 'NEWS').then(opers => {
        let result = newss.toJSON()
        result.forEach(item => {
          item.isFavor = opers.indexOf(item.id) > -1
        })

        res.send({
          items: result,
          count: count
        })
      })
    }).catch((err) => {
      console.error(err)
    })
  },

  post_index: (req, res) => {
    let memId = Logic.myid(req)
    if (!memId) {
      res.send({status: false})
      return
    }
    let params = {mem_id: memId}
    ;['con'].forEach(key => {
      params[key] = req.body[key]
    })

    new MBlog(params).save().then(item => {
      MBlog.where({id: item.get('id')}).fetch({
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
      }).then(data => {
        res.send({status: true, item: data})
      })
    })
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
