const jwt = require('jsonwebtoken')
const Oper = require('../models/oper')
module.exports = {
  // 获取当前登录会员喜欢(XX)的小报(XX)ID数组
  fetchMyOpers: (atoken, opertyp, typ) => {
    if (!atoken) {
      return Promise.resolve([])
    }
    let memId = (jwt.verify(atoken, 'hxh') || {}).id
    if (!memId) {
      return Promise.resolve([])
    }

    return new Promise(resolve => {
      Oper.query({
        where: {opertyp: opertyp, typ: typ, mem_id: memId},
        select: ['idcd']
      }).fetchAll().then(opers => {
        resolve(opers.map(item => {
          return item.get('idcd')
        }))
      })
    })
  }
}
