    <div class="gb-turntable-container" :style="{transform:rotate_angle,transition:rotate_transition}">
     <canvas class="gb-turntable-canvas" width="300" height="300px">{{$t('lang.lottery.exploreNotSupport')}}</canvas>
rotate_transition: 'transform 6s ease-in-out',
    draw () {
      var num = this.lotteryList.length
      var rotateDeg = 360 / num / 2 + 90 // 扇形回转角度
      var prizeItems = document.createElement('ul') // 奖项容器
      var turnNum = 1 / num // 文字旋转 turn 值
      var html = [] // 奖项

      let ele = document.getElementById('turntable')
      let canvas = ele.querySelector('.gb-turntable-canvas')
      let container = ele.querySelector('.gb-turntable-container')
      if (!canvas.getContext) {
        alert('抱歉！浏览器不支持。')
        return
      }
      let ctx = canvas.getContext('2d') // 获取绘图上下文
      for (var i = 0; i < num; i++) {
        ctx.save() // 保存当前状态
        ctx.beginPath() // 开始一条新路径
        ctx.translate(150, 150) // 位移到圆心，下面需要围绕圆心旋转
        ctx.moveTo(0, 0) // 从(0, 0)坐标开始定义一条新的子路径
        ctx.rotate((360 / num * i - rotateDeg) * Math.PI / 180) // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
        ctx.arc(0, 0, 150, 0, 2 * Math.PI / num, false) // 绘制圆弧
        if (i % 2 === 0) { // 颜色间隔
          ctx.fillStyle = '#ffe0df'
        } else {
          ctx.fillStyle = '#fff'
        }
        ctx.fill() // 填充扇形
        // 绘制边框
        ctx.lineWidth = 1
        ctx.strokeStyle = '#ccc'
        ctx.stroke()
        ctx.restore() // 恢复前一个状态
        // 奖项列表
        var prizeList = this.lotteryList
        html.push('<li class="gb-turntable-item"> <span style="')
        html.push('transform: rotate(' + i * turnNum + 'turn)">')
        prizeList[i].img ? html.push((prizeList[i].title ? '<span class="prizeText">' + (prizeList[i].title.length > 6 ? (prizeList[i].title.substr(0, 6) + '...') : prizeList[i].title) + '</span>' : '') + '<img alt="' + prizeList[i].title.substr(0, 5) + '...' + '" src="' + prizeList[i].img + '" />') : html.push('<span class="itemText">' + prizeList[i].title + '</span>')
        html.push('</span> </li>')
        // prizeList[i].img ? html.push('<img alt="' + prizeList[i].title.substr(0, 5) + '...' + '" src="' + prizeList[i].img + '" />') : html.push('<span class="itemText">' + prizeList[i].title + '</span>')
        // html.push('</span> </li>')
        if ((i + 1) === num) {
          prizeItems.className = 'gb-turntalbe-list'
          container.appendChild(prizeItems)
          prizeItems.innerHTML = html.join('')
        }
      }
    }
