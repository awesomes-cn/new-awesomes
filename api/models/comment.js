const DB = require('../lib/db')

module.exports = DB.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,
  mem: function () {
    return this.belongsTo(Mem)
  }
})
