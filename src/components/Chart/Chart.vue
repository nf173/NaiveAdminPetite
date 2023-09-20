<template>
  <n-card 
    hoverable
    class="chart-card" 
    size="small"
    :bordered="false"
    :title="title"
    :segmented="{
      content: true,
    }">
    <div
      ref="chartRef" 
      v-resize="handleDebounceResize" 
      :style="{ width: '100%', height: chartHeight+'px' }">
    </div>
  </n-card>
</template>

<script setup>
  import { useEchart } from '@/utils/useEchart';
  import { debounce } from '@/utils/debounce';

  const chartRef = ref(null);
  const { initCharts, resize, disposeInstance } = useEchart(chartRef);

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    // 图表配置项
    chartOptions: {
      type: Object,
      default: null
    },
    // 图表高度
    chartHeight: {  
      type: Number,
      default: 350
    }
  });

  function handleResize(size) {
    const resizeOpts = {
      animation: {
        duration: 200
      },
      ...size
    }
    resize(resizeOpts);
  }

  // 图标尺寸变化时添加防抖
  const handleDebounceResize = debounce(handleResize, 100);

  watch(
    () => props.chartOptions,
    () => {
      // 数据变动, 重新初始化图表
      initCharts(props.chartOptions);
    },
    { deep: true }
  )

  onMounted(() => {
    // 初始化实例
    initCharts(props.chartOptions);  
  })

  onUnmounted(() => {
    // 卸载实例
    disposeInstance();  
  })
</script>