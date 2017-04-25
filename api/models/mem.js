const DB = require('../lib/db')
const MemInfo = require('./mem_info')

module.exports = DB.Model.extend({
  tableName: 'mems',
  hasTimestamps: true,
  mem_info: function () {
    return this.hasOne(MemInfo)
  }
})
