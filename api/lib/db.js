const Config = require('../config.json')
var knex = require('knex')({
  client: 'mysql',
  connection: Config.db
})
var bookshelf = require('bookshelf')(knex)

module.exports = bookshelf
