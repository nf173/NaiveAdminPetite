<template>
  <div class="table-toolbar">
    <n-space justify="space-between">
      <!-- 工具栏左侧 -->
      <n-space>
        <n-button type="success">
          <template #icon>
            <SvgIcon name="add" size="18" />
          </template>
          新建
        </n-button>
      </n-space>
      <!-- 工具栏右侧 -->
      <n-space align="center">
        <n-button type="success" @click="handleUpdateTable">刷新数据</n-button>
        <n-divider vertical />
        <n-tooltip trigger="hover">
          <template #trigger>
            <SvgIcon 
              size="18" 
              style="cursor: pointer;"
              :name="fullscreenIcon" 
              @click="handleFullscreen($root)"
            />
          </template>
          全屏
        </n-tooltip>

        <n-dropdown trigger="click" :options="dpSizeOptions" @select="handleDpSizeSelect">
          <n-tooltip trigger="hover">
            <template #trigger>
              <SvgIcon name="density" size="18" style="cursor: pointer;" />
            </template>
            密度
          </n-tooltip>
        </n-dropdown>
      </n-space>
    </n-space>
  </div>
</template>

<script setup>
  import { openFullscreen, closeFullscreen } from '@/utils';
  import { getCurrentInstance } from 'vue';

  const emit = defineEmits(['update:size']);

  const props = defineProps({
    size: {
      type: String,
      default: 'medium'
    }
  });
  const dpSizeOptions = reactive([
    {
      label: "紧密",
      key: "small",
    },
    {
      label: "中间",
      key: "medium",
    },
    {
      label: "宽松",
      key: "large",
    },
  ]);
  const fullscreenIcon = ref('fullscreen');
  const ins = getCurrentInstance().parent;

  function handleUpdateTable() {
    
  }

  function handleDpSizeSelect(key) {
    changeSize(key);
  }

  function handleFullscreen(parent) {
    // const ins = getCurrentInstance().parent;
    console.log(ins.refs.NapTable);
    const isFullscreen = document.fullscreenElement;
    if (isFullscreen) {
      closeFullscreen();
      fullscreenIcon.value = 'fullscreen';
    } else {
      openFullscreen(ins.refs.NapTable);
      fullscreenIcon.value = 'fullscreen_exit';
    }
  }

  function changeSize(value) {
    emit('update:size', value);
  }

  onMounted(() => {
    
    
  })
</script>

<style lang="scss" scoped>
.table-toolbar {
  margin-bottom: 15px;
}
</style>