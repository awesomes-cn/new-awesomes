const Repo = require('../models/repo')
const Oper = require('../models/oper')
const Dianp = require('../models/dianp')
const algoliasearch = require('algoliasearch')
const localEnv = require('../config.json')

let searchGo = (key, hitsPerPage, page) => {
  if (!key || key.trim() === '') {
    return Promise.resolve({
      haseach: false,
      ids: []
    })
  }
  let client = algoliasearch(localEnv.algolia.appId, localEnv.algolia.appKey)
  let index = client.initIndex('Repo')
  return new Promise(resolve => {
    index.search(key, {
      hitsPerPage: hitsPerPage,
      page: page
    }, function searchDone (err, content) {
      if (err) {
        resolve({
          haseach: true,
          ids: []
        })
        return
      }
      resolve({
        haseach: true,
        total: content.nbHits,
        ids: content.hits.map(item => {
          return item.objectID
        })
      })
    })
  })
}

module.exports = {

  // repo 列表
  get_index: (req, res) => {
    let limit = Math.min((req.query.limit || 10), 100)
    let skip = parseInt(req.query.skip || 0)
    let page = parseInt(req.query.page || 1)
    let where = {}
    let query = {
      limit: limit,
      offset: skip,
      select: ['id', 'name', 'cover', 'description_cn', 'owner', 'alia', 'using', 'mark', 'pushed_at']
    }

    query.orderByRaw = {
      'hot': '(stargazers_count + forks_count + subscribers_count) desc',
      'new': 'github_created_at desc',
      'trend': 'trend desc'
    }[req.query.sort || 'hot'] || '(stargazers_count + forks_count + subscribers_count) desc'

    ;['rootyp', 'typcd'].forEach(key => {
      let val = req.query[key]
      if (val) {
        where[key] = val
      }
    })

    query.where = where

    let search = req.query.search
    searchGo(search, limit, page - 1).then(result => {
      let myQuery = Repo
      if (result.haseach) {
        myQuery = Repo.where('id', 'in', result.ids)
      }
      Promise.all([Repo.where(where).count('id'), myQuery.query(query).fetchAll()])
      .then(([count, repos]) => {
        res.send({
          items: repos,
          count: result.haseach ? result.total : count
        })
      }).catch((err) => {
        console.error(err)
      })
    })
  },


  get_index_id: (req, res) => {
    Repo.query({where: { owner: req.params.owner, alia: req.params.alia }}).fetch().then(data => {
      let _repo = data.toJSON()
      Oper.query({
        where: {opertyp: 'USING', typ: 'REPO', idcd: data.id},
        limit: 5,
        orderByRaw: 'id desc'
      }).fetchAll({
        withRelated: [{
          'mem': function (mqu) {
            return mqu.select('id', 'nc', 'avatar')
          }
        }]
      }).then(using => {
        _repo.usings = using
        res.send(_repo)
      })
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
  },

  // 点评
  get_dianp: (req, res) => {
    let limit = Math.min((req.query.limit || 10), 100)
    let skip = parseInt(req.query.skip || 0)
    Repo.query({where: { owner: req.params.owner, alia: req.params.alia }}).fetch().then(data => {
      let query = {
        limit: limit,
        offset: skip,
        where: {
          repo_id: data.id
        },
        orderByRaw: 'id desc'
      }

      Promise.all([Dianp.where({repo_id: data.id}).count('id'), Dianp.query(query).fetchAll({
        withRelated: [{
          'mem': function (mqu) {
            return mqu.select('id', 'nc', 'avatar')
          }
        }]
      })]).then(([count, items]) => {
        res.send({
          items: items,
          count: count
        })
      })
    })
  },

  // top 100
  get_top100: (req, res) => {
    let orderby = '(stargazers_count + forks_count + subscribers_count) desc'
    if (req.query.sort === 'trend') {
      orderby = 'trend desc'
    }
    Repo.query({
      limit: 100,
      orderByRaw: orderby,
      select: ['id', 'name', 'cover', 'description_cn', 'owner', 'alia', 'pushed_at']
    }).fetchAll().then((repos) => {
      res.send(repos)
    }).catch((err) => {
      console.error(err)
    })
  }
}
