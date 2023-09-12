<template>
  <n-drawer
    :show="show"
    class="setting-drawer"
    placement="right"
    :width="280"
    @update:show="e => $emit('update:show', e)"
  >
    <n-drawer-content
      closable
      :native-scrollbar="false"
    >
      <template #header>站点配置</template>
      <n-divider>系统主题</n-divider>
      <div class="drawer-item">
        <n-switch 
          size="large"
          checked-value="dark"
          unchecked-value="light"
          v-model:value="settingStore.theme"
        >
          <template #checked><SvgIcon name="daytime" size="18" /></template>
          <template #unchecked><SvgIcon name="night" size="18" color="#444" /></template>
        </n-switch>
      </div>
      <n-divider>主题色</n-divider>

      <n-divider>导航栏模式</n-divider>
      <div class="drawer-item">
        <n-switch 
          size="large"
          checked-value="dark"
          unchecked-value="light"
          v-model:value="settingStore.navTheme"
        />
      </div>

      <n-divider>导航栏风格</n-divider>

      <n-divider>多页标签</n-divider>
      <div class="drawer-item">
        <n-switch 
          size="large" 
          v-model:value="settingStore.isTabs"
        />
      </div>

      <n-divider>切换动画</n-divider>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { useSettingStore } from '@/stores/modules/setting';

const settingStore = useSettingStore();

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const navTheme = ref('');
</script>

<style lang="scss" scoped>
.setting-drawer {
  .drawer-item {
    display: flex;
    justify-content: center;
  }
}
</style>