/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-11 00:03:24
 * @LastEditors: nanfs
 * @Description: 
 */

import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './modules/guards';

// 引入路由模块
import root from './modules/root';
import login from './modules/login';

import dashboard from './modules/dashboard';
import setting from './modules/setting';
import player from './modules/player';
import system from './modules/system';
import backup from './modules/backup';
import log from './modules/log';
import servers from './modules/servers';
import help from './modules/help';
import error from './modules/error';

/* 菜单栏路由 */
// 固定路由菜单
export const fixedRoutes = [
  ...dashboard,
  ...setting,
  ...player,
  ...backup,
  ...log,
  ...servers,
  ...system,
  ...help,
  ...error,
];
// 动态路由菜单
export const asyncRoutes = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...root,
    ...login,
    ...fixedRoutes
  ],
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

export function setupRouter(app) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router
