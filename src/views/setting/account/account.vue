<template>
  <div class="account">
    <n-card :bordered="false">
      <n-tabs 
        type="line" 
        size="large" 
        v-model:value="tabsValue"
      >
        <n-tab-pane name="baseStting" tab="基本设置">
          <BaseSetting />
        </n-tab-pane>
        <n-tab-pane name="securitySetting" tab="安全设置">
          <SecuritySetting />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup>
import BaseSetting from './components/BaseSetting.vue';
import SecuritySetting from './components/SecuritySetting.vue';

const tabsValue = ref('baseStting');

if (history.state.tabsName) {
  tabsValue.value = history.state.tabsName;
}
</script>