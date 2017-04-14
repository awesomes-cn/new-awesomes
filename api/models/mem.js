const DB = require('../lib/db')
const MemInfo = require('./mem_info')
const Oper = require('./oper')

module.exports = DB.Model.extend({
  tableName: 'mems',
  hasTimestamps: true,
  mem_info: function () {
    return this.hasOne(MemInfo)
  },
  nc: '鸟巢',
  opers: function () {
    return this.hasMany(Oper)
  }
})
