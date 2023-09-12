import { defineStore } from 'pinia';
import { ref } from 'vue';

// 黑名单：不需要出现在标签页中的路由
const blackList = ['login'];

export const useTabsStore = defineStore('tabs', () => {
  // 标签页列表
  const tabsList = ref([]);

  /**
   * @description: 保留固定路由
   * @return {*}
   */  
  const retainAffixRoute = (list) => {
    return list.filter((item) => item?.meta?.affix ?? false);
  }

  /**
   * @description: 初始化标签页
   * @return {*}
   */  
  const initTabs = (routes) => {
    tabsList.value = retainAffixRoute(routes);
  }

  /**
   * @description: 添加标签页
   * @return {*}
   */  
  const addTab = (route) => {
    // 添加标签页
    if (blackList.includes(route.name)) return false;
    // 是否存在该标签页
    const isExists = tabsList.value.some((item) => item.fullPath === route.fullPath);
    if (!isExists) tabsList.value.push(route);
    return true;
  }

  /**
   * @description: 移除当前
   * @return {*}
   */  
  const removeTab = (currentRoute) => {
    const index = tabsList.value.findIndex((item) => item.fullPath == currentRoute.fullPath);
    tabsList.value.splice(index, 1);
  }

  /**
   * @description: 移除其他
   * @return {*}
   */  
  const removeOtherTab = (currentRoute) => {
    tabsList.value = tabsList.value.filter(
      (item) => item.fullPath == currentRoute.fullPath || (item?.meta?.affix ?? false)
    );
  }

  /**
   * @description: 移除全部
   * @return {*}
   */  
  const removeAllTabs = () => {
    tabsList.value = retainAffixRoute(tabsList.value);
  }

  return {
    tabsList,
    addTab,
    initTabs,
    removeAllTabs,
    removeOtherTab,
    removeTab
  }
}, {
  persist: {
    enabled: true,
    key: 'TABS-ROUTES',
    paths: ['tabsList']
  }
})