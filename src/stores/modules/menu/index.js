import { defineStore } from 'pinia';
import { fixedRoutes } from '@/router';
import { GetRoutes } from '@/api';
import { renderIcon } from '@/utils';
import { useAuthStore } from '@/stores';

export const useMenuStore = defineStore('menu', () => {
  const menu = ref([]);
  const authStore = useAuthStore();

  /**
   * @method 格式化路由表
   * @param {Array} routes - 路由表
   */
  function formatRoutes(sourceRoutes, targetRoutes) {
    sourceRoutes.forEach(route => {
      if(!route.meta.hidden) {
        const menuItem = {
          key: route.name,
          label: route.meta.title,
          icon: route.meta.icon ? renderIcon(route.meta?.icon, { size: 20 }) : null,
          disabled: route.meta.disabled
        };
        if(route.children) {
          if(route.meta.root) {
            menuItem.key = route.children[0].name;
            menuItem.children = null;
          } else {
            menuItem.children = [];
            formatRoutes(route.children, menuItem.children);
          }
        }
        targetRoutes.push(menuItem);
      }
    });
  }
  
  /**
   * @method 请求动态路由
   * @param {String} role - 角色权限
   */
  async function getAsyncRoutes(role) {
    return await GetRoutes({ role });
  }

  /**
   * @method 组合菜单
   * @param {*} 
   */
  async function generateMenu() {
    menu.value = [];
    const role = authStore.userInfo.role;
    await getAsyncRoutes(role).then(res => {
      const asyncRoutes = res.data.routes;
      // formatRoutes(asyncRoutes, menu);
    });
    formatRoutes(fixedRoutes, menu.value);
  }

  return {
    menu,
    generateMenu
  }
});