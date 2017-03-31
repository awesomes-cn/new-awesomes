const Mem = require('../models/mem')
module.exports = {
  get_index: function (req, res) {
    Mem.query({
      where: {id: req.params.action},
      select: ['id', 'nc', 'avatar']
    }).fetch({
      withRelated: ['mem_info']
    }).then(data => {
      res.send(data)
    })
  }
}
