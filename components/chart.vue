<template lang="pug">
  div.chart-wrap(:style="{width: size + 'px', height: size + 'px'}")
    canvas(:class="flag + '-chart-back'")
    canvas(:class="flag + '-chart-front'")
</template>
<script>
  let addCircleAction = (ele, size, val, lineWidth, color, showText, isAnimation) => {
    let innerSize = size - lineWidth * 2
    let r = innerSize / 2
    let canvas = document.getElementsByClassName(ele)[0]
    canvas.width = size
    canvas.height = size
    var ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, size, size)
    ctx.lineWidth = lineWidth
    ctx.beginPath()
    ctx.arc(r + lineWidth, r + lineWidth, r, 0, 2 * Math.PI * val / 100)
    ctx.strokeStyle = color
    ctx.stroke()

    if (showText) {
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = color
      ctx.moveTo(r + lineWidth, r + lineWidth)
      ctx.fillText(`${val}`, r + lineWidth, r + lineWidth)
    }
  }
  let addCircle = (ele, size, val, lineWidth, color, showText, isAnimation) => {
    if (!isAnimation) {
      addCircleAction(ele, size, val, lineWidth, color, showText, isAnimation)
      return
    }
    let startval = 0
    let timer = setInterval(function () {
      if (startval > val) {
        startval = val
        clearInterval(timer)
        return
      }
      addCircleAction(ele, size, startval, lineWidth, color, showText, isAnimation)
      startval += 1
    }, 10)
  }

  export default {
    props: ['val', 'size', 'flag', 'bgColor'],
    created () {
    },
    mounted () {
      addCircle(`${this.flag}-chart-back`, this.size, 100, 2, (this.bgColor || '#FAFAFA'))
      let color = '#35bd3a'
      if (this.val < 60) {
        color = '#b4b2b9'
      }
      if (this.val < 30) {
        color = '#ff2e2e'
      }
      addCircle(`${this.flag}-chart-front`, this.size, this.val, 2, color, true, false)
    }
  }
</script>

<style lang="scss" scoped>
  .chart-wrap {
    position: relative;
    canvas {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>
