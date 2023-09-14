/*
 * @Author: nanfs
 * @Date: 2023-09-05 12:24:06
 * @LastEditTime: 2023-09-11 10:39:16
 * @LastEditors: nanfs
 * @Description: 
 */
import { defineStore } from 'pinia';
import { fixedRoutes } from '@/router/index';
import { GetMenus } from '@/api/modules/menu';
import { message } from '@/utils/modules/provider';
import { renderIcon } from '@/utils/modules/renderer';
import { useUserStore } from '@/stores/modules/user';

import router from '../../router/index';
import Layout from '@/layout/index.vue';

export const useMenuStore = defineStore('menu', () => {
  const userStore = useUserStore();

  // 菜单列表
  const menus = ref([]);
  // 当前激活的菜单key
  const activeKey = ref('');

  /**
   * @description: 格式化路由表
   * @param {Array} routes
   * @param {Array} target
   * @return {Array}
   */
  const _transformRoutes = (routes, target) => {
    routes.forEach(route => {
      if(!route.hidden) {
        const menu = {
          key: route.name,
          label: route.meta.title,
          icon: route.meta.icon ? renderIcon(route.meta.icon, { size: '20' }) : null,
          disabled: route.meta.disabled,
        }
        if(route.children) {
          if(route.meta.isRoot) {
            menu.key = route.children[0].name;
            menu.label = route.children[0].meta.title;
            menu.children = null;
          } else {
            menu.children = [];
            _transformRoutes(route.children, menu.children);
          }
        }
        // console.log(menu);
        target.push(menu);
      }
    })
  }

  /**
   * @description: 格式化动态路由表
   * @param {Array} asyncRoutes
   * @param {Array} targetRoutes
   * @return {Array}
   */
  const modules = import.meta.glob('@/views/**/*.vue');
  const _transformAsyncRoutes = (asyncRoutes, targetRoutes) => {
    if(!asyncRoutes) return [];
    asyncRoutes.forEach(route => {
      if(!route.hidden) {
        const tempRoutes = {
          ...route,
          component: route.component === 'Layout' ? Layout : modules[`/src${route.component}`]
        };
        if(route.children) {
          tempRoutes.children = [];
          _transformAsyncRoutes(route.children, tempRoutes.children);
        }
        targetRoutes.push(tempRoutes);
      }
    })
  }

  const getFormatMenus = (routes) => {
    const menus = [];
    _transformRoutes(routes, menus);
    return menus;
  }

  /**
   * @description: 获取动态路由，拼接静态路由，组合生成菜单
   * @return {*}
   */
  const generateMenus = async () => {
    // // 方式一
    // 只有固定菜单
    // const menus = getFormatMenus([...fixedRoutes]);
    // setMenus(menus);
    
    // // 方式二
    // 固定菜单 + 权限菜单
    // let menus = [];
    await GetMenus({
      username: userStore.username
    }).then(res => {
      const { code, msg, result } = res.data;

      const asyncNativeRoutes = [];

      if(code === 200) {
        _transformAsyncRoutes(result, asyncNativeRoutes);
        if(asyncNativeRoutes.length > 0) {
          // 遍历添加动态路由
          asyncNativeRoutes.forEach(route => router.addRoute(route))
        };
      } else if(code === 401) {
        message.error(msg);
        router.push('/login');
      } else {
        message.error('获取权限菜单失败');
      }
      // 获取最终菜单
      let menus = getFormatMenus([...fixedRoutes, ...asyncNativeRoutes]);
      setMenus(menus);
    })
  }

  const setMenus = data => {
    menus.value = data;
  }

  const setActiveKey = key => {
    activeKey.value = key;
  }

  return {
    menus,
    activeKey,
    setMenus,
    setActiveKey,
    generateMenus
  }
})