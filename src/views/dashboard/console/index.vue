<template>
  <div class="console">
    <n-grid 
      x-gap="10" 
      y-gap="10" 
      cols="1 1040:2 1380:4"
      style="margin-bottom: 10px;"
    >
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
      <n-gi>
        <ServerMonitor
          :isSetupColor="true"
          :percentage="getMemRate" 
          :statistic="getMemStatistic" 
        />
      </n-gi>
      <n-gi>
        <ServerMonitor 
          :percentage="getCpuRate" 
          :statistic="getCpuStatistic" 
        />
      </n-gi>
      <n-gi>
        <ServerMonitor 
          :percentage="getDiskRate" 
          :statistic="getDiskStatistic" 
        />
      </n-gi>
    </n-grid>
    <n-grid 
      x-gap="10" 
      y-gap="10" 
      cols="620:1 1380:2" 
      style="margin-bottom: 10px;"
    >
      <n-gi>
        <PageView></PageView>
      </n-gi>
      <n-gi>
        <TimeRank></TimeRank>
      </n-gi>
    </n-grid>
    <n-grid 
      x-gap="10" 
      y-gap="10" 
      cols="1 1380:4"
    >
      <n-gi span="1 930:3">
        <dst-server-list></dst-server-list>
      </n-gi>
      <n-gi span="1">
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
  import ServerMonitor from './components/ServerMonitor/index.vue';
  import PageView from './components/PageView/index.vue';
  import TimeRank from './components/TimeRank/index.vue';
  import DstServerList from './components/DstServerList/index.vue';
  import { useHookServer } from '@/hooks';

  const { 
    getMemRate,
    getCpuRate,
    getDiskRate,
    getMemStatistic,
    getCpuStatistic,
    getDiskStatistic
  } = useHookServer();
</script>

<style lang="scss" scoped>
  .console {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    height: calc(100% - 60px);
    color: #333333d9;
  }
</style>