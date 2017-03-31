const Repo = require('../models/repo')
module.exports = {

  // repo 列表
  get_repos: (req, res) => {
    let limit = Math.min((req.query.limit || 10), 20)
    let skip = parseInt(req.query.skip || 0)
    let where = {}
    let query = {
      limit: limit,
      offset: skip,
      orderByRaw: 'id desc',
      select: ['id', 'name', 'cover', 'description_cn', 'owner', 'alia', 'using', 'mark']
    }

    ;['rootyp', 'typcd'].forEach(key => {
      let val = req.query[key]
      if (val) {
        where[key] = val
      }
    })

    query.where = where

    Promise.all([Repo.where(where).count('id'), Repo.query(query).fetchAll()])
    .then(([count, repos]) => {
      res.send({
        items: repos,
        count: count
      })
    }).catch((err) => {
      console.error(err)
    })
  }
}
