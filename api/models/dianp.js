const DB = require('../lib/db')
const Mem = require('./mem')

module.exports = DB.Model.extend({
  tableName: 'dianps',
  hasTimestamps: true,
  mem: function () {
    return this.belongsTo(Mem)
  }
})
