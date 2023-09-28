/**
 * @method 延迟计时器
 * @param {Number} duration - 持续时间
 * @returns {Promise}
 */
export function delay(duration) {
  return new Promise((resolve)=>{
    const timer = setTimeout(() => {
      resolve('计时结束!')
      clearTimeout(timer);
    }, duration)
  })
}