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
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script setup>
  import AppProvider from '@/components/Application/Application.vue';
  import { useSettingStore } from '@/stores/modules/setting';
  import { lightTheme, darkTheme, zhCN, dateZhCN } from 'naive-ui';

  const settingStore = useSettingStore();

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

