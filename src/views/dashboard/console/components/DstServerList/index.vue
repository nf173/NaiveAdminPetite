<template>
  <n-card hoverable :bordered="false">
    <nap-table 
      toolbar
      :bordered="false" 
      :max-height="350"
      :loading="loading"
      :columns="columns" 
      :data="data"
      :pagination="pagination"
    />
  </n-card>
</template>

<script setup>
  import NapTable from '@/components/common/nap-table/index.vue';
  import { useDstServer } from '@/hooks';

  const loading = ref(false);
  const pagination = reactive({
    pageSize: 10,
    showSizePicker: true,
    showQuickJumper: true
  });

  const { columns, data, initDstServerList } = useDstServer();

  onMounted(async () => {
    loading.value = true;
    await initDstServerList(() => {
      loading.value = false;
    });
  })
</script>

<style lang="scss" scoped></style>