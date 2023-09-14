/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-11 00:08:46
 * @LastEditors: nanfs
 * @Description: 系统管理路由
 */

export default [
  {
    path: '/setting',
    name: 'setting',
    redirect: '/setting/user',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '系统设置',
      icon: 'setting'
    },
    children: [
      {
        path: 'account',
        name: 'setting_account',
        meta: {
          title: '个人设置',
          icon: 'account',
          cache: false
        },
        component: () => import('@/views/setting/account/account.vue')
      }
    ]
  }
]