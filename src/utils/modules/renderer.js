/*
 * @Author: nanfs
 * @Date: 2023-09-06 15:47:39
 * @LastEditTime: 2023-09-09 20:11:09
 * @LastEditors: nanfs
 * @Description: 
 */
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import { NText } from 'naive-ui';

export const renderIcon = (icon, option) => {
  return () => h(SvgIcon, { name: icon, size: option?.size, color: option?.color }, null)
}

export const renderAvatarHeader = (option) => {
  return () => h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;'
    },
    [
      h('div', null, [
        h('div', null, [h(NText, { depth: 2 }, { default: () => option.name || 'User' })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => option.msg || '毫无疑问，你是办公室里最亮的星' }
          )
        ])
      ])
    ]
  )
}