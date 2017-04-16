const DB = require('../lib/db')
const Mem = require('./mem')

let Comment = DB.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,
  mem: function () {
    return this.belongsTo(Mem)
  },
  initialize: function () {
    this.on('destroyed', this.updateTarget)
    this.on('created', this.updateTarget)
  },
  updateTarget: function (model) {
    let Model = {
      REPO: {
        table: require('./repo'),
        field: 'comment'
      },
      DIANP: {
        table: require('./dianp'),
        field: 'comment'
      },
      TOPIC: require('./topic')
    }[model.get('typ')]

    if (!Model) { return Promise.resolve() }
    let table = Model.table
    return new Promise(resolve => {
      Comment.query({where: {typ: model.get('typ'), idcd: model.get('idcd')}}).count().then(count => {
        table.query({where: {id: model.get('idcd')}}).fetch().then(data => {
          data.set(Model.field, count)
          data.save().then(() => {
            resolve(count)
          })
        })
      })
    })
  }
})


module.exports = Comment