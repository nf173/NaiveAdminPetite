<!--
 * @Author: nanfs
 * @Date: 2023-09-04 15:16:19
 * @LastEditTime: 2023-09-11 22:07:10
 * @LastEditors: nanfs
 * @Description: 
-->
<template>
  <n-layout class="layout" has-sider embedded>
    <!-- 侧边菜单 -->
    <n-layout-sider
      embedded
      show-trigger="bar"
      collapse-mode="width"
      class="layout-sider"
      :collapsed-width="64"
      :width="200"
      :inverted="inverted"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      v-if="!isTopNav"
    >
      <Logo :collapsed="collapsed" />
      <AsideMenu :collapsed="collapsed" />
    </n-layout-sider>

    <n-layout>
      <n-layout-header 
        style="box-shadow: 0 1px 4px #00152914; 
        z-index: 1; 
        position: relative;"
      >
        <PageHeader v-model:collapsed="collapsed" :is-top-nav="isTopNav" />
      </n-layout-header>

      <n-layout style="height: calc(100vh - 64px);" embedded>
        <!-- TabsView 标签栏 -->
        <TabsView v-if="settingStore.isTabs" />

        <n-layout-content
          embedded
          :native-scrollbar="false" 
        >
          <!-- PageMain 主区域 -->
          <PageMain />
          <n-back-top :right="100" />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup>
  import Logo from '@/components/Logo/index.vue';
  import AsideMenu from './components/Menu/index.vue';
  import PageHeader from './components/Header/index.vue';
  import PageMain from './components/Main/index.vue';
  import TabsView from './components/Tabs/index.vue';

  import { useSettingStore } from '@/stores/setting';

  const settingStore = useSettingStore();

  // 是否折叠侧边栏
  const collapsed = ref(false);
  // 侧边栏主题
  const inverted = computed(() => {
    return settingStore.navTheme === 'dark' ? true : false;
  });

  // 菜单模式
  const isTopNav = computed(() => {
    return settingStore.navMode === 'horizontal' ? true : false;
  });
</script>

<style lang="scss" scoped>
  .layout {
    .layout-sider {
      min-height: 100vh;
      box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
      position: relative;
      z-index: 13;
      transition: all 0.2s ease-in-out;
    }
  }
</style>