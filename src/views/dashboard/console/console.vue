<!--
 * @Author: nanfs
 * @Date: 2023-09-04 14:58:34
 * @LastEditTime: 2023-09-12 12:12:20
 * @LastEditors: nanfs
 * @Description: 主控台页面
-->
<template>
  <div class="console">
    <n-grid x-gap="10" y-gap="10" cols="1 620:2 1040:3 1380:4">
      <!-- 饥荒内存占用 -->
      <n-gi>
        <n-card :bordered="false" style="height: 100%;" hoverable>
          <n-space vertical>
            <n-statistic label="饥荒占用内存">0.00 MB</n-statistic>
            <n-space>
              <n-tag :bordered="false" type="info" size="small">虚拟内存</n-tag>
              <span style="color: #767c82; line-height: 1.8em;">0.00 MB</span>
            </n-space>
          </n-space>
        </n-card>
      </n-gi>
      <!-- 服务器内存使用 -->
      <n-gi>
        <ProgressCard
          :setupColor="true"
          :percentage="getMemRate" 
          :statistic="getMemStatistic" 
        />
      </n-gi>
      <!-- cpu 负载 -->
      <n-gi>
        <ProgressCard 
          :percentage="getCpuRate" 
          :statistic="getCpuStatistic" 
        />
      </n-gi>
      <!-- disk 负载 -->
      <n-gi>
        <ProgressCard 
          :percentage="getDiskRate" 
          :statistic="getDiskStatistic" 
        />
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
  import ProgressCard from './components/ProgressCard.vue';
  import { useServerStore } from '@/stores/server';

  const serverStore = useServerStore();

  const timer = ref(null);

  // 内存使用率
  const getMemRate = computed(() => {
    return serverStore.mem?.usageRate;
  });

  // CPU使用率
  const getCpuRate = computed(() => {
    return serverStore.cpu?.used;
  });

  // 磁盘使用率
  const getDiskRate = computed(() => {
    return serverStore.disk?.usageRate;
  });

  const getMemStatistic = computed(() => {
    return {
      label: '内存使用',
      value: `${serverStore.mem?.used} GB`,
      extra: {
        type: 'info',
        name: '总内存',
        value: `${serverStore.mem?.free} / ${serverStore.mem?.total} GB`
      }
    }
  });

  const getCpuStatistic = computed(() => {
    return {
      label: 'cpu 占用',
      value: serverStore.cpu?.name,
      extra: {
        type: 'info',
        name: 'CPU',
        value: `${serverStore.cpu?.threadNumber} 线程`
      }
    };
  });

  const getDiskStatistic = computed(() => {
    return {
      label: '磁盘使用',
      value: `${serverStore.disk?.used} GB`,
      extra: {
        type: 'info',
        name: '磁盘容量',
        value: `${serverStore.disk?.total} GB`
      }
    };
  });

  // 间隔4s,重复请求
  async function serverPolling(callback, duration) {
    await callback();
    timer.value = setInterval(async () => {
      await callback();
    }, duration);
  }

  onMounted(async () => {
    await serverPolling(async () => {
      await serverStore.getServerCpu().then(res => {
        // console.log('cpu信息', res.data.result);
        serverStore.setServerCpu(res.data.result);
      });
      await serverStore.getServerMem().then(res => {
        // console.log('内存信息', res.data.result);
        serverStore.setServerMem(res.data.result);
      });
      await serverStore.getServerDisk().then(res => {
        // console.log('磁盘信息', res.data.result);
        serverStore.setServerDisk(res.data.result);
      });
    }, 4000);
  })

  onBeforeUnmount(() => {
    timer.value = null;
  })
</script>

<style lang="scss" scoped>
.console {
  color: #333333d9
}
</style>