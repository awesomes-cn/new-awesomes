var qiniu = require('qiniu')

// 需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = process.env.qiniu_access_key
qiniu.conf.SECRET_KEY = process.env.qiniu_secret_key

// 要上传的空间
let bucket = 'movie'

let qiniuAPI = {

  // 构建上传策略函数
  uptoken: (filename) => {
    let putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + filename)
    return putPolicy.token()
  }
}




module.exports = qiniuAPI
