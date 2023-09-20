<template>
  <n-spin :show="show">
    <ChartCard 
      title="在线时长排行" 
      :chart-options="options" 
      :chartHeight="350"
    />
  </n-spin>
</template>

<script setup>
import ChartCard from '@/components/Chart/Chart.vue';
import { random } from 'lodash';
import { reactive } from 'vue';
import { GetRank } from '@/api/modules/server';

function getRandomColor() {
  const color = [
    '#f6e58d',
    '#ffbe76',
    '#ff7979',
    '#badc58',
    '#dff9fb',
    '#f9ca24',
    '#f0932b',
    '#eb4d4b',
    '#6ab04c',
    '#7ed6df',
    '#e056fd',
    '#686de0',
    '#30336b',
    '#95afc0',
    '#22a6b3',
    '#be2edd',
    '#4834d4',
    '#130f40',
    '#535c68'
  ];
  return color[random(19)];
}

const xAxisData = reactive([]);
const yAxisData = reactive([]);
const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        width: 1,
        color: '#019680',
      },
    },
  },
  grid: {
    left: '20px',
    right: '20px',
    top: '40px',
    bottom: '40px',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: yAxisData,
    inverse: true,
    maxInterval: 200,
    axisLabel: {
      show: true,
      align: 'right',
      verticalAlign: 'middle',
      margin: 20,
      formatter: (value, i) => {
        return `{user_${i + 1}| }` + `{value| ${value}}`;
      },
      rich: {
        value: {
          width: 50,
          align: 'center',
          lineHeight: 30,
          fontSize: 14,
          overflow: 'truncate'
        },
        user_1: {
          width: 30,
          height: 30,
          backgroundColor: {
            image: 'https://picsum.photos/100?random=1'
          }
        },
        user_2: {
          height: 30,
          backgroundColor: {
            image: 'https://picsum.photos/100?random=2'
          }
        },
        user_3: {
          height: 30,
          backgroundColor: {
            image: 'https://picsum.photos/100?random=3'
          }
        },
        user_4: {
          height: 30,
          backgroundColor: {
            image: 'https://picsum.photos/100?random=4'
          }
        },
        user_5: {
          height: 30,
          backgroundColor: {
            image: 'https://picsum.photos/100?random=5'
          }
        }
      }
    }
  },
  series: [
    {
      data: xAxisData,
      type: 'bar',
      realtimeSort: true,
      label: {
        show: true,
        formatter: ({ value }) => {
          return `${value} h`
        }
      }
    }
  ],
};

const show = ref(false);

onMounted(async () => {
  show.value = true;
  await GetRank().then(res => {
    res.data.result.forEach((item) => {
      xAxisData.push({
        value: item.time,
        itemStyle: {
          color: item.color
        }
      });
      yAxisData.push(item.username);
      show.value = false;
    });
  });
})
</script>