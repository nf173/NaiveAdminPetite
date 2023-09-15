<!--
 * @Author: nanfs
 * @Date: 2023-09-05 00:00:00
 * @LastEditTime: 2023-09-09 13:09:25
 * @LastEditors: nanfs
 * @Description: 
-->

<template>
  <NMenu
    ref="menuRef"
    :options="menus"
    :mode="mode"
    :inverted="inverted"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    :expanded-keys="state.openKeys"
    :value="menuStore.activeKey"
    @update:value="clickMenuItem"
    @update:expanded-keys="expandedMenu"
  />
</template>

<script setup>
  import { nextTick, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useMenuStore } from '@/stores/menu';
  import { useSettingStore } from '@/stores/setting';

  // 当前路由
  const route = useRoute();
  const router = useRouter();

  // pinia
  const menuStore = useMenuStore();
  const settingStore = useSettingStore();

  const menuRef = ref(null);

  const props = defineProps({
    mode: {
      // 菜单模式: 侧边菜单 | 顶部菜单
      type: String,
      default: 'vertical',
    },
    collapsed: {
      // 是否菜单折叠
      type: Boolean
    }
  })

  // 菜单项
  const menus = ref([]);

  const matched = route.matched;
  const getOpenKeys = matched && matched.length ? matched.map((item) => item.name) : [];
  const state = reactive({
    openKeys: getOpenKeys,
  });

  // 是否反转主题色
  const inverted = computed(() => {
    return settingStore.navTheme === 'light' ? false : true;
  });

  /**
   * @description: 点击菜单项
   * @param {*} key 菜单项 keys
   * @param {*} item 菜单项内容
   * @return {*}
   */  
  function clickMenuItem(key, item) {
    router.push({ name: key });
  }

  // 监听页面切换
  watch(() => route.path, () => {
    menuStore.setActiveKey(route.name);
    nextTick(() => {
      menuRef.value?.showOption(route.name);
    })
  }, { immediate: true });

  /**
   * @description: 展开菜单
   * @param {*} keys 菜单项 keys 数组
   * @return {*}
   */  
  function expandedMenu(keys) {
    if (!keys) return;
    const latestOpenKey = keys.find((key) => state.openKeys.indexOf(key) === -1);
    
    // 是否在子路由
    const isExistChildren = findChildrenLen(latestOpenKey);
    state.openKeys = isExistChildren ? (latestOpenKey ? [latestOpenKey] : []) : keys;
  }

  //查找是否存在子路由
  function findChildrenLen(key) {
    if (!key) return false;
    const subRouteChildren = [];
    for (const { children, key } of unref(menus)) {
      if (children && children.length) {
        subRouteChildren.push(key);
      }
    }
    return subRouteChildren.includes(key);
  }

  async function updateMenu() {
    // 获取菜单
    await menuStore.generateMenus();
    menus.value = menuStore.menus;
  }

  onMounted(async () => {
    await updateMenu();
  });

</script>

<style lang="scss" scoped>

</style>