const Repo = require('../models/repo')

let syncRepo = (id) => {
  Repo.where('id', '>', id).fetch().then(item => {
    if (item) {
      item.syncData().then(() => {
        console.log(`${item.get('full_name')} 同步成功`)
        setTimeout(() => {
          syncRepo(item.id)
        }, 1200)
      })
    }
  })
}

module.exports = {
  sync: () => {
    syncRepo(0)
  }
}
