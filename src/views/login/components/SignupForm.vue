<template>
  <n-form
    ref="registerFormRef"
    label-placement="left"
    :model="registerModel"
    :rules="rules"
    :size="size"
  >
    <n-form-item path="username">
      <n-input 
        v-model:value="registerModel.username" 
        placeholder="用户名" 
        round 
      >
        <template #prefix>
          <SvgIcon 
            name="user" 
            size="18" 
            color="#808695"
          />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="phone">
      <n-input 
        v-model:value="registerModel.phone" 
        placeholder="手机号" 
        round 
      >
        <template #prefix>
          <SvgIcon 
            name="phone" 
            size="18" 
            color="#808695"
          />
        </template>
      </n-input>
      <n-button round type="tertiary" style="margin-left: 10px;">{{ countdown }}</n-button>
    </n-form-item>
    <n-form-item path="captcha">
      <n-input 
        v-model:value="registerModel.captcha" 
        placeholder="验证码" 
        round
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
    </n-form-item>
    <n-form-item path="password">
      <n-input 
        v-model:value.trim="registerModel.password" 
        type="password" 
        showPasswordOn="click"
        placeholder="密码"
        round
        :allow-input="noSpace"
      >
        <template #prefix>
          <SvgIcon 
            name="lock" 
            size="18" 
            color="#808695" 
          />
        </template>
      </n-input>
      <n-input 
        v-model:value.trim="registerModel.repeat"
        type="password" 
        showPasswordOn="click"
        placeholder="再次输入"
        round
        style="margin-left: 10px;"
        :allow-input="noSpace"
      >
        <template #prefix>
          <SvgIcon 
            name="lock" 
            size="18" 
            color="#808695" 
          />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item size="small" class="default-color">
      <n-space justify="space-between" style="width: 100%;">
        <n-checkbox v-model:checked="agree">我同意隐私协议</n-checkbox>
        <!-- <a href="javascript:" @click="handleToggle">返回登录</a> -->
      </n-space>
    </n-form-item>
  </n-form>
</template>

<script setup>

</script>