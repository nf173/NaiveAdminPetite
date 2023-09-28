<template>
  <n-layout has-sider class="layout" :inverted="settingStore.menuInverted">
    <n-layout-sider
      class="layout-sider"
      show-trigger="bar"
      collapse-mode="width"
      v-model:collapsed="settingStore.siderCollapsed"
      :native-scrollbar="false"
      :inverted="settingStore.siderInverted"
      :collapsed-width="sider.collapsedWidth"
      :width="sider.width"
    >
      <NapLogo />
      <NapMenu 
        v-model:collapsed="settingStore.siderCollapsed" 
        :inverted="settingStore.siderInverted"
        :collapsed-width="sider.collapsedWidth"
      />
    </n-layout-sider>

    <n-layout-content class="layout-content">
      <n-layout-header class="layout-content_header" :inverted="settingStore.topInverted">
        <PageHeader />
      </n-layout-header>
      
      <n-layout-content class="layout-content_main" embedded :native-scrollbar="false">
        <PageMain />
      </n-layout-content>
    </n-layout-content>

    <setting-drawer></setting-drawer>
  </n-layout>
</template>

<script setup>
  import NapLogo from '@/components/common/nap-logo/index.vue';
  import NapMenu from '@/components/common/nap-menu/index.vue';
  import SettingDrawer from '@/components/business/setting-drawer/index.vue';
  import PageHeader from './component/page-header/index.vue';
  import PageMain from './component/page-main/index.vue';
  import { useSettingStore } from '@/stores';

  const settingStore = useSettingStore();

  const sider = reactive({
    collapsedWidth: 64,
    width: 270,
  });
</script>

<style lang="scss" scoped>
  .layout {
    .layout-sider {
      height: 100vh;
    }
    .layout-content {
      position: relative;
      .layout-content_header {
        z-index: 9;
        position: absolute;
        left: 0;
        top: 0;
      }
      .layout-content_main {
        margin-top: 64px;
        height: calc(100vh - 64px);
      }
    }
  }
</style>