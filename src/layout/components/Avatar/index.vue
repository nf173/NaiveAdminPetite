<template>
  <div class="header-avatar">
    <n-dropdown 
      :show="show" 
      :options="options" 
      @select="handleSelect"
      @clickoutside="handleClickOutside"
    >
      <div class="avatar-wrap" @click="handleClick">
        <n-avatar
          round
          object-fit="cover"
          :src="userStore.avatar"
        />
        <n-ellipsis style="max-width: 80px">
          <n-text class="name">
            {{ userStore.nickname || userStore.username }}
          </n-text>
          <template #tooltip>泡面艺术家</template>
        </n-ellipsis>

        <SvgIcon name="down" />
      </div>
    </n-dropdown>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/user';
  import { renderIcon } from '@/utils/renderer';
  import { GetAvatar } from '@/api/modules/user';
  import { useMessage } from 'naive-ui';

  const router = useRouter();
  const message = useMessage();
  const userStore = useUserStore();

  const show = ref(false);

  const options = ref([
    {
      label: '个人设置',
      key: 'personal',
      icon: renderIcon('account', { size: '16' })
    },
    {
      label: '退出登录',
      key: 'logout',
      icon: renderIcon('logout', { size: '16' })
    }
  ]);

  function handleSelect(key) {
    switch (key) {
      case 'personal':
        router.push({
          name: 'setting_account'
        });
        break;
    
      case 'logout':
        userStore.logout();
        router.push('/login');
        break;
    }
    show.value = false;
  }

  function handleClick() {
    show.value = !show.value;
  }

  function handleClickOutside() {
    show.value = false;
  }

  onMounted(async () => {
    await GetAvatar().then(res => {
      if (res.data.code === 200) {
        userStore.setAvatar(res.data.result.avatar);
      } else {
        message.error(res.data.msg);
      }
    });
  })
</script>

<style lang="scss" scoped>
.header-avatar {
  cursor: pointer;
  display: flex;
  margin-left: 10px;
  .avatar-wrap {
    position: relative;
    display: flex;
    align-items: center;
    .n-avatar {
      transition: all .3s ease;
    }
    .name {
      margin-left: 10px;
    }
    &:hover {
      .n-avatar {
        box-shadow: 0px 0px 8px -2px #33333366 ;
      }
    }
  }
}
</style>