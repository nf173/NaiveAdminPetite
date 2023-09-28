<template>
  <div class="tabs-view">
    <n-scrollbar x-scrollable>
      <draggable
        class="tags"
        item-key="fullPath" 
        animation="200"
        :list="tabsList"
      >
        <template #item="{ element }">
          <n-el
            tag="div" 
            class="tag-card"
            :class="element.name === route.name ? 'active' : ''"
            @click.stop="tabClick(element.name)"
            @contextmenu="handleContextMenu($event, element)">
            <n-ellipsis 
              style="max-width: 110px"
            >
              {{ element.meta?.title }}
            </n-ellipsis>
            <SvgIcon 
              name="close" 
              v-if="!element.meta?.affix"
              @click.stop="closeTab(element)"
            />
          </n-el>
        </template>
      </draggable>
    </n-scrollbar>
    
    <n-dropdown
      placement="bottom-start"
      :show="showDropdown"
      :x="dropdownX"
      :y="dropdownY"
      :options="tabsMenuOptions"
      @clickoutside="handleClickOutside"
      @select="handleSelect"
    />
  </div>
</template>

<script setup>
  import Draggable from 'vuedraggable';
  import { useRoute, useRouter } from 'vue-router';
  import { useTabsStore } from '@/stores/tabs';
  import { useMessage } from 'naive-ui';
  import { websiteConfig } from '@/config/website.config';
  import { renderIcon } from '@/utils/renderer';
  import { nextTick } from 'vue';

  const route = useRoute();
  const router = useRouter();

  const message = useMessage();

  const tabsStore = useTabsStore();

  // 当前右键快捷菜单
  const activeRoute = ref(null);

  // 标签页列表
  const tabsList = computed(() => tabsStore.tabsList);

  // 是否显示右键菜单
  const showDropdown = ref(false);
  const dropdownX = ref(0);
  const dropdownY = ref(0);

  // 当前路由是否与右键标签的路由相同
  const isCurrent = ref(true);
  // 当前路由是否是固定路由
  const isAffix = ref(true);

  // 监听页面切换
  watch(
    () => route.fullPath,
    () => {
      tabsStore.addTab(router.currentRoute.value);
    },
    { immediate: true }
  );

  // 右键菜单配置项
  const tabsMenuOptions = computed(() => {
    const isDisabled = tabsStore.tabsList.length <= 1;
    return [
      {
        label: '刷新当前',
        key: 'refresh',
        disabled: !isCurrent.value,
        icon: renderIcon('refresh', { size: '18' })
      },
      {
        label: '关闭当前',
        key: 'close_current',
        disabled: isAffix.value || isDisabled,
        icon: renderIcon('minimized', { size: '18' })
      },
      {
        label: '关闭其他',
        key: 'close_other',
        disabled: isAffix.value || isDisabled || tabsStore.tabsList.length === 2,
        icon: renderIcon('other', { size: '18' })
      },
      {
        label: '关闭全部',
        key: 'close_all',
        disabled: isDisabled,
        icon: renderIcon('close', { size: '16' })
      },
    ];
  });

  /**
   * @description: 标签点击切换页面
   * @param {*} routeName
   * @return {*}
   */  
  function tabClick(routeName) {
    if(route.name !== routeName) {
      router.push({
        name: routeName
      });
    }
  }

  /**
   * @description: 标签右键打开菜单
   * @return {*}
   */
  function handleContextMenu(e, item) {
    e.preventDefault();
    activeRoute.value = item;
    
    isCurrent.value = item.path === router.currentRoute.value.path;
    isAffix.value = item.meta.affix ? true : false;
    showDropdown.value = false;
    nextTick().then(() => {
      showDropdown.value = true;
      dropdownX.value = e.clientX;
      dropdownY.value = e.clientY;
    });
  }

  /**
  * @description: 右键菜单选中事件
  * @param {*} key
  * @return {*}
  */
  function handleSelect(key, option) {
    switch (key) {
      // 刷新
      case 'refresh':
        reloadPage();
        message.success('页面已刷新');
        break;
      // 关闭当前
      case 'close_current':
        closeTab(activeRoute.value);
        message.success('标签页关闭');
        break;
      // 关闭其他
      case 'close_other':
        closeOtherTab(activeRoute.value);
        message.success('其他标签页关闭');
        break;
      // 关闭所有
      case 'close_all':
        closeAll();
        message.success('标签页全部关闭');
        break;
    }
    showDropdown.value = false;
  }

  /**
   * @description: 点击外部关闭菜单
   * @return {*}
   */
  function handleClickOutside() {
    showDropdown.value = false;
  }

  /**
   * @description: 刷新页面
   * @return {*}
   */
  const reloadPage = () => {
    router.push({
      path: route.path,
    });
  };

  /**
  * @description: 关闭全部
  * @return {*}
  */
  const closeAll = () => {
    tabsStore.removeAllTabs();
    router.replace(websiteConfig.baseHome);
  };

  /**
  * @description: 关闭当前
  * @return {*}
  */
  function closeTab(route) {
    tabsStore.removeTab(route);

    // 如果关闭的是当前页
    if (router.currentRoute.value.fullPath === route.fullPath) {
      const currentRoute = tabsList.value[Math.max(0, tabsList.value.length - 1)];
      router.push(currentRoute);
    }
  }

  /**
  * @description: 关闭其他
  * @return {*}
  */
  function closeOtherTab(route) {
    tabsStore.removeOtherTab(route);
    router.replace(route.fullPath);
  }

</script>

<style lang="scss" scoped>
.tabs-view {
  padding: 8px 10px 8px 10px;
  .tags {
    display: flex;
    .tag-card {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 32px;
      color: var(--text-color-1);
      margin-right: 6px;
      padding: 6px 16px 4px;
      border-radius: var(--n-border-radius);
      background-color: var(--card-color);
      transition: color .3s var(--n-bezier), background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier);
      &:hover {
        color: var(--text-color-3);
        
      }
      &.active {
        color: var(--primary-color);
      }
      .svg-icon {
        margin-left: 5px;
        color: var(--text-color-3);
        &:hover {
          color: var(--text-color-1);
        }
      }
    }
  }
}
</style>