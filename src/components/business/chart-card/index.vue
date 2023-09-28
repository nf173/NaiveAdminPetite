<template>
  <n-card 
    hoverable
    class="chart-card" 
    size="small"
    :bordered="false"
    :title="title"
    :segmented="{
        content: true,
      }"
    >
    <div 
      ref="chartRef"
      v-resize="handleDebounceResize" 
      :style="{ width: chartWidth, height: chartHeight + 'px' }" 
    />
  </n-card>
</template>

<script setup>
  import { useEchart } from '@/hooks';
  import { debounce } from '@/utils';

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    // 图表配置
    options: {
      type: Object,
      default: null
    },
    // 图表宽度
    chartWidth: {
      type: [String, Number],
      default: '100%'
    },
    // 图表高度
    chartHeight: {
      type: [String, Number],
      default: 350
    }
  });

  const chartRef = ref(null);
  const { initCharts, resize, disposeInstance } = useEchart(chartRef);

  function handleResize(size) {
    const resizeOpts = {
      animation: {
        duration: 200
      },
      ...size
    }
    resize(resizeOpts);
  }

  // 图表尺寸变化时的防抖
  const handleDebounceResize = debounce(handleResize, 100);

  watch(
    () => props.options,
    () => {
      // 数据变动, 重新初始化图表
      initCharts(props.options);
    },
    { deep: true }
  );

  onMounted(() => {
    // 初始化图表实例
    initCharts(props.options);
  })

  onUnmounted(() => {
    // 卸载实例
    disposeInstance();
  })
</script>

<style lang="scss" scoped>

</style>