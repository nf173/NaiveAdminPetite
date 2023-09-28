<template>
  <div class="login-layout">
    <n-card class="card-panel">
      <div class="panel-header">
        <div class="header-title">
          <img 
            class="icon"
            v-inching="2"
            :src="settingStore.logo" 
            :alt="settingStore.title"
          />
          <h1 class="text">{{ settingStore.title }}</h1>
        </div>
        <div class="header-desc">{{ settingStore.description }}</div>
      </div>
      <div class="panel-main">
        <Transition name="fade-slide" mode="out-in">
          <LoginPwd v-if="authStore.mode==='pwd'" />
          <LoginCode v-else-if="authStore.mode==='code'" />
          <RegisterUser v-else-if="authStore.mode === 'register'" />
        </Transition>
      </div>
    </n-card>
  </div>
</template>

<script setup>
  import LoginPwd from './components/login-pwd/index.vue';
  import LoginCode from './components/login-code/index.vue';
  import RegisterUser from './components/register-user/index.vue';
  import { useAuthStore, useSettingStore } from '@/stores';

  const authStore = useAuthStore();
  const settingStore = useSettingStore();
</script>

<style scoped lang="scss">
  .login-layout {
    display: flex;
    min-height: 100vh;
    background: linear-gradient(-135deg,#c850c0,#4158d0);
    .card-panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: auto;
      margin: auto;
      padding: 20px 10px 10px;
      border-radius: 16px;
      
      .panel-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        .header-title {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          .icon {
            width: 45px;
            filter: drop-shadow(-4px 6px 2px rgba(116, 116, 116, 0.35));
            transition: transform .1s linear;
          }
          .text {
            background: linear-gradient(92.06deg,#834a7d -17.9%,#834a7d 43.39%,#573144 99.4%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 28px;
            line-height: 1.25;
            font-weight: 500;
            margin-left: 5px;
          }
        }
        .header-desc {
          font-size: 14px;
          color: #808695;
        }
      }
      .panel-main {
        width: 380px;
      }
    }
  }
</style>