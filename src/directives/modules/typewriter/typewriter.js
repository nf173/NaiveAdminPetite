/**
 * 打字机指令
 * 使任意文本变成打字机效果
 */

const typeWriter = {
  created(el, binding) {
    el.classList.add('type-writer')
    if(binding.modifiers.underline) {  // 判断光标样式
      el.classList.add('type-writer_underline')
    } else {
      el.classList.add('type-writer_cursor')
    }

    el.oldText = el.textContent || ""
    el.textContent = ""
  },
  mounted(el, binding) {
    var count = 0  // 打印文字计数
    const speed = binding.value || 160  // 获取打印速度
    /**
     * 光标颜色继承文本颜色
     */
    const colorInheritance = () => {
      const color = getComputedStyle(el).color
      el.style.setProperty('--bg-color', color)
    }
    colorInheritance()

    /**
     * 打印文字
     */
    const typeWriter = () => {
      if (count < el.oldText.length) {
        el.textContent += el.oldText.charAt(count)
        count++
      } else {
        el.isShow = true
      }
    }

    /**
     * 回退文字
     */
    const typeWriterReduce = () => {
      if(count > 0) {
        el.textContent = el.oldText.substring(0, count-1)
        count--
      } else {
        el.isShow = false
      }
    }

    if(binding.modifiers.loop) {  // 判断是否循环打印
      el.timer = setInterval(() => {
        let backTimer = 0
        let backSpeed = 800
        if(el.isShow) {
          clearTimeout(backTimer)
          backTimer = setTimeout(() => {
            typeWriterReduce()
          }, backSpeed)
        } else {
          clearTimeout(backTimer)
          backTimer = setTimeout(() => {
            typeWriter()
          }, backSpeed)
        }
      }, speed)
    } else {
      el.timer = setInterval(() => {
        typeWriter()
      }, speed)
    }
  },
  unmounted(el) {
    clearInterval(el.timer)  // 当组件卸载时清除计时器
  }
}

export default typeWriter