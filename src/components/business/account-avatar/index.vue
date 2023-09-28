<template>
  <div class="avatar" style="margin-left: 10px;">
    <n-dropdown :options="options" @select="handleSelected">
      <div class="trigger">
        <n-avatar round object-fit="cover">
          <span style="font-size: 20px;">{{ getAvatar }}</span>
        </n-avatar>
        <n-ellipsis style="max-width: 80px">
          <n-text class="name">
            {{ getUsername }}
          </n-text>
          <template #tooltip>泡面艺术家</template>
        </n-ellipsis>
        <SvgIcon name="down" size="14" />
      </div>
    </n-dropdown>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores';
  import { renderIcon } from '@/utils';

  const router = useRouter();
  const authStore = useAuthStore();

  const options = reactive([
    {
      label: '个人中心',
      key: 'profile',
      icon: renderIcon('account', { size: '16' })
    },
    {
      label: '退出登录',
      key: 'logout',
      icon: renderIcon('logout', { size: '16' })
    }
  ]);
  
  const getAvatar = computed(() => {
    return authStore.userInfo?.nickname[0] || authStore.userInfo?.username[0];
  });

  const getUsername = computed(() => {
    return authStore.userInfo?.nickname || authStore.userInfo?.username;
  });

  function handleSelected(key) {
    switch (key) {
      case 'profile':
        router.push({ name: '/setting/account' });
        break;
    
      case 'logout':
        authStore.logout();
        break;
    }
  }
</script>

<style scoped lang="scss">
  .avatar {
    cursor: pointer;
    .trigger {
      display: flex;
      align-items: center;
      .name {
        margin: 0 5px;
        font-size: 16px;
        letter-spacing: .75px;
      }
    }
  }
</style>