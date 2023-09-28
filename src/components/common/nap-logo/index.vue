<template>
  <div class="nap-logo">
    <div class="nap-logo_icon">
      <img :src="src || defaultSrc" :alt="settingStore.title">
    </div>
    <div class="nap-logo_text" v-show="!settingStore.siderCollapsed">
      <span>{{ settingStore.title }}</span>
    </div>
  </div>
</template>

<script setup>
  import { useSettingStore } from '@/stores';

  const settingStore = useSettingStore();

  const props = defineProps({
    src: {
      type: String,
      default: ''
    }
  });
  const defaultSrc = computed(() => {
    return settingStore.logo;
  });
</script>

<style lang="scss" scoped>
  .nap-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    .nap-logo_icon {
      img {
        width: 50px;
      }
    }
    .nap-logo_text {
      text-transform: capitalize;
      font-size: 20px;
    }
  }
</style>