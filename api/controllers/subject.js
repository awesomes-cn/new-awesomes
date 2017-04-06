const Subject = require('../models/subject')
const Repo = require('../models/repo')
module.exports = {
  get_index_id: function (req, res) {
    let sub
    Subject.query({where: { key: req.params.name }}).fetch()
    .then(data => {
      sub = data.toJSON()
      return Repo.where('tag', 'LIKE', `%${sub.title}%`).query({select: ['id', 'name', 'cover', 'description_cn', 'owner', 'alia', 'using', 'mark']}).fetchAll()
    })
    .then(data => {
      sub.repos = data
      res.send(sub)
    })
  },
  // 专题列表页面
  get_index: (req, res) => {
    Subject.fetchAll().then((items) => {
      res.send(items)
    })
  }
}
