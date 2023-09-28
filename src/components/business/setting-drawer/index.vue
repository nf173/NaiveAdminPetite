<template>
  <n-drawer 
    class="setting-drawer" 
    placement="right"
    v-model:show="settingStore.settingDrawerShow" 
    :width="280"
  >
    <n-drawer-content closable :native-scrollbar="false">
      <template #header>站点配置</template>
      <n-divider>系统主题</n-divider>
      <div class="drawer-item">
        <n-switch 
          size="large" 
          checked-value="dark" 
          unchecked-value="light" 
          v-model:value="settingStore.theme"
        >
          <template #checked>
            <SvgIcon name="daytime" size="18" />
          </template>
          <template #unchecked>
            <SvgIcon name="night" size="18" color="#444" />
          </template>
        </n-switch>
      </div>
      <n-divider>主题色</n-divider>

      <n-divider>导航栏模式</n-divider>
      <div class="drawer-item">
        <n-switch 
          size="large" 
          checked-value="horizontal" 
          unchecked-value="vertical"
          v-model:value="settingStore.menuMode" 
        />
      </div>

      <n-divider>导航栏风格</n-divider>
      <div class="drawer-item">
        <n-switch 
          size="large"  
          v-model:value="settingStore.siderInverted" 
        />
      </div>

      <n-divider>多页标签</n-divider>
      <div class="drawer-item">
        <n-switch size="large" v-model:value="settingStore.tabsShow" />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
  import { useSettingStore } from '@/stores';

  const settingStore = useSettingStore();
</script>

<style lang="scss" scoped>
  .setting-drawer {
    .drawer-item {
      display: flex;
      justify-content: center;
    }
  }
</style>