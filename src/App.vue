<template>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <screen-lock v-if="settingStore.locked" />
        <component :is="Component" v-else></component>
      </transition>
    </router-view>
  </AppProvider>
</template>

<script setup>
  import AppProvider from '@/components/common/app-provider/index.vue';
  import ScreenLock from '@/components/business/screen-lock/index.vue';
  import { useAuthStore, useSettingStore } from '@/stores';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const authStore = useAuthStore();
  const settingStore = useSettingStore();

  // token失效，自动跳转登录页
  watchEffect(() => {
    if (!authStore.token) {
      router.push('/login');
    }
  });
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";
</style>

