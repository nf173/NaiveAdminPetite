<template>
  <n-config-provider 
    :theme="getTheme" 
    :locale="getLocale"
    :date-locle="getDateLocle"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <slot name="default"></slot>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
  import { useSettingStore } from '@/stores';
  import { lightTheme, darkTheme, zhCN, dateZhCN } from 'naive-ui';

  const setting = useSettingStore();

  const getTheme = computed(() => {
    return setting.theme === 'light' ? lightTheme : darkTheme;
  });

  const getLocale = computed(() => {
    return setting.language === 'zh' ? zhCN : null;
  });

  const getDateLocle = computed(() => {
    return setting.language === 'zh' ? dateZhCN : null;
  });
</script>

<style lang="scss" scoped></style>