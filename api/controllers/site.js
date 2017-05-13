let Link = require('../models/link')
module.exports = {
  get_friendlinks: (req, res) => {
    Link.query({
      orderByRaw: '`order` desc'
    }).fetchAll().then(items => {
      res.send(items)
    })
  }
}
