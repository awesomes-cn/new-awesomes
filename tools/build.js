const fs = require('fs')
const path = require('path')
const Config = require('../config')

// 替换 index.html 中的资源路径
let processAssets = () => {
  let _htmlPath = path.resolve(__dirname, '../.nuxt/dist/index.html')
  let content = fs.readFileSync(_htmlPath, 'utf8')
  let _newcon = content.replace(/\/_nuxt(\/nuxt.bundle)/, `${Config.CDN}.nuxt/dist$1`)
  _newcon = _newcon.replace(/\/_nuxt(\/vendor.bundle)/, `${Config.CDN}.nuxt/dist$1`)
  fs.writeFileSync(_htmlPath, _newcon, 'utf8')
  console.log('index.html资源文件路径替换完毕')
}

processAssets()
