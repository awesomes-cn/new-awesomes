import axios from '~/plugins/axios'
var OSS = require('~/assets/js/aliyun-oss-sdk.min').Wrapper
var bucket = 'awesomes'
var region = 'oss-cn-beijing'

var applyTokenDo = function (func, file, prefix) {
  return axios().get(`upload/token?prefix=${prefix}`).then(function (res) {
    var creds = res.data
    var client = new OSS({
      region: region,
      accessKeyId: creds.AccessKeyId,
      accessKeySecret: creds.AccessKeySecret,
      stsToken: creds.SecurityToken,
      bucket: bucket
    })

    return func(client, file, creds.filename)
  })
}

var progress = function (p) {
  return function (done) {
    console.log('~~~~~', Math.floor(p * 100))
    done()
  }
}

var uploadFile = function (client, file, filename) {
  return client.multipartUpload(filename, file, {
    progress: progress
  })
}

export default {
  upload: function (file, prefix) {
    return applyTokenDo(uploadFile, file, prefix)
  }
}
