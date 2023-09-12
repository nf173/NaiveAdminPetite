/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-11 00:03:54
 * @LastEditors: nanfs
 * @Description: 服务器列表
 */

export default [
  {
    path: '/servers',
    name: 'servers',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'servers',
      isRoot: true,
    },
    children: [
      {
        path: 'index',
        name: 'servers_index',
        meta: {
          title: '服务器列表'
        },
        component: () => import('@/views/servers/index.vue')
      }
    ]
  }
]