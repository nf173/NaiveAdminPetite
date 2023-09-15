<template>
  <div class="login-layout">
    <div class="login-layout_content">
      <n-card 
        style="max-width: 1000px; border-radius: 16px;" 
        content-style="display: flex;"
      >
        <div class="panel-left">
          <img src="@/assets/images/Figure_01.png" alt="饥荒联机服务器后台">
        </div>
        <div class="panel-right">
          <div class="header">
            <div class="header-logo">
              <img class="icon" src="@/assets/images/logo.png" alt="饥荒联机服务器后台">
              <h1 class="title">{{ configStore.siteConfig.title }}</h1>
            </div>
            <div class="header-desc">{{ configStore.siteConfig.desc }}</div>
          </div>
          <slot></slot>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { useConfigStore } from '@/stores/config';

const configStore = useConfigStore();
</script>

<style lang="scss" scoped>
.login-layout {
  background: linear-gradient(-135deg,#c850c0,#4158d0);
  .login-layout_content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    min-height: 100vh;
    .panel-left {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      img {
        width: 90%;
        height: auto;
      }
    }
    .panel-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 55%;
      min-width: 350px;
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        .header-logo {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          .icon {
            width: 45px;
            box-shadow: var(--n-box-shadow);
          }
          .title {
            background: linear-gradient(92.06deg,#834a7d -17.9%,#834a7d 43.39%,#573144 99.4%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 24px;
            line-height: 1.25;
            font-weight: 500;
            margin-left: 10px;
          }
        }
        .header-desc {
          font-size: 14px;
          color: #808695;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>