/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:39:49
 * @LastEditTime: 2023-09-10 23:51:08
 * @LastEditors: nanfs
 * @Description: 项目文档
 */

export default [
  {
    path: '/docs',
    name: 'docs',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'help',
      isRoot: true,
    },
    children: [
      {
        path: 'index',
        name: 'docs_index',
        meta: {
          title: '帮助文档'
        },
        component: () => import('@/views/docs/docs.vue')
      }
    ]
  }
]