<template>
  <div class="vi-markdown github-markdown-body" v-html="mdText"></div>
</template>

<script setup>
  import '@/assets/styles/github.css';
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