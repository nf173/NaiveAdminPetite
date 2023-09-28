<template>
  <n-spin :show="show">
    <ChartCard title="在线时长排行" :options="options" :chart-height="350" />
  </n-spin>
</template>

<script setup>
  import ChartCard from '@/components/business/chart-card/index.vue';
  import { useTimeRank } from '@/hooks';

  const show = ref(false);
  const { options, initTimeRank } = useTimeRank(5);

  onMounted(async () => {
    show.value = true;

    await initTimeRank(() => {
      show.value = false;
    });
  })
</script>