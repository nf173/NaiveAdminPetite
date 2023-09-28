import { reactive, computed, onMounted } from 'vue';
import { GetCpu, GetMem, GetDisk } from '@/api';
import { delay } from '@/utils';

export function useHookServer() {
  const cpu = reactive({});
  const mem = reactive({});
  const disk = reactive({});

  // 内存使用率
  const getMemRate = computed(() => {
    return mem.usageRate;
  });

  // CPU使用率
  const getCpuRate = computed(() => {
    return cpu.used;
  });

  // 磁盘使用率
  const getDiskRate = computed(() => {
    return disk.usageRate;
  });

  const getMemStatistic = computed(() => {
    return {
      label: '内存使用',
      value: `${mem.used} GB`,
      extra: {
        type: 'info',
        name: '总内存',
        value: `${mem.free ?? '0.00'} / ${mem.total ?? '0.00'} GB`
      }
    }
  });

  const getCpuStatistic = computed(() => {
    return {
      label: 'cpu 占用',
      value: cpu.name,
      extra: {
        type: 'info',
        name: 'CPU',
        value: `${cpu.threadNumber} 线程`
      }
    };
  });

  const getDiskStatistic = computed(() => {
    return {
      label: '磁盘使用',
      value: `${disk.used} GB`,
      extra: {
        type: 'info',
        name: '磁盘容量',
        value: `${disk.total} GB`
      }
    };
  });

  onMounted(async () => {
    await serverPolling(async () => {
      await GetCpu().then(res => {
        Object.assign(cpu, res.data);
      });
      await GetMem().then(res => {
        Object.assign(mem, res.data);
      });
      await GetDisk().then(res => {
        Object.assign(disk, res.data);
      });
    }, 400);
  });

  return {
    getMemRate,
    getCpuRate,
    getDiskRate,
    getMemStatistic,
    getCpuStatistic,
    getDiskStatistic
  }
}

// 间隔4s,重复请求
async function serverPolling(callback, duration) {
  await callback();
  delay(duration).then(async res => {
    await callback();
  });
}