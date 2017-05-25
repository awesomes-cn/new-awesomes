const DB = require('../lib/db')
const Mem = require('./mem')
const Msg = require('./msg')

let Comment = DB.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,
  mem: function () {
    return this.belongsTo(Mem)
  },
  initialize: function () {
    this.on('created', (model) => {
      return Promise.all([Comment.updateTarget(model), Comment.sendNotify(model)])
    })
  }
}, {
  // 更新目标对象的评论数量
  updateTarget: async function (model) {
    let Model = {
      REPO: {
        table: './repo',
        field: 'comment'
      },
      DIANP: {
        table: './dianp',
        field: 'comment'
      },
      NEWS: {
        table: './microblog',
        field: 'comment'
      }
    }[model.get('typ')]

    if (!Model) { return Promise.resolve() }
    let table = require(Model.table)
    let [count, distobj] = await Promise.all([
      Comment.query({where: {typ: model.get('typ'), idcd: model.get('idcd')}}).count(),
      table.query({where: {id: model.get('idcd')}}).fetch()
    ])
    distobj.set(Model.field, count)
    await distobj.save()
    return count
  },

  // 给目标发送通知
  sendNotify: async function (model) {
    let Model = {
      DIANP: {
        table: './dianp',
        name: '点评',
        link: 'dianp'
      },
      NEWS: {
        table: './microblog',
        name: '情报',
        link: 'news'
      }
    }[model.get('typ')]
    let table = require(Model.table)

    let [fromem, distobj] = await Promise.all([
      Mem.query({where: {id: model.get('mem_id')}}).fetch(),
      table.query({where: {id: model.get('idcd')}}).fetch()
    ])

    let toid = distobj.get('mem_id')

    // 目标用户发送通知，如果是给自己的对象评论则不用通知
    let distids = fromem.id === toid ? [] : [toid]
    let toActions = distids.map(async (mem) => {
      await new Msg({
        title: '评论',
        con: `[${fromem.get('nc')}](/mem/${fromem.get('id')}) 评论了你的 [${Model.name}](/${Model.link}/${model.get('idcd')})`,
        status: 'UNREAD',
        to: toid,
        typ: 'comment'
      }).save()
    })


    // 分析 @ 到的用户发送通知
    let ncs = (model.get('con').match(/@\S+/g) || []).map(nc => {
      return nc.slice(1)
    })
    let mems = []
    if (ncs.length > 0) {
      mems = await Mem.where('nc', 'in', ncs).fetchAll()
    }
    let atids = mems.map(mem => {
      return mem.id
    })
    // 去掉重复通知
    atids.splice(atids.indexOf(toid), atids.indexOf(toid) < 0 ? 0 : 1)
    let atActions = atids.map(async (mem) => {
      await new Msg({
        title: '@',
        con: `[${fromem.get('nc')}](/mem/${fromem.get('id')}) 在 [${Model.name}](/${Model.link}/${model.get('idcd')}) 中提到了你`,
        status: 'UNREAD',
        to: mem,
        typ: '@'
      }).save()
    })

    await Promise.all([
      atActions,
      toActions
    ])
  }
})


module.exports = Comment
