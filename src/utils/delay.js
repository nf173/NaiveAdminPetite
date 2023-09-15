/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-07 23:46:45
 * @LastEditors: nanfs
 * @Description: 
 */
export function delay(duration) {
  return new Promise((resolve)=>{
    const timer = setTimeout(() => {
      resolve('计时结束！')
      clearTimeout(timer);
    }, duration)
  })
}