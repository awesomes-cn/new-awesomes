const Repo = require('../models/repo')
module.exports = {

  get_index: (req, res) => {
    Repo.query({where: { owner: req.params.owner, alia: req.params.alia }}).fetch().then(data => {
      res.send(data)
    })
  },

  // 最新发布
  get_latest: (req, res) => {
    // let limit = Math.min((req.query.limit || 10), 100)
    // let skip = req.query.skip || 0
    Repo.query({limit: 15, offset: 0, orderByRaw: 'id desc', select: ['id', 'name', 'cover', 'description_cn', 'owner', 'alia']}).fetchAll().then((repo) => {
      res.send(repo)
    }).catch((err) => {
      console.error(err)
    })
  }
}
