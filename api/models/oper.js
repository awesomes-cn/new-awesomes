const DB = require('../lib/db')
const Repo = require('./repo')
const Mem = require('./mem')

let Oper = DB.Model.extend({
  tableName: 'opers',
  hasTimestamps: true,
  repo: function () {
    return this.belongsTo(Repo, 'idcd')
  },
  mem: function () {
    return this.belongsTo(Mem)
  },
  initialize: function () {
    this.on('created', Oper.updateTarget)
  }
}, {
  sameAmount: function (params) {
    return Oper.query({where: params}).count('id')
  },
  // 更新目标对象的操作次数
  updateTarget: function (model) {
    let Model = {
      REPO: {
        table: Repo,
        opers: {
          USING: 'using',
          MARK: 'mark'
        }
      },
      COMMENT: {
        table: require('./comment'),
        opers: {
          FAVOR: 'favor'
        }
      },
      NEWS: {
        table: require('./microblog'),
        opers: {
          FAVOR: 'favor'
        }
      },
      DIANP: {
        table: require('./dianp'),
        opers: {
          FAVOR: 'favor'
        }
      },
      TOPIC: require('./topic')
    }[model.get('typ')]

    if (!Model) { return Promise.resolve() }
    let opername = Model.opers[model.get('opertyp')]
    if (!opername) { return Promise.resolve() }
    let table = Model.table
    return new Promise(resolve => {
      Oper.query({where: {opertyp: model.get('opertyp'), typ: model.get('typ'), idcd: model.get('idcd')}}).count().then(count => {
        table.query({where: {id: model.get('idcd')}}).fetch().then(data => {
          data.set(opername, count)
          data.save().then(() => {
            resolve(count)
          })
        })
      })
    })
  },
  maxOrder: function (params) {
    if (params.opertyp !== 'USING') {
      return Promise.resolve(0)
    }
    return new Promise(resolve => {
      Oper.query({
        where: params,
        limit: 1,
        orderByRaw: '`order` desc'
      }).fetch().then(item => {
        resolve(item.get('order'))
      })
    })
  }
})


module.exports = Oper
