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
      <n-tabs type="line" size="large">
        <n-tab-pane 
          name="baseStting" 
          tab="基本设置"
        >
          <n-form 
            ref="formRef"
            style="width: 400px;"
            :label-width="80"
            :model="formValue"
            :rules="rules"
          >
            <n-form-item label="昵称" path="nickname">
              <n-input v-model:value="formValue.nickname" placeholder="输入昵称" />
            </n-form-item>
            <n-form-item>
              <n-button
                secondary
                type="primary"
                :loading="isUpdating"
                :disabled="isDisabled"
                @click="updateClick"
              >更新基本信息</n-button>
            </n-form-item>
          </n-form>
        </n-tab-pane>
        <n-tab-pane name="saveStting" tab="安全设置" >
          <n-list>
            <n-list-item>
              <n-thing title="修改密码" content-style="margin-top: 10px;">
                <template #description>
                  <n-space size="small" style="margin-top: 4px">
                    <span class="thing-text">绑定手机和邮箱，并设置密码，帐号更安全</span>
                    <n-button type="primary" text>修改</n-button>
                  </n-space>
                </template>
              </n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="绑定手机" content-style="margin-top: 10px;">
                <template #description>
                  <n-space size="small" style="margin-top: 4px">
                    <span class="thing-text">已绑定手机号：+86189****4877</span>
                    <n-button type="primary" text>修改</n-button>
                  </n-space>
                </template>
              </n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="绑定邮箱" content-style="margin-top: 10px;">
                <template #description>
                  <n-space size="small" style="margin-top: 4px">
                    <span class="thing-text">已绑定邮箱：1272487263@qq.com</span>
                    <n-button text type="primary">修改</n-button>
                  </n-space>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '@/stores/modules/user';

const userStore = useUserStore();

const formValue = reactive({
  nickname: ''
});

const rules = reactive({
  nickname: {
    required: true,
    message: '请输入昵称',
    trigger: 'blur'
  }
});

const isUpdating = ref(false);
const isDisabled = computed(() => {
  return formValue.nickname ? false : true;
});

formValue.nickname = userStore.nickname;

function updateClick(e) {
  isUpdating.value = true;
  const timer = setTimeout(() => {
    isUpdating.value = false;
    clearTimeout(timer);
  }, 2000);
}
</script>

<style lang="scss" scoped>
.thing-text {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
</style>