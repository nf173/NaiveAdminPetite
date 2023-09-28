<template>
  <div class="image-verify" @click="getImgCode">
    <canvas ref="codeRef" width="150" height="40" />
  </div>
</template>

<script setup>
import { useImageVerify } from './hook';

const emit = defineEmits(['update:code']);

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '150'
  },
  height: {
    type: String,
    default: '40'
  }
});

const codeRef = ref(null);

const { getImgCode } = useImageVerify(codeRef);

onMounted(() => {
  getImgCode();
})
</script>

<style lang="scss" scoped>
.image-verify {
  display: flex;
  cursor: pointer;
}
</style>