/*
 * @Author: nanfs
 * @Date: 2023-09-06 23:06:58
 * @LastEditTime: 2023-09-10 22:38:36
 * @LastEditors: nanfs
 * @Description: 错误页面路由
 */
const Error = () => import('@/views/error/index.vue');

export default [
  {
    path: '/error',
    hidden: true,
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '403',
        name: 'error-forbidden',
        hidden: true,
        component: Error,
        meta: { title: '403' },
      },
      {
        path: '500',
        name: 'error-server-error',
        hidden: true,
        component: Error,
        meta: { title: '500' },
      },
      {
        path: ':pathMatch(.*)',
        name: 'error-not-found',
        hidden: true,
        component: Error,
        meta: { title: '404' },
      }
    ],
  },
  {
    path: '/:pathMatch(.*)',
    component: Error,
    hidden: true,
    beforeEnter(to) {
      console.log(to);
      // return { path: to.path, replace: true };
    },
  },
]