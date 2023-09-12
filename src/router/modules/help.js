/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-10 23:51:08
 * @LastEditors: nanfs
 * @Description: 帮助文档
 */

export default [
  {
    path: '/help',
    name: 'help',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'help',
      isRoot: true,
    },
    children: [
      {
        path: 'index',
        name: 'help_index',
        meta: {
          title: '帮助文档'
        },
        component: () => import('@/views/help/index.vue')
      }
    ]
  }
]