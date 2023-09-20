<template>
  <!-- Logo组件 -->
  <div class="logo" :class="mode==='horizontal' ? 'horizontal' : 'vertical'">
    <img
      class="logo-img"
      :class="{ 'mr-2': !collapsed }"
      :src="websiteConfig.logo" 
      :alt="websiteConfig.loginDesc"
      :style="{ height: iconSize }"
    />
    <h2 
      class="title"
      v-show="!collapsed"
      :style="{ fontSize: textSize }"
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
  },
  mode: {
    type: String,
    default: 'horizontal'
  },
  textSize: { 
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: ''
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
    &.vertical {
      height: auto;
      flex-direction: column;
    }

    .mr-2 {
      margin-right: 0.5em;
    }

    .logo-img {
      width: auto;
      height: 32px;
    }

    .title {
      margin: 0;
      font-size: 14px;
      font-weight: 550;
    }
  }
</style>