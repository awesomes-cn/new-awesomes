const DB = require('../lib/db')
const Repo = require('./repo')

module.exports = DB.Model.extend({
  tableName: 'opers',
  repo: function () {
    return this.belongsTo(Repo, 'idcd')
  }
})
