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
    <n-form-item label="头像" path="avatar">
      <n-upload
        ref="uploadRef"
        action="/api/user"
        list-type="image-card"
        v-model:file-list="fileList"
        :max="1"
        :default-upload="false"
        @change="handleUpload"
      >
        点击上传
      </n-upload>
    </n-form-item>
    <n-form-item>
      <n-button
        secondary
        type="primary"
        :loading="isUpdating"
        :disabled="isDisabled"
        @click="updateClick"
      >
        更新基本信息
      </n-button>
    </n-form-item>
  </n-form>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { useMessage } from 'naive-ui';

const userStore = useUserStore();
const message = useMessage();

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

const uploadRef = ref(null);

const fileList = ref([]);

const isUpdating = ref(false);

const isDisabled = computed(() => {
  return formValue.nickname ? false : true;
});

function handleUpload(options) {
  fileList.value = options.fileList.length;
}

function updateClick(e) {
  isUpdating.value = true;
  const timer = setTimeout(() => {
    isUpdating.value = false;
    uploadRef.value?.submit();
    userStore.setUser({
      nickname: formValue.nickname
    });
    message.success('昵称修改成功');
    clearTimeout(timer);
  }, 2000);
}

onMounted(() => {
  formValue.nickname = userStore.nickname;
})
</script>