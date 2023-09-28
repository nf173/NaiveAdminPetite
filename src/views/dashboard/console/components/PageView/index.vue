<template>
  <n-spin :show="show">
    <ChartCard title="访问量" :options="options" />
  </n-spin>
</template>

<script setup>
  import ChartCard from '@/components/business/chart-card/index.vue';
  import { usePageView } from '@/hooks';

  const show = ref(false);

  const { options, initPageView } = usePageView();

  onMounted(async () => {
    show.value = true;
    await initPageView(() => {
      show.value = false;
    });
  })
</script>