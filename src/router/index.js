import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './guards';

// 引入路由模块
import root from './modules/root';
import login from './modules/login';
import dashboard from './modules/dashboard';
import setting from './modules/setting';
import document from './modules/document';
// import error from './modules/error';

// 固定路由
export const fixedRoutes = [
  ...root,
  ...login,
  ...dashboard,
  ...setting,
  ...document,
];
// 动态路由
export const asyncRoutes = [];

const routes = [
  ...fixedRoutes,
  ...asyncRoutes 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: fixedRoutes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});


/**
 * @method 挂载路由
 * @param {*} app 站点实例
 */
export function setupRouter(app) {
  app.use(router);
  createRouterGuards(router);
}

export default router;
