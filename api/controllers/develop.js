const fs = require('fs')
const path = require('path')
module.exports = {
  get_icons: (req, res) => {
    let results = []
    let folder = path.resolve(__dirname, '../../src/svg')
    let list = fs.readdirSync(`${folder}`)
    list.forEach(file => {
      results.push(path.basename(file, '.svg'))
    })
    res.send(results)
  }
}
