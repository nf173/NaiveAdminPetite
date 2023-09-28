<template>
  <n-form
    ref="loginPwdRef"
    label-placement="left"
    size="large"
    :model="model"
    :rules="rules"
  >
    <n-form-item path="username">
      <n-input
        v-model:value="model.username" 
        placeholder="用户名" 
        :minlength="4"
        :maxlength="12"
      >
        <template #prefix>
          <SvgIcon name="user" size="18" color="#808695" />
        </template>
      </n-input>
    </n-form-item>

    <n-form-item path="password">
      <n-input
        v-model:value.trim="model.password" 
        type="password" 
        showPasswordOn="click"
        placeholder="密码"
        :minlength="6"
        :maxlength="18"
        :allow-input="noSpace"
      >
        <template #prefix>
          <SvgIcon name="lock" size="18" color="#808695" />
        </template>
      </n-input>
    </n-form-item>
    
    <n-form-item size="small">
      <n-space justify="space-between" style="width: 100%;">
        <n-checkbox v-model:checked="remember">7天内免登录</n-checkbox>
        <n-button text>忘记密码</n-button>
      </n-space>
    </n-form-item>

    <n-form-item>
      <n-button 
        type="primary"  
        size="large" 
        block
        round
        :loading="loading"
        :disabled="loading"
        @click="handleSubmit"
      >
        登录
      </n-button>
    </n-form-item>

    <n-form-item size="small" :show-feedback="false">
      <div style="display: flex; justify-content: space-between; width: 100%;">
        <n-button 
          style="width: calc(50% - 5px);" 
          size="medium" 
          @click="authStore.mode='code';"
        >
          验证码登录
        </n-button>
        <n-button 
          style="width: calc(50% - 5px); margin-left: 10px;" 
          size="medium" 
          @click="authStore.mode='register';"
        >
          注册
        </n-button>
      </div>
    </n-form-item>

    <n-divider 
      title-placement="center" 
      style="font-size: 14px; color: #666666;">
      其他账号登录
    </n-divider>

    <n-space justify="center" :size="15">
      <n-button type="success" @click="changeForm('super')">超级管理员</n-button>
      <n-button type="success" @click="changeForm('admin')">管理员</n-button>
      <n-button type="success" @click="changeForm('user')">普通用户</n-button>
    </n-space>
  </n-form>
</template>

<script setup>
  import { useAuthStore } from '@/stores';
  import { formRules } from '@/utils';

  const authStore = useAuthStore();

  const model = reactive({
    username: 'Petite',
    password: 'Petite123',
  })

  const rules = {
    username: formRules.username,
    password: formRules.password,
  }

  const loginPwdRef = ref(null);
  // 是否登录中
  const loading = ref(false);
  // 7天内免登录
  const remember = ref(false);

  // 不允许空格
  const noSpace = (value) => {
    return (value.indexOf(' ') === -1);
  }

  /**
  * @description: 登录
  * @return {*}
  */
  async function handleSubmit(e) {
    e.preventDefault();
    await authStore.loginByPwd(model);
  }

  function changeForm(role) {
    switch (role) {
      case 'super':
        model.username = 'Petite';
        model.password = 'Petite123';
        break;
      case 'admin':
        model.username = 'Admin';
        model.password = 'Admin123';
        break;
      case 'user':
        model.username = 'User';
        model.password = 'User123';
        break;
    }
  }
</script>

<style lang="scss" scoped></style>