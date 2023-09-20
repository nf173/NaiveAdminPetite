<template>
  <n-card 
    hoverable
    :bordered="false"
  >
    <BasicTable 
      :columns="serversListColumns" 
      :data="serversListData"
      :bordered="false"
      :max-height="350"
      :loading="show"
    >
    </BasicTable>
  </n-card>
</template>

<script setup>
import BasicTable from '@/components/Table/Table.vue';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import { GetDstServersList } from '@/api/modules/server';
import { NTag } from 'naive-ui';

const serversListColumns = reactive([
  {
    title: '模式',
    key: 'mode',
    render(row) {
      let type = '';
      switch (row.mode) {
        case '轻松':
          type = 'success';
          break;
        case '生存':
          type = 'success';
          break;
        case '荒野':
          type = 'warning';
          break;
        case '无尽':
          type = 'info';
          break;
        case '暗无天日':
          type = 'error';
          break;
      }
      
      return h(NTag, {
        type: type,
        bordered: false
      },
      {
        default: () => row.mode
      })
    }
  },
  {
    title: '房间名',
    key: 'name',
  },
  {
    title: '模组',
    key: 'module',
    align: 'center',
    render(row) {
      if(row.module.length !== 0) {
        return h(
          SvgIcon,
          {
            name: 'plugin',
            size: '20'
          }
        )
      } else {
        return ''
      }
    }
  },
  {
    title: '在线人数',
    key: 'online',
    align: 'center'
  },
  {
    title: '延迟',
    key: 'ping',
    align: 'center',
    render(row) {
      let color = '#18a058';
      if(row.ping === 0) {
        color = '#ccc'
      }
      if (row.ping > 80) {
        color = '#d03050'
      }
      if (row.ping > 60 && row.ping <= 80) {
        color = '#f0a020'
      }
      return h(
        SvgIcon,
        {
          name: 'signal',
          size: '20',
          color: color
        }
      )
    }
  },
]);
const serversListData = ref([]);
const show = ref(false);

onMounted(async () => {
  show.value = true;
  await GetDstServersList().then(res => {
    if(res.data.code === 200) {
      serversListData.value = res.data.result;
    }
    show.value = false;
  });
})
</script>

<style lang="scss" scoped>

</style>