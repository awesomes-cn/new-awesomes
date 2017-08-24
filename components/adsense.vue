<template lang="pug">
  div.ad-box
    ins(class="adsbygoogle"
      style="display:block"
      data-ad-format="fluid"
      data-ad-layout="image-side"
      data-ad-layout-key="-fd+6a+11-fw+q1"
      data-ad-client="ca-pub-9906622596531689"
      data-ad-slot="1784178322") 
</template>

<script>
  var addScript = src => {
    var hm = window.document.createElement('script')
    hm.src = src
    var s = window.document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
    return new Promise(resolve => {
      hm.onload = hm.onreadystatechange = function () {
        if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
          resolve()
        }
      }
    })
  }

  var loadAdsense = async () => {
    setTimeout(async function () {
      let src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      await addScript(src)
      console.log('adsense loaded')
      var adsbygoogle = window.adsbygoogle || []
      adsbygoogle.push({})
    }, 500)
  }
  export default {
    created () {
      if (process.BROWSER_BUILD) {
        loadAdsense()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ad-box {
    width: 100%;
  }
</style>
