/*
 * @Author: nanfs
 * @Date: 2023-09-06 12:42:38
 * @LastEditTime: 2023-09-07 01:54:38
 * @LastEditors: nanfs
 * @Description: 路由守卫
 */

import { loadingBar } from '@/utils/provider';
import { useUserStore } from '@/stores/user';
import { useMenuStore } from '@/stores/menu';

export const createRouterGuards = (router) => {
  // 路由前置守卫
  router.beforeEach(async (to, from, next) => {
    // 开启加载条
    loadingBar.start();

    const menuStore = useMenuStore();
    const userStore = useUserStore();
    
    // 判断是否登录
    if(!userStore.token && to.name !== 'login') {
      next({ name: 'login' });
      return;
    }

    const hasRoute = router.hasRoute(to.name);
    if(!hasRoute) {
      await menuStore.generateMenus();
      next(to);
      return;
    }

    next();
  });

  // 路由后置守卫
  router.afterEach((to, from) => {
    loadingBar.finish();
  });
}