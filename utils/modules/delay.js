export function delay(duration) {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('计时结束！')
    }, duration)
  })
}