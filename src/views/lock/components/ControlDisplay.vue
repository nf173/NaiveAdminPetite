<template>
  <div class="control-display">
    <n-avatar round :src="userStore.avatar" :size="100">
      <span style="font-size: 40px">N</span>
    </n-avatar>
    <span
      class="username" 
      style="margin: 15px 0; 
      font-size: 28px; 
      color: #fff;"
    >
      {{ userStore.nickname || userStore.username }}
    </span>
    <n-input 
      v-model:value="password"
      type="password"
      class="psw-input"
      placeholder="请输入锁屏密码"
      :maxlength="8"
    />
    <div class="tips" justify="space-between">
      <span @click="handleBack">返回</span>
      <span @click="handleRelanding">重新登录</span>
      <span @click="handleEnter">进入系统</span>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/user';
  import { useMessage } from 'naive-ui';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const userStore = useUserStore();
  const message = useMessage();
  const emit = defineEmits(['back']);

  const password = ref('');

  function handleEnter() {
    if (password.value === userStore.lockPwd) {
      message.success('屏幕解锁, 正在进入系统~');

      setTimeout(() => {
        userStore.setIsLock(false);
      }, 500);
    } else {
      message.error('密码错误');
    }
  }

  /* 重新登录 */
  function handleRelanding() {
    userStore.logout();
    router.push('/login');
    userStore.setIsLock(false);
  }

  function handleBack() {
    emit('back');
  }
</script>

<style lang="scss" scoped>
.control-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .psw-input {
    width: 240px;
    text-align: center;
  }
  .tips {
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