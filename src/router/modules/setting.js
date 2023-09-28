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
        component: () => import('@/views/setting/account/index.vue')
      }
    ]
  }
]