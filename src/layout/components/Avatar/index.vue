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
          :src="avatar"
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

const router = useRouter();

const userStore = useUserStore();

const show = ref(false);

const avatar = computed(() => {
  return new URL('@/assets/images/avatar_01.png', import.meta.url).href;
});

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