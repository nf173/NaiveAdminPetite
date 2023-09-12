/*
 * @Author: nanfs
 * @Date: 2023-09-09 23:23:08
 * @LastEditTime: 2023-09-09 23:27:12
 * @LastEditors: nanfs
 * @Description: 切换动画设置
 */
export default {
  isToggleAnimation: true,
  toggleAnimationType: [
    {
      label: '淡入',
      value: 'fade'
    }, 
    {
      label: '滑动',
      value: 'transform'
    },
    {
      label: '缩放',
      value: 'zoom'
    }
  ]
}