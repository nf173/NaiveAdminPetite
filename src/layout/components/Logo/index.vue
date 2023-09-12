<template>
  <!-- Logo组件 -->
  <div class="logo">
    <img
      class="logo-img" 
      :class="{ 'mr-2': !collapsed }"
      :src="websiteConfig.logo" 
      :alt="websiteConfig.loginDesc" 
    />
    <h2 
      class="title"
      v-show="!collapsed"
    >
      {{ websiteConfig.title }}
    </h2>
  </div>
</template>

<script setup>
import { websiteConfig } from '@/config/website.config';

const props = defineProps({
  collapsed: {
    type: Boolean
  }
})
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    white-space: nowrap;

    .mr-2 {
      margin-right: 0.5em;
    }

    .logo-img {
      width: auto;
      height: 32px;
    }

    .title {
      margin: 0;
      font-size: 18px;
      font-weight: 550;
    }
  }
</style>