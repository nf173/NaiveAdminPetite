/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-10 23:54:51
 * @LastEditors: nanfs
 * @Description: 游戏日志
 */

export default [
  {
    path: '/log',
    name: 'log',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'log',
      isRoot: true,
      disabled: true
    },
    children: [
      {
        path: 'index',
        name: 'log_index',
        meta: {
          title: '游戏日志'
        },
        component: () => import('@/views/log/index.vue')
      }
    ]
  }
]