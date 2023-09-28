const asyncRoutes = [
  {
    path: '/management',
    name: 'management',
    redirect: '/management/user',
    meta: {
      title: '系统管理',
      icon: ''
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'user',
        name: 'management_user',
        meta: {
          title: '用户管理',
          icon: ''
        },
        component: () => import('@/views/management/user/index.vue'),
      },
      {
        path: 'role',
        name: 'management_role',
        meta: {
          title: '角色管理',
          icon: ''
        },
        component: () => import('@/views/management/role/index.vue'),
      }
    ]
  },
];

const apis = [
  {
    url: '/api/routes',
    timeout: 200,
    method: 'get',
    response: () => {
      return {
          code: 200,
          msg: '',
          data: {
            routes: asyncRoutes
          }
        }
    }
  },
];

export default apis;