<template>
  <div class="table-toolbar">
    <n-space justify="space-between">
      <!-- 工具栏左侧 -->
      <n-space>
        <n-button type="success">
          <template #icon>
            <SvgIcon name="add" size="18" />
          </template>
          <!-- <SvgIcon name="add" size="18" /> -->
          新建
        </n-button>
      </n-space>
      <!-- 工具栏右侧 -->
      <n-space align="center">
        <n-button type="success">刷新数据</n-button>
        <n-switch 
          checked-value="周末加班" 
          unchecked-value="周末支持一下" 
          @update:value="handleUpdateValue">
        </n-switch>
        <n-divider vertical />
        <n-tooltip trigger="hover">
          <template #trigger>
            <SvgIcon name="fullscreen" size="18" />
          </template>
          全屏
        </n-tooltip>
        <n-tooltip trigger="hover">
          <template #trigger>
            <SvgIcon name="density" size="18" />
          </template>
          密度
        </n-tooltip>
      
      </n-space>
    </n-space>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>