const DB = require('../lib/db')

module.exports = DB.Model.extend({
  tableName: 'mem_infos',
  hasTimestamps: true
})
