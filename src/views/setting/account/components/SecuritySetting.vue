<template>
  <n-list>
    <n-list-item>
      <n-thing title="修改密码" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <span class="thing-text">绑定手机和邮箱，并设置密码，帐号更安全</span>
            <n-button type="primary" text @click="handleClick">修改</n-button>
          </n-space>
        </template>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="绑定手机" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <span class="thing-text">已绑定手机号：+86{{ userPhone }}</span>
            <n-button type="primary" text @click="handleClick">修改</n-button>
          </n-space>
        </template>
      </n-thing>
    </n-list-item>
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
import { useUserStore } from '@/stores/user';
import { useMessage } from 'naive-ui';

const userStore = useUserStore();
const message = useMessage();

const showModal = ref(false);

// 表单值
// 锁屏密码
const screenPwdValue = ref('');

const userPhone = computed(() => {
  const phone_arr = userStore.phone.split('');
  phone_arr.splice(3, 4, '*', '*', '*', '*');
  return phone_arr.join('');
});

const isLockPwdExist = computed(() => {
  return userStore.lockPwd ? false : true;
});

function handleClick() {
  message.warning('暂不可修改');
}

function modalOpen() {
  screenPwdValue.value = userStore.lockPwd;
  showModal.value = true;
}

function setLockPwd() {
  if (screenPwdValue.value) {
    userStore.setLockPwd(screenPwdValue.value);
    showModal.value = false;
    message.success('锁屏密码设置成功!');
  } else {
    message.error('密码不能为空!');
  }
}

onMounted(() => {
  
})
</script>

<style lang="scss" scoped>
.thing-text {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
</style>