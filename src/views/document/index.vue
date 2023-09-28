<template>
  <div class="help-doc">
    <n-card :bordered="false">
      <NapMarkdown :text="readmeData" />
    </n-card>
  </div>
</template>

<script setup>
  import NapMarkdown from '@/components/common/nap-markdown/index.vue';
  import readmeData from '../../../README.md?raw';
</script>