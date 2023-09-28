<template>
  <div class="page-main">
    <router-view v-slot="{ Component }">
      <transition :name="getTransition" mode="out-in">
        <keep-alive :include="getCacheRoutes">
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
    <n-back-top :right="100" :bottom="80" />
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useSettingStore } from '@/stores';

  const router = useRouter();
  const settingStore = useSettingStore();
  
  // 获取动画模式
  const getTransition = computed(() => {
    return settingStore.activeAnimation;
  });
  
  // 获取缓存路由
  const getCacheRoutes = computed(() => {
    let cacheRoutes = router.getRoutes();
    cacheRoutes.forEach(route => {
      if (route.meta.cache) {
        const temp = route.path.split('/');
        cacheRoutes.push(temp[temp.length - 1]);
      }
    })
    return cacheRoutes;
  });
</script>

<style lang="scss" scoped>
  .page-main {
    padding: 10px;
  }
</style>