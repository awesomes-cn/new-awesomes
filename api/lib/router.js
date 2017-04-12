var express = require('express')
var router = express.Router()



;['post', 'get', 'put', 'delete'].forEach(method => {
  ;[
    `/repo/:owner/:alia/:action`,
    `/subject/:name`,
    '/repo/:owner/:alia',
    `/:controller/:id/:action`,
    `/:controller/:action`,
    `/:controller`
  ].forEach(route => {
    router[method](route, function (req, res, next) {
      let action = req.params.action
      let controller = req.params.controller
      if (!action || parseInt(action) > 0) {
        action = 'index'
      }

      if (!controller) {
        controller = route.split('/')[1]
      }

      if (action === 'index' && route.lastIndexOf('/') > 0) {
        action = 'index_id'
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
