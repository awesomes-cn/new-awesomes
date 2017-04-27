const MBlog = require('../models/microblog')

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
      res.send({
        items: newss,
        count: count
      })
    }).catch((err) => {
      console.error(err)
    })
  }
}
