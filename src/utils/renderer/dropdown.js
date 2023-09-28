import { NText } from 'naive-ui';

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