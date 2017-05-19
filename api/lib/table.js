const path = require('path')
const Helper = require('./helper')



let getTable = () => {
  return Helper.walk(path.dirname(__dirname) + '/models', 1).reduce((result, item) => {
    let modelName = path.basename(item, '.js')
    modelName = modelName.split('_').map(item => {
      return item[0].toUpperCase() + item.substring(1)
    }).join('')
    result[modelName] = require(item)
    return result
  }, {})
}




module.exports = getTable()
