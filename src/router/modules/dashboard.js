export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/console',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '仪表盘',
      icon: 'dashboard',
    },
    children: [
      {
        path: 'console',
        name: 'dashboard_console',
        meta: {
          title: '主控台',
          icon: 'computer',
          affix: true
        },
        component: () => import('@/views/dashboard/console/index.vue'),
      },
    ]
  }
]