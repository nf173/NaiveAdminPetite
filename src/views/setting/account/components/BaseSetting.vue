<template>
  <n-form 
    ref="formRef"
    style="width: 300px;"
    :label-width="80"
    :model="formValue"
    :rules="rules"
  >
    <n-form-item label="昵称" path="nickname">
      <n-input v-model:value="formValue.nickname" placeholder="输入昵称" />
    </n-form-item>
    <n-form-item>
      <n-button
        secondary
        type="primary"
        :loading="isUpdating"
        :disabled="isDisabled"
        @click="updateClick"
      >更新基本信息</n-button>
    </n-form-item>
  </n-form>
</template>

<script setup>
import { useUserStore } from '@/stores/modules/user';

const userStore = useUserStore();

const formValue = reactive({
  nickname: ''
});

const rules = reactive({
  nickname: {
    required: true,
    message: '请输入昵称',
    trigger: 'blur'
  }
});

const isUpdating = ref(false);

const isDisabled = computed(() => {
  return formValue.nickname ? false : true;
});

function updateClick(e) {
  isUpdating.value = true;
  const timer = setTimeout(() => {
    isUpdating.value = false;
    clearTimeout(timer);
  }, 2000);
}

onMounted(() => {
  formValue.nickname = userStore.nickname;
})
</script>