/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-10 23:02:12
 * @LastEditors: nanfs
 * @Description: 控制台路由
 */

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/console',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '控制面板',
      icon: 'dashboard',
    },
    children: [
      {
        path: 'console',
        name: 'dashboard_console',
        meta: {
          title: '主控台',
          affix: true
        },
        component: () => import('@/views/dashboard/console/console.vue'),
      },
    ]
  }
]