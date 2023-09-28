<template>
  <n-form 
    ref="registerRef"
    label-placement="left"
    size="large"
    :model="model"
    :rules="rules"
  >
    <n-form-item path="phone">
      <n-input v-model:value="model.phone" placeholder="手机号" />
    </n-form-item>

    <n-form-item path="smsCode">
      <n-input v-model:value="model.smsCode" placeholder="短信验证码" />
      <sms-code-btn style="margin-left: 10px;" :phone="model.phone" />
    </n-form-item>

    <n-form-item path="password">
      <n-input v-model:value="model.password" placeholder="密码" :minlength="6" :maxlength="18" />
    </n-form-item>

    <n-form-item path="repeat">
      <n-input v-model:value="model.repeat" placeholder="再次输入" :minlength="6" :maxlength="18" />
    </n-form-item>

    <n-form-item :show-feedback="false">
      <n-space vertical :size="20">
        <div class="agreement">
          <n-checkbox v-model:value="agreement">我已仔细阅读并接受</n-checkbox>
          <n-button text type="primary">《用户协议》</n-button>
          <n-button text type="primary">《隐私权政策》</n-button>
        </div>
        <n-button round type="success" style="width: 100%;" @click="handleSubmit">确定</n-button>
        <n-button round style="width: 100%;" @click="authStore.mode = 'pwd';">返回</n-button>
      </n-space>
    </n-form-item>
  </n-form>
</template>

<script setup>
  import SmsCodeBtn from '@/components/business/sms-code-btn/index.vue';
  import { useAuthStore } from '@/stores';
  import { formRules, createConfirmPwdRule } from '@/utils';

  const authStore = useAuthStore();

  const model = reactive({
    phone: '',
    smsCode: '',
    password: '',
    repeat: ''
  });
  
  const rules = {
    phone: formRules.phone,
    smsCode: formRules.smsCode,
    password: formRules.password,
    repeat: createConfirmPwdRule(toRefs(model).password)
  };

  const registerRef = ref(null);
  const agreement = ref(false);

  function handleSubmit() {
    
  }
</script>

<style lang="scss" scoped></style>