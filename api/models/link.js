const DB = require('../lib/db')
module.exports = DB.Model.extend({
  tableName: 'links',
  hasTimestamps: true
})
