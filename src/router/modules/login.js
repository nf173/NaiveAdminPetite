export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: true,
      title: '登录'
    },
    component: () => import('@/views/login/index.vue'),
  },
]