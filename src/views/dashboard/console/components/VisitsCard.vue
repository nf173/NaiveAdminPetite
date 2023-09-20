<template>
  <n-spin :show="show">
    <ChartCard 
      title="访问量" 
      :chart-options="options" 
    />
  </n-spin>
</template>

<script setup>
import ChartCard from '@/components/Chart/Chart.vue';
import { GetVisits } from '@/api/modules/server';
import { reactive } from 'vue';

const xAxisData = reactive([]);
const yAxisData = reactive([]);
const show = ref(false);

// Echart配置
const options = reactive({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        width: 1,
        color: '#019680',
      },
    },
  },
  xAxis: {
    type: 'category',
    data: xAxisData,
  },
  yAxis: {
    type: 'value'
  },
  grid: { left: '20px', right: '20px', top: '40px', bottom: '40px', containLabel: true },
  series: [
    {
      data: yAxisData,
      type: 'line',
    }
  ],
})

onMounted(async () => {
  show.value = true;
  await GetVisits().then(res => {
    Object.entries(res.data.result).forEach((item) => {
      xAxisData.push(item[0]);
      yAxisData.push(item[1]);
      show.value = false;
    });
  });
})
</script>