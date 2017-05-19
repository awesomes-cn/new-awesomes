const Config = require('./config.json')
module.exports = {
  client: 'mysql',
  connection: Config.db
}
