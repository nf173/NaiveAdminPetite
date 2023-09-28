import { GetRank } from '@/api';
import { message } from '@/hooks';
import { reactive } from 'vue';

/**
 * @method 在线时长排行
 * @param {Number} topNum - 上榜人数
 */
export function useTimeRank(topNum = 5) {
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
  });

  /**
   * @method 初始化排行榜数据
   * @param {Function} callback - 数据初始化后的回调
   */
  async function initTimeRank(callback) {
    await getRankData(topNum);
    
    if(callback) {
      callback();
    }
  }
  
  /**
   * @method 请求排行数据
   * @param {Number} topNum - 上榜人数
   */
  async function getRankData(topNum) {
    await GetRank({ topNum }).then(res => {
      if(res.code === 200) {
        res.data.forEach((item) => {
          xAxisData.push({
            value: item.time,
            itemStyle: {
              color: item.color
            }
          });
          yAxisData.push(item.username);
        });
      } else {
        message.error(res.message);
      }
    });
  }

  return {
    options,
    initTimeRank
  };
}