<template>
  <div 
    class="vi-markdown github-markdown-body" 
    v-html="mdText"
  />
</template>

<script setup>
  import '@/assets/css/github.css';
  import { marked } from 'marked';
  
  const props = defineProps({
    text: {
      type: String,
      default: ''
    }
  });

  const mdText = computed(() => {
    return marked(props.text, {
      breaks: true,
      sanitize: true,
      smartLists: true
    });
  });
</script>