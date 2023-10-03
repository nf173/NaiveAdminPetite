import { Window } from '@/hooks';
import { useAuthStore, useSettingStore } from '@/stores';

export const createRouterGuards = (router) => {
  router.beforeEach(async (to, from, next) => {
    Window.loadingBar.start();

    const authStore = useAuthStore();
    const settingStore = useSettingStore();

    // 判断是否登录
    if(!authStore.token && to.name !== 'login') {
      next({ name: 'login' });
      return;
    }

    document.title = to.meta.title + ' - ' + settingStore.title;

    next();
  });

  router.afterEach((to, from) => {
    const authStore = useAuthStore();
    
    if(from.name === 'login' && to.name !== 'login') {
      Window.notification.success({
        title: '登录成功',
        content: `欢迎回来，${ authStore.userInfo.username }`,
        duration: 2000
      });
    }
    
    Window.loadingBar.finish();
  });
}
