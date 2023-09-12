<!--
 * @Author: nanfs
 * @Date: 2023-09-07 18:17:37
 * @LastEditTime: 2023-09-10 23:42:41
 * @LastEditors: nanfs
 * @Description: 顶部菜单
-->
<template>
  <div class="page-header">
    <div class="header-left">
      <!-- 菜单收起 -->
      <div
        class="fold-trigger"
        @click="$emit('update:collapsed', !collapsed)"
      >
        <SvgIcon :name="collapsed ? 'unfold' : 'fold'" size="18" />
      </div>
      <!-- 面包屑导航 -->
      <HeaderBreadcrumb />
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
            <div 
              class="tool" 
              @click="handleToolClick(tool.name, index)"
            >
              <SvgIcon :name="tool.icon" size="20" />
            </div>
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
  import HeaderBreadcrumb from '../Breadcrumb/index';
  import HeaderAvatar from '../Avatar/index';
  import SearchModel from '../Search/index';
  import SettingDrawer from '../Drawer/index';
  import { reactive } from 'vue';

  const props = defineProps({
    collapsed: {
      collapsed: {
        type: Boolean
      }
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
    // 搜索
    if(key === 'search') {
      state.showSearchModal = true;
    }

    // 网页全屏
    if(key === 'fullscreen') {
      toggleFullScreen(index);
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