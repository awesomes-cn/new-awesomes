const Subject = require('../models/subject')
const Repo = require('../models/repo')
module.exports = {
  get_index_id: async (req, res) => {
    let sub = await Subject.query({
      where: { key: req.params.name }
    }).fetch()

    sub = sub.toJSON()
    sub.repos = await Repo.where('tag', 'LIKE', `%${sub.title}%`).query({
      select: ['id', 'name', 'cover', 'description_cn', 'owner', 'alia', 'using', 'mark', 'rootyp', 'typcd', 'rootyp_zh', 'typcd_zh', 'pushed_at', 'stargazers_count'],
      orderByRaw: 'stargazers_count desc'
    }).fetchAll()

    res.send(sub)
  },

  // 专题列表页面
  get_index: async (req, res) => {
    let items = await Subject.query({
      limit: req.query.limit || 100,
      orderByRaw: '`order` desc'
    }).fetchAll()
    res.send(items)
  }
}
