const Category = require('../models/category')
module.exports = {

  // 一级分类
  get_first: (req, res) => {
    Category.where({group: 'REPO', typcd: 'A'}).query({select: ['key', 'sdesc', 'icon']}).fetchAll().then((cates) => {
      res.send(cates)
    })
  },

  // 二级分类
  get_second: (req, res) => {
    Category.where({group: 'REPO', typcd: 'B', parent: req.params.id}).query({select: ['key', 'sdesc', 'icon']}).fetchAll().then((cates) => {
      res.send(cates)
    })
  },

  // 完整分类
  get_all: (req, res) => {
    Category.where({group: 'REPO'}).query({select: ['key', 'sdesc', 'icon', 'parent', 'typcd']})
    .fetchAll().then((cates) => {
      res.send(cates)
    })
  }
}
