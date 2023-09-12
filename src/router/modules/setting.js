/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-11 23:15:50
 * @LastEditors: nanfs
 * @Description: 设置页面路由
 */

export default [
  {
    path: '/setting',
    name: 'setting',
    redirect: '/setting/account',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '设置页面',
      icon: 'setting'
    },
    children: [
      {
        path: 'room',
        path: 'room',
        name: 'setting_room',
        meta: {
          title: '房间设置',
          icon: 'room',
          disabled: true
        },
        component: () => import('@/views/setting/room/room.vue')
      },
      {
        path: 'word',
        path: 'word',
        name: 'setting_word',
        meta: {
          title: '世界设置',
          icon: 'word'
        },
        component: () => import('@/views/setting/word/word.vue')
      },
      {
        path: 'mods',
        path: 'mods',
        name: 'setting_mods',
        meta: {
          title: '模组设置',
          icon: 'mods',
          disabled: true
        },
        component: () => import('@/views/setting/mods/mods.vue')
      }
    ]
  }
]