<template>
  <n-button 
    :loading="isSending"
    :disabled="isCounting" 
    @click="handleSendCode"
  >
    <n-text v-if="!isCounting">获取验证码</n-text>
    <n-countdown
      v-else
      :render="renderCountdown" 
      :duration="duration" 
      :active="isCounting" 
      @finish="countdownFinish"
    />
  </n-button>
</template>

<script setup>
  import { ref } from 'vue';
  import { getSmsCode, isPhoneValid } from './hook';

  const props = defineProps({
    phone: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 30 * 1000
    }
  });

  const isSending = ref(false);
  const isCounting = ref(false);

  const renderCountdown = ({ hours, minutes, seconds }) => {
    return `${String(seconds)}秒后重新获取`;
  }

  function countdownFinish() {
    isCounting.value = false;
  }

  async function handleSendCode() {
    if(isPhoneValid(props.phone)) {
      isSending.value = true;
      isCounting.value = true;
      await getSmsCode(props.phone, () => {
        isSending.value = false;
      });
    }
  }
</script>

<style scoped>

</style>