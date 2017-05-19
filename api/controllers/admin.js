module.exports = {
  get_tables: async (req, res) => {
    let _table = req.query.table
    let limit = 20
    let skip = parseInt(req.query.skip || 0)
    let map = {
      mem: {
        keys: ['nc', 'email', 'wealth']
      },
      submit: {
        keys: ['html_url', 'typcd', 'status']
      }
    }[_table]
    let Table = require(`../models/${_table}`)
    let _keys = map.keys.concat(['id', 'created_at'])
    let [items, count] = await Promise.all([
      Table.query({
        limit: limit,
        offset: skip,
        select: _keys,
        orderByRaw: 'id desc'
      }).fetchAll(),
      Table.count('id')
    ])
    res.send({
      items: items,
      count: count
    })
  },
  post_destroy: async (req, res) => {
    let _table = req.body.table
    let maps = ['mem', 'submit']
    if (maps.indexOf(_table) < 0) {
      res.send({
        status: false
      })
    }
    let Table = require(`../models/${_table}`)
    await new Table({id: req.body.id}).destroy()
    res.send({
      status: true
    })
  }
}
