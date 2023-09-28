<template>
  <div class="lock-control">
    <n-avatar round :size="100">
      <span style="font-size: 42px;">{{ authStore.userInfo?.username[0] }}</span>
    </n-avatar>
    <div
      class="username" 
      style="
        margin: 15px 0; 
        font-size: 28px; 
        color: #fff;
      "
    >
      {{ authStore.userInfo?.nickname || authStore.userInfo?.username }}
    </div>
    <n-input 
      v-model:value="lockPwd"
      type="password"
      class="pwd-input"
      placeholder="请输入锁屏密码"
      :maxlength="8"
    />
    <div class="btns" justify="space-between">
      <span @click="handleBackClick">返回</span>
      <span @click="handleRelandingClick">重新登录</span>
      <span @click="handleEnterClick">进入系统</span>
    </div>
  </div>
</template>

<script setup>
  import { useAuthStore } from '@/stores';
  import { useMessage } from 'naive-ui';

  const authStore = useAuthStore();
  const message = useMessage();
  const emit = defineEmits(['back']);

  const lockPwd = ref('');

  function handleBackClick() {
    emit('back');
  }
  function handleRelandingClick() {}
  function handleEnterClick() {
    if (lockPwd.value === authStore.lockPwd) {
      message.success('屏幕解锁, 正在进入系统~');

      setTimeout(() => {
        authStore.locked = false;
      }, 500);
    } else {
      message.error('密码错误');
    }
  }
</script>

<style lang="scss" scoped>
  .lock-control {
    z-index: 2;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .pwd-input {
      width: 240px;
      text-align: center;
    }

    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin-top: 20px;
      span {
        cursor: pointer;
        color: #fff;
        transition: color .2s ease;
        &:hover {
          color: #ffffffbf;
        }
      }
    }
  }
</style>