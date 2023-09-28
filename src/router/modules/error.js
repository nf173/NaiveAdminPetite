export default [
  {
    path: '/error',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: true
    },
    children: [
      {
        path: '403',
        name: 'error-forbidden',
        hidden: true,
        component: () => import('@/views/error/index.vue'),
        meta: { title: '403' },
      },
      {
        path: '500',
        name: 'error-server-error',
        hidden: true,
        component: () => import('@/views/error/index.vue'),
        meta: { title: '500' },
      },
      {
        path: '/:pathMatch(.*)',
        name: 'error-not-found',
        hidden: true,
        component: () => import('@/views/error/index.vue'),
        meta: { title: '404' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error',
    hidden: true
  },
]