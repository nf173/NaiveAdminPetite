export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
]