<template>
  <n-menu 
    :value="activeKey"
    :options="menuStore.menu" 
    :expanded-keys="openKeys" 
    @update:value="handleSelected" 
    @update:expanded-keys="handleExpanded"
  />
</template>

<script setup>
  import { useMenuStore } from '@/stores';
  import { useRouter, useRoute } from 'vue-router';

  const menuStore = useMenuStore();
  const router = useRouter();
  const route = useRoute();

  const activeKey = ref('');
  const openKeys = ref([]);

  function handleSelected(key) {
    router.push({ name: key });
  }

  function handleExpanded(keys) {
    if (!keys) return;
    const latestOpenKey = keys.find((key) => openKeys.value.indexOf(key) === -1);

    // 是否在子路由
    const isExistChildren = findChildrenLen(latestOpenKey);
    openKeys.value = isExistChildren ? (latestOpenKey ? [latestOpenKey] : []) : keys;
  }

  function findChildrenLen(key) {
    if (!key) return false;
    const subRouteChildren = [];
    for (const { children, key } of unref(menuStore.menu)) {
      if (children && children.length) {
        subRouteChildren.push(key);
      }
    }
    return subRouteChildren.includes(key);
  }

  watch(
    () => router.currentRoute.value,
    () => {
      activeKey.value = router.currentRoute.value.name;
    }
  )

  onMounted(() => {
    activeKey.value = router.currentRoute.value.name;
    const getOpenKeys = route.matched && route.matched.length ? route.matched.map((item) => item.name) : [];
    openKeys.value = getOpenKeys;

    menuStore.generateMenu();
  });
</script>

<style lang="scss" scoped>

</style>