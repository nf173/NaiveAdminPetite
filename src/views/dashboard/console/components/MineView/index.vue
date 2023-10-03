<template>
  <n-card 
    hoverable
    class="mine-card" 
    content-style="
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;"
    :bordered="false"
  >
    <Logo mode="vertical" textSize="24px" iconSize="80px" />
    <div class="desc">{{ desc }}</div>
    <n-button 
      round 
      secondary 
      tag="a"
      href="https://github.com/nf173/NaiveAdminPetite"
      target="_blank"
      type="primary" 
      style="margin: 20px 0;"
    >
      去Github看看
    </n-button>
    <n-space justify="center">
      <n-tag :bordered="false" type="success">超高颜值</n-tag>
      <n-tag :bordered="false" type="info">持续更新</n-tag>
      <n-tag :bordered="false" type="warning">超高颜值</n-tag>
    </n-space>
  </n-card>
</template>

<script setup>
  import Logo from '@/components/common/nap-logo/index.vue';

  const props = defineProps({
    desc: {
      type: String,
      default: '一款轻量级、高颜值的 Naive UI 后台管理面板'
    }
  });
</script>

<style scoped lang="scss">
.mine-card {
  text-align: center;
  padding: 20px 0;
  height: 100%;
}
</style>