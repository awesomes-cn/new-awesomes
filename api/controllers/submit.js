const Submit = require('../models/submit')
module.exports = {
  post_new: function (req, res) {
    new Submit({
      html_url: req.body.html_url,
      rootyp: req.body.rootyp,
      typcd: req.body.typcd,
      status: 'UNREAD'
    }).save().then(model => {
      res.send({status: true})
    })
  }
}
