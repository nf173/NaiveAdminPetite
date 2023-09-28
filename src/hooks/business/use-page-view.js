import { GetVisits } from '@/api';
import { reactive } from 'vue';
import { message } from '@/hooks';

/**
 * @method 访问量
 * @param 
 */
export function usePageView() {
  // 横轴数据 - 时长
  const xAxisData = reactive([]);
  // 纵轴数据 - 用户
  const yAxisData = reactive([]);

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
    grid: { 
      left: '20px', 
      right: '20px', 
      top: '40px', 
      bottom: '40px', 
      containLabel: true 
    },
    series: [
      {
        data: yAxisData,
        type: 'line',
      }
    ],
  });

  /**
   * @method 初始化访问量数据
   * @param {Function} callback - 数据初始化后的回调
   */
  async function initPageView(callback) {
    await getPageView();
    
    if(callback) {
      callback();
    }
  }

  /**
   * @method 请求访问量数据
   * @param {*} 
   */
  async function getPageView() {
    await GetVisits().then(res => {
      if(res.code === 200) {
        Object.entries(res.data).forEach((item) => {
          xAxisData.push(item[0]);
          yAxisData.push(item[1]);
        });
      } else {
        message.error(res.message);
      }
    });
  }

  return {
    options,
    initPageView
  };
}