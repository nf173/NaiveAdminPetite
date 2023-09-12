/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-11 00:01:37
 * @LastEditors: nanfs
 * @Description: 列表
 */

export default [
  {
    path: '/list',
    name: 'list',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'list',
      isRoot: true,
    },
    children: [
      {
        path: 'index',
        name: 'list_index',
        meta: {
          title: '列表'
        },
        component: () => import('@/views/list/index.vue')
      }
    ]
  }
]