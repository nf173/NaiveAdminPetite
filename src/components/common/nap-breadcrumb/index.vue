<template>
  <n-breadcrumb>
    <template v-for="breadcrumb in breadcrumbList" :key="breadcrumb.name">
      <n-breadcrumb-item v-if="breadcrumb.meta.title">
        <n-dropdown :options="breadcrumb.children" @select="handleDpSelect">
          <div class="trigger">
            {{ breadcrumb.meta.title }}
          </div>
        </n-dropdown>
      </n-breadcrumb-item>
    </template>
  </n-breadcrumb>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const breadcrumbList = computed(() => {
    return generator(route.matched);
  });

  function generator(routerMap) {
    return routerMap.map(item => {
      const currentMenu = {
        ...item,
        label: item.meta.title,
        key: item.name,
        disabled: item.path === '/',
      };
      // 是否有子菜单，并递归处理
      if (item.children && item.meta.root !== true) {
        currentMenu.children = generator(item.children);
      } else {
        delete currentMenu.children;
      }
      return currentMenu;
    })
  }

  function handleDpSelect(key) {
    router.push({ name: key });
  }
</script>

<style lang="scss" scoped>

</style>