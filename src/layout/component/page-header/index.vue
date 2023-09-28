<template>
  <div class="page-header" ref="ph">
    <div class="page-header_left">
      <n-button text class="fold-btn" @click="handleFoldBtnClick">
        <SvgIcon :name="getFoldName" size="20" />
      </n-button>
      <nap-breadcrumb />
    </div>

    <div class="page-header_center"></div>

    <div class="page-header_right">
      <template v-for="(tool, index) in tools" :key="tool.name">
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-button text class="tool-btn" @click="handleToolClick(tool.name, index)">
              <SvgIcon :name="tool.icon" size="20" />
            </n-button>
          </template>
          {{ tool.title }}
        </n-tooltip>
      </template>

      <account-avatar />

      <n-button 
        text 
        style="padding: 0 10px; margin-left: 5px;" 
        @click="settingStore.settingDrawerShow = true;"
      >
        <SvgIcon name="system" size="20" />
      </n-button>
    </div>
  </div>
</template>

<script setup>
  import NapBreadcrumb from '@/components/common/nap-breadcrumb/index.vue';
  import AccountAvatar from '@/components/business/account-avatar/index.vue';
  import { useSettingStore } from '@/stores';
  import { openFullscreen, closeFullscreen } from '@/utils';

  const settingStore = useSettingStore();

  const tools = reactive([
    {
      title: '搜索',
      name: 'search',
      icon: 'search',
    },
    {
      title: 'github',
      name: 'github',
      icon: 'github',
    },
    {
      title: '锁屏',
      name: 'lock',
      icon: 'lock',
    },
    {
      title: '全屏',
      name: 'fullscreen',
      icon: 'fullscreen'
    }
  ]);
  const ph = ref(null);

  const getFoldName = computed(() => {
    return settingStore.siderCollapsed ? 'unfold' : 'fold';
  });

  function handleFoldBtnClick() {
    settingStore.siderCollapsed = !settingStore.siderCollapsed;
  }

  function handleToolClick(name, index) {
    switch (name) {
      case 'search':
        search();
        break;
      case 'github':
        window.open('https://github.com/nf173/NaiveAdminPetite');
        break;
      case 'lock':
        settingStore.locked = true;
        break;
      case 'fullscreen':
        fullscreen(index);
        break;
    }
  }

  function search() {

  }

  function fullscreen(i) {
    const isFullscreen = document.fullscreenElement;
    if(isFullscreen) {
      closeFullscreen();
      tools[i].icon = 'fullscreen';
    } else {
      openFullscreen(document.body);
      tools[i].icon = 'fullscreen_exit';
    }
  }
</script>

<style scoped lang="scss">
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 10px;
    .page-header_left {
      display: flex;
      .fold-btn {
        margin-right: 5px;
        padding: 0 10px;
      }
    }
    .page-header_right {
      display: flex;
      align-items: center;
      .tool-btn {
        padding: 5px;
        margin: 5px;
      }
    }
  }
</style>