<template>
  <n-form
    ref="loginFormRef"
    label-placement="left"
    :model="loginModel"
    :rules="rules"
    :size="size"
  >
    <n-form-item path="username">
      <n-input 
        v-model:value="loginModel.username" 
        placeholder="用户名" 
        :minlength="4"
        :maxlength="12"
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
    <n-form-item path="password">
      <n-input 
        v-model:value.trim="loginModel.password" 
        type="password" 
        showPasswordOn="click"
        placeholder="密码"
        round
        :minlength="6"
        :maxlength="18"
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
    <n-form-item path="captcha">
      <n-input 
        v-model:value="loginModel.captcha" 
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
      
      <Captcha />
    </n-form-item>
    <n-form-item size="small" class="default-color">
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
        @click="handleLoginSubmit"
      >
        登录
      </n-button>
    </n-form-item>
    <n-form-item size="small" class="default-color">
      <n-space justify="space-between" style="width: 100%;">
        <n-space justify="space-between">
          <span>其它登录方式</span>
          <n-button text type="success">
            <SvgIcon name="wechat" size="24" />
          </n-button>
          <n-button text type="success">
            <SvgIcon name="github" size="24" />
          </n-button>
        </n-space>
        <n-button text @click="toggleSignup">注册账号</n-button>
      </n-space>
    </n-form-item>
  </n-form>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/user';
  import { useMessage } from 'naive-ui';
  import { Login } from '@/api/modules/user';

  const router = useRouter();
  const userStore = useUserStore();
  const message = useMessage();

  // 登录表单
  const loginModel = reactive({
    username: 'admin',
    password: '123456',
    captcha: 'qwer',
  })

  // 表单规则
  const rules = {
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
      {
        min: 4,
        max: 12,
        message: '用户名长度为 4-12 个字符',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
      {
        min: 6,
        max: 18,
        message: '密码长度为 6-18 个字符',
        trigger: 'blur',
      },
    ],
    captcha: [
      {
        required: true,
        message: '请输入验证码',
        trigger: 'blur',
      }
    ]
  }

  const loginFormRef = ref(null);
  // 表单尺寸
  const size = ref('large');
  // 是否登录中
  const loading = ref(false);
  // 7天内免登录
  const remember = ref(false);

  // 不允许空格
  const noSpace = (value) => {
    // // 不允许中文字符
    // const noZh = /^[^\u4e00-\u9fa5]+$/; 
    return (value.indexOf(' ') === -1);
  }

  function toggleSignup() {
    message.error('暂不开放注册功能~');
  }

  /**
   * @description: 登录
   * @return {*}
   */
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loading.value = true;
    loginFormRef.value?.validate(async (errors) => {
      if (!errors) {
        const data = { ...loginModel, remember: remember.value };
        await Login(data).then(res => {
          if (res.data.code === 200) {
            console.log(res);
            message.success('登录成功，即将进入系统');
            // 保存 token 信息
            userStore.setToken(res.data.result.token);
            userStore.setUser({
              username: res.data.result.user.username,
              nickname: res.data.result.user.nickname,
              phone: res.data.result.user.phone,
            });
            loading.value = false;
            router.push('/');
          } else {
            message.error(res.data.msg);
            loading.value = false;
          }
        });
      } else {
        message.error('请填写完整信息，并且进行验证码校验');
        loading.value = false;
      }
    })
  }
</script>