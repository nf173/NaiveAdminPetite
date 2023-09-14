<!--
 * @Author: nanfs
 * @Date: 2023-09-06 17:30:24
 * @LastEditTime: 2023-09-11 22:56:09
 * @LastEditors: nanfs
 * @Description: 
-->
<template>
  <div class="page-main">
    <router-view v-slot="{ Component }">
      <transition :name="getToggleAnimation" mode="out-in">
        <keep-alive :include="getCacheRoutes">
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const routes = router.getRoutes();

  const getToggleAnimation = computed(() => {
    return 'transform';
  });

  const getCacheRoutes = computed(() => {
    let cacheRoutes = [];
    routes.forEach(route => {
      if(route.meta.cache) {
        const temp = route.path.split('/');
        cacheRoutes.push(temp[temp.length - 1]);
      }
    })
    return cacheRoutes;
  });

</script>

<style lang="scss" scoped>
.page-main {
  width: 100%;
  padding: 10px;

  // 淡入淡出
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  // 滑动
  .transform-enter-active,
  .transform-leave-active {
    transition: all 0.2s ease;
  }
  .transform-enter-from,
  .transform-leave-to {
    transform: translate(30px);
    opacity: 0;
  }

  .zoom-enter-active,
  .zoom-leave-active {
    transition: all 0.2s ease;
  }

  .zoom-enter-from {
    transform: scale(0.95);
    opacity: 1;
  }
  .zoom-leave-to {
    transform: scale(1.05);
    opacity: 0;
  }
}
</style>