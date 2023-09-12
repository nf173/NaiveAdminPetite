<!--
 * @Author: nanfs
 * @Date: 2023-09-05 15:41:34
 * @LastEditTime: 2023-09-05 17:39:24
 * @LastEditors: nanfs
 * @Description: 验证码组件
-->

<template>
  <div class="captcha" @click="updateCaptcha">
    <ViLoading :loading="isLoading" v-if="isLoading"/>
    <div class="captcha-img" v-html="captcha" v-else></div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { GetCaptcha } from '@/api/modules/auth';
  import ViLoading from '../ViLoading/ViLoading.vue';

  const captcha = ref(null);
  const isLoading = ref(false);

  /**
   * @description: 点击更新验证码
   * @return {*}
   */
  const updateCaptcha = async () => {
    isLoading.value = true;
    await GetCaptcha().then((res) => {
      console.log('[GET] 获取验证码：', res);
      captcha.value = res.data.result;
      isLoading.value = false;
    });
  };

  onMounted(async () => {
    // await updateCaptcha();
  });
</script>

<style lang="scss" scoped>
  .captcha {
    position: relative;
    min-width: 120px;
    margin-left: 10px;
    cursor: pointer;
    .captcha-img {
      display: flex;
    }
  }
</style>
