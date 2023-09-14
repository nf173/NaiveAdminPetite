<!--
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:47
 * @LastEditTime: 2023-09-10 09:49:14
 * @LastEditors: nanfs
 * @Description: 
-->
<template>
  <NConfigProvider 
    :theme="themeRef"
    :locale="locale"
    :date-locle="dateLocle">
    <AppProvider>
      <ScreenLock v-if="userStore.isLock" />
      <RouterView v-else />
    </AppProvider>
  </NConfigProvider>
</template>

<script setup>
  import AppProvider from '@/components/Application/Application.vue';
  import ScreenLock from './views/lock/lock.vue';
  import { useSettingStore } from '@/stores/modules/setting';
  import { useUserStore } from '@/stores/modules/user';
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

