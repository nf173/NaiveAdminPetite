/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-10 23:54:39
 * @LastEditors: nanfs
 * @Description: 游戏备份
 */

export default [
  {
    path: '/backup',
    name: 'backup',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'backup',
      isRoot: true,
      disabled: true
    },
    children: [
      {
        path: 'index',
        name: 'backup_index',
        meta: {
          title: '游戏备份'
        },
        component: () => import('@/views/backup/index.vue')
      }
    ]
  }
]