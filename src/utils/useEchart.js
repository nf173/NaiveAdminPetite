import * as echarts from 'echarts';
import { useSettingStore } from '@/stores/setting';
import { unref, watch, computed } from 'vue';
import { delay } from './delay';

const settingStore = useSettingStore();

/**
 * @method 创建Echart实例
 * @param {*} elRef 
 * @param {*} theme 'light' | 'dark'
 */

export function useEchart(elRef, theme = 'default') {
  let chartInstance = null;
  const cacheOptions = ref({});

  const getTheme = computed(() => {
    return theme === 'default' ? settingStore.theme : theme;
  });

  const getOptions = computed(() => {
    if(settingStore.theme !== 'dark') {
      return {
        ...cacheOptions.value
      }
    }
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value,
    }
  });

  watch(
    () => getTheme.value,
    (theme) => {
      if (chartInstance) {
        chartInstance.dispose();
        initCharts(cacheOptions.value, theme);
      }
    }
  )
  
  // 初始化实例
  function initCharts(options, theme) {
    delay(10).then(res => {
      if(chartInstance) disposeInstance();
      const el = unref(elRef);
      chartInstance = echarts.init(el, theme ?? getTheme.value);
      cacheOptions.value = options;
      chartInstance.setOption(unref(getOptions));
    });
  }

  // 重置尺寸
  function resize(opts) {
    chartInstance?.resize(opts);
  }

  // 销毁实例
  function disposeInstance() {
    if (!chartInstance) return;
    chartInstance.dispose();
    chartInstance = null;
  }

  return {
    initCharts, 
    resize,
    disposeInstance
  }
}