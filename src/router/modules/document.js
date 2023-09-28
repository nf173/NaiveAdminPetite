export default [
  {
    path: '/document',
    name: 'document',
    redirect: '/document/index',
    component: () => import('@/layout/index.vue'),
    meta: {
      root: true,
      title: '帮助文档',
      icon: 'help',
    },
    children: [
      {
        path: 'index',
        name: 'document_index',
        component: () => import('@/views/document/index.vue')
      }
    ]
  }
]