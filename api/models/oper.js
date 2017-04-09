const DB = require('../lib/db')
const Repo = require('./repo')

module.exports = DB.Model.extend({
  tableName: 'opers',
  hasTimestamps: true,
  repo: function () {
    return this.belongsTo(Repo, 'idcd')
  }
})
