<template>
  <div class="error">
    <n-result 
      size="huge"
      :status="error.status" 
      :title="error.title" 
      :description="error.description"
    >
      <template #footer>
        <n-button @click="router.push('/')">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const error = reactive({
  status: '',
  title: '',
  description: ''
})

const initError = () => {
  if (route.meta.title === '403') {
    error.status = '403';
    error.title = '403 禁止访问';
    error.description = '总有些门是对你关闭的';
  } else if (route.meta.title === '500') {
    error.status = '500';
    error.title = '500 服务器错误';
    error.description = '服务器出错可能说明该雇更多程序员了';
  } else {
    error.status = '404';
    error.title = '404 资源不存在';
    error.description = '生活总归带点荒谬';
  }
}

onMounted(() => {
  initError();
})
</script>

<style lang="scss" scoped>
.error {
  margin: auto;
}
</style>