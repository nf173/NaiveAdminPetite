<template>
  <n-form
    ref="formRef"
    size="large"
    label-placement="left"
    :model="model"
    :rules="rules"
  >
    <n-form-item path="phone">
      <n-input v-model:value="model.phone" placeholder="手机号" />
    </n-form-item>

    <n-form-item path="smsCode">
      <n-input 
        v-model:value="model.smsCode" 
        placeholder="短信验证码" 
        :maxlength="6"
      />
      <sms-code-btn style="margin-left: 10px;" :phone="model.phone" />
    </n-form-item>

    <n-form-item path="imgCode">
      <n-input 
        v-model:value="model.imgCode" 
        placeholder="图片验证码" 
        size="large"
        :maxlength="4"
        :allow-input="noSpace"
      >
        <template #prefix>
          <SvgIcon 
            name="captcha" 
            size="18" 
            color="#808695" 
          />
        </template>
      </n-input>
    
      <ImageVerify v-model:code="imgCode" style="margin-left: 10px;" />
    </n-form-item>
    
    <n-form-item :show-feedback="false">
      <n-space vertical style="width: 100%;" :size="15">
        <n-button 
          round 
          type="success" 
          style="width: 100%;" 
          @click="handleSubmit"
        >
          登录
        </n-button>
        <n-button 
          round 
          style="width: 100%;" 
          @click="authStore.mode='pwd';"
        >
          返回
        </n-button>
      </n-space>
    </n-form-item>
    
  </n-form>
</template>

<script setup>
  import SmsCodeBtn from '@/components/business/sms-code-btn/index.vue';
  import ImageVerify from '@/components/business/image-verify/index.vue';
  import { useAuthStore } from '@/stores';
  import { formRules } from '@/utils';

  const authStore = useAuthStore();

  const model = reactive({
    phone: '13093710522',
    smsCode: '',
    imgCode: ''
  });
  
  const rules = {
    phone: formRules.phone,
    smsCode: formRules.smsCode,
    imgCode: formRules.imgCode
  }

  const formRef = ref(null);
  const imgCode = ref('');

  /* 不允许空格 */
  const noSpace = (value) => {
    return (value.indexOf(' ') === -1);
  }

  async function handleSubmit() {
    await formRef.value?.validate();

    const { phone, smsCode, imgCode } = model;

    await authStore.loginByCode(phone, smsCode, imgCode);
  }

  onUnmounted(() => {
    authStore.resetLoadingStatus();
  })
</script>

<style lang="scss" scoped></style>