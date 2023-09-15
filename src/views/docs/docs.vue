<template>
  <div class="help-doc">
    <n-card :bordered="false">
      <ViMarkdown :text="readmeData" />
    </n-card>
  </div>
</template>

<script setup>
import readmeData from '../../../README.md?raw';
</script>