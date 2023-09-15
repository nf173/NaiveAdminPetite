<!--
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-10 09:49:14
 * @LastEditors: nanfs
 * @Description: 
-->
<template>
  <NConfigProvider
    style="overflow: hidden;"
    :theme="themeRef"
    :locale="locale"
    :date-locle="dateLocle">
    <AppProvider>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <ScreenLock v-if="userStore.isLock" />
          <component :is="Component" v-else></component>
        </transition>
      </router-view>
    </AppProvider>
  </NConfigProvider>
</template>

<script setup>
  import AppProvider from '@/components/Application/Application.vue';
  import ScreenLock from './views/lock/lock.vue';
  import { useSettingStore } from '@/stores/setting';
  import { useUserStore } from '@/stores/user';
  import { lightTheme, darkTheme, zhCN, dateZhCN } from 'naive-ui';

  const settingStore = useSettingStore();
  const userStore = useUserStore();

  // 主题
  const themeRef = computed(() => {
    return settingStore.theme === 'light' ? lightTheme : darkTheme;
  });

  // 语言
  const locale = computed(() => {
    return settingStore.language === 'zh' ? zhCN : null
  });
  
  // 日期语言
  const dateLocle = computed(() => {
    return settingStore.language === 'zh' ? dateZhCN : null
  });
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all .8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

