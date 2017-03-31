var express = require('express')
var router = express.Router()



;['post', 'get'].forEach(method => {
  ;[
    `/repo/:owner/:alia/:action`,
    '/repo/:owner/:alia',
    `/:controller/:id/:action`,
    `/:controller/:action`,
    `/:action`
  ].forEach(route => {
    router[method](route, function (req, res, next) {
      let action = req.params.action
      let controller = req.params.controller
      if (!action || parseInt(action) > 0) {
        action = 'index'
      }

      if (!controller) {
        let cont = route.split('/')[1]
        controller = (cont[0] === ':' ? 'home' : cont)
      }

      try {
        require(`../controllers/${controller}`)[`${method}_${action}`](req, res, next)
      } catch (ex) {
        console.log(ex)
        res.send('404')
      }
    })
  })
})


module.exports = router
