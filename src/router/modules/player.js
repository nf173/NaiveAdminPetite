/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-10 23:54:24
 * @LastEditors: nanfs
 * @Description: 玩家管理
 */

export default [
  {
    path: '/player',
    name: 'player',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'player',
      isRoot: true,
      disabled: true
    },
    children: [
      {
        path: 'index',
        name: 'player_index',
        meta: {
          title: '玩家管理'
        },
        component: () => import('@/views/player/index.vue')
      }
    ]
  }
]