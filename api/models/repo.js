const DB = require('../lib/db')

module.exports = DB.Model.extend({
  tableName: 'repos'
  // constructor: () => {
  //   DB.Model.apply(this, arguments)
  // }
})
