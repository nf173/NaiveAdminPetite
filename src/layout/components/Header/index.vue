<template>
  <div class="page-header">
    <div class="header-left">
      <!-- 菜单收起 -->
      <div
        v-if="!isTopNav"
        class="fold-trigger"
        @click="$emit('update:collapsed', !collapsed)"
      >
        <SvgIcon :name="collapsed ? 'unfold' : 'fold'" size="18" />
      </div>
      <!-- 面包屑导航 -->
      <HeaderBreadcrumb v-if="!isTopNav" />

      <Logo v-if="isTopNav" style="margin-left: 17px;" />
    </div>

    <div class="header-center" style="margin: 0 40px">
      <AsideMenu
        v-if="isTopNav"
        mode="horizontal"
        :collapsed="collapsed"
      />
    </div>

    <div class="header-right">
      <!-- 工具栏 -->
      <div class="header-tools">
        <n-tooltip 
          placement="bottom"
          v-for="(tool, index) in state.toolsList"
          :key="tool.name"
        >
          <template #trigger>
            <span class="tool" @click="handleToolClick(tool.name, index)">
              <SvgIcon :name="tool.icon" size="20" />
            </span>
          </template>
          {{ tool.title }}
        </n-tooltip>
      </div>
      <HeaderAvatar></HeaderAvatar>
      <!-- 站点设置 -->
      <div class="header-setting" @click="openSettingDrawer">
        <SvgIcon name="system" size="20" />
      </div>
    </div>

    <SearchModel v-model:show="state.showSearchModal" />
    <!-- 设置抽屉 -->
    <SettingDrawer v-model:show="state.showSettingDrawer"></SettingDrawer>
  </div>
</template>

<script setup>
  import Logo from '../Logo/index.vue';
  import AsideMenu from '../Menu/index.vue';
  import HeaderBreadcrumb from '../Breadcrumb/index.vue';
  import HeaderAvatar from '../Avatar/index.vue';
  import SearchModel from '../Search/index.vue';
  import SettingDrawer from '../Drawer/index.vue';
  import { useUserStore } from '@/stores/user';
  import { useMessage } from 'naive-ui';
  import { useRouter } from 'vue-router';

  const userStore = useUserStore();
  const router = useRouter();
  const message = useMessage();

  const props = defineProps({
    collapsed: {
      type: Boolean
    },
    isTopNav: {
      type: Boolean,
      default: false
    }
  });

  const state = reactive({
    showSearchModal: false,
    showSettingDrawer: false,
    toolsList: [
      {
        title: '搜索',
        name: 'search',
        icon: 'search',
      },
      {
        title: 'github',
        name: 'github',
        icon: 'github'
      },
      {
        title: '锁屏',
        name: 'lock',
        icon: 'lock'
      },
      {
        title: '全屏',
        name: 'fullscreen',
        icon: 'fullscreen'
      }
    ]
  })

  // 全屏切换
  const toggleFullScreen = (i) => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      state.toolsList[i].title = '退出全屏';
      state.toolsList[i].icon = 'fullscreen_exit';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        state.toolsList[i].title = '全屏';
        state.toolsList[i].icon = 'fullscreen';
      }
    }
  };

  // 工具栏点击
  const handleToolClick = (key, index) => {
    switch (key) {
      // 搜索框
      case 'search':
        state.showSearchModal = true;
        break;
      case 'github':
        window.open('http://124.221.16.194');
        break;
      case 'lock':
        if (userStore.lockPwd) {
          userStore.setIsLock(true);
        } else {
          router.push({
            name: 'setting_account',
            state: {
              tabsName: 'securitySetting'
            }
          });
          message.warning('请先设置锁屏密码');
        }
        break;
      // 网页全屏
      case 'fullscreen': 
        toggleFullScreen(index);
        break;
    }
  }

  const openSettingDrawer = () => {
    state.showSettingDrawer = true;
  }
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  transition: all .2s ease-in-out;
  width: 100%;
  .header-left {
    display: flex;
    align-items: center;
    .fold-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
      padding: 0 12px;
      cursor: pointer;
      margin: 0 5px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .header-tools {
      display: flex;
      align-items: center;
      margin: 0 5px;
      .tool {
        cursor: pointer;
        padding: 5px 10px;
        .svg-icon {
          transition: all .3s ease;
        }
        &:hover .svg-icon {
          transform: scale(1.1);
        }
      }
    }
    .header-setting {
      cursor: pointer;
      padding: 5px 10px;
      margin-left: 10px;
      .svg-icon {
        transition: all .3s ease;
        transform-origin: center;
      }
      &:hover .svg-icon {
        transform: rotate(-90deg);
      }
    }
  }
}
</style>