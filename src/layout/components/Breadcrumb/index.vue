<!--
 * @Author: nanfs
 * @Date: 2023-09-07 20:26:43
 * @LastEditTime: 2023-09-07 20:27:54
 * @LastEditors: nanfs
 * @Description: 
-->
<template>
  <n-breadcrumb>
    <template 
      v-for="routeItem in breadcrumbList"
      :key="routeItem.name === 'Redirect' ? void 0 : routeItem.name">
      <n-breadcrumb-item v-if="routeItem.meta.title">
        <n-dropdown 
          :options="routeItem.children"
          @select="dropdownSelect"
        >
          <div class="trigger">
            {{ routeItem.meta.title }}
          </div>
        </n-dropdown>
      </n-breadcrumb-item>
    </template>
  </n-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

// router
const route = useRoute();
const router = useRouter();

const breadcrumbList = computed(() => {
  return generator(route.matched);
});

// 生成导航菜单
const generator = (routerMap) => {
  return routerMap.map(item => {
    const currentMenu = {
      ...item,
      label: item.meta.title,
      key: item.name,
      disabled: item.path === '/',
    };
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      currentMenu.children = generator(item.children, currentMenu);
    }
    return currentMenu;
  })
}

const dropdownSelect = (key) => {
  router.push({ name: key });
}
</script>

<style lang="scss" scoped>

</style>