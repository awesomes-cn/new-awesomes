const co = require('co')
const localEnv = require('../config.json')
const STS = require('ali-oss').STS

module.exports = {
  // 上传Token
  get_token: (req, res) => {
    let filename = `${req.query.prefix}/${Date.now()}.png`
    var policy
    var client = new STS({
      accessKeyId: localEnv.alioss.AccessKeyId,
      accessKeySecret: localEnv.alioss.AccessKeySecret
    })
    co(function* () {
      var result = yield client.assumeRole(localEnv.alioss.RoleArn, policy, localEnv.alioss.TokenExpireTime)
      result.credentials.filename = filename
      res.send(result.credentials)
    })
  }
}
