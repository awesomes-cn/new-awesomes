const jwt = require('jsonwebtoken')
const Oper = require('../models/oper')


let Logic = {
  // 获取当前登录会员喜欢(XX)的小报(XX)ID数组
  fetchMyOpers: (req, opertyp, typ) => {
    if (!req.headers.atoken) {
      return Promise.resolve([])
    }
    let memId = Logic.myid(req)
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
  },
  myid: (req) => {
    try {
      return (jwt.verify(req.headers.atoken, 'hxh') || {}).id
    } catch(ex) {
      return null
    }
  }

}

module.exports = Logic
