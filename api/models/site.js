const DB = require('../lib/db')

module.exports = DB.Model.extend({
  tableName: 'sites',
  hasTimestamps: true,
  repos: []
})
