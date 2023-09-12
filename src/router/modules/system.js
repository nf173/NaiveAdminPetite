/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-11 00:08:46
 * @LastEditors: nanfs
 * @Description: 系统管理路由
 */

export default [
  {
    path: '/system',
    name: 'system',
    redirect: '/system/user',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '系统设置',
      icon: 'system'
    },
    children: [
      {
        path: 'account',
        name: 'system_account',
        meta: {
          title: '个人中心',
          icon: 'account',
          cache: true
        },
        component: () => import('@/views/system/account/account.vue')
      }
    ]
  }
]