<template>
  <n-list>
    <n-list-item>
      <n-thing title="锁屏密码" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px" v-if="isLockPwdExist">
            <span class="thing-text" >还未设置锁屏密码</span>
            <n-button text type="primary" @click="modalOpen">设置</n-button>
          </n-space>
          <n-space size="small" style="margin-top: 4px" v-else>
            <span class="thing-text" >在这里修改锁屏密码</span>
            <n-button text type="primary" @click="modalOpen">修改</n-button>
          </n-space>
        </template>
      </n-thing>
    </n-list-item>

    <!-- 修改表单 -->
    <n-modal
      v-model:show="showModal"
      preset="card"
      style="width: 500px;"
      title="设置"
    >
      <n-form-item label="锁屏密码">
        <n-input 
          v-model:value="screenPwdValue" 
          type="password"
          show-password-on="click"
          placeholder="请输入您的密码" 
        />
        <n-button 
          style="width: 80px; margin-left: 10px;" 
          type="primary" 
          secondary
          @click="setLockPwd">设置</n-button>
      </n-form-item>
    </n-modal>
  </n-list>
</template>

<script setup>
import { useSettingStore } from '@/stores';
import { useMessage } from 'naive-ui';

const settingStore = useSettingStore();
const message = useMessage();

const showModal = ref(false);

// 表单值
// 锁屏密码
const lockPwd = ref('');

const isLockPwdExist = computed(() => {
  return settingStore.lockPwd ? false : true;
});


function modalOpen() {
  lockPwd.value = settingStore.lockPwd;
  showModal.value = true;
}

function setLockPwd() {
  if (lockPwd.value) {
    settingStore.lockPwd = lockPwd.value;
    showModal.value = false;
    message.success('锁屏密码设置成功!');
  } else {
    message.error('密码不能为空!');
  }
}
</script>

<style lang="scss" scoped>
.thing-text {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
</style>