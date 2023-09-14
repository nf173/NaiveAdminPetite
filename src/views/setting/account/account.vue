<!--
 * @Author: nanfs
 * @Date: 2023-09-10 22:55:58
 * @LastEditTime: 2023-09-11 23:08:17
 * @LastEditors: nanfs
 * @Description: 个人中心页面
-->
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
  tabsValue.value = history.state.tabsName
}
</script>