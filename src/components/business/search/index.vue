<template>
  <n-modal preset="card" v-model:show="state.showSearchModal" :closable="false" :aria-modal="true" :style="{
    width: '600px',
    position: 'fixed',
    top: '100px',
    left: '50%',
    transform: 'translate(-50%)'
  }" @update:show="(value) => {
  $emit('update:modelValue', value);
}">
    <n-input ref="searchRef" type="text" size="large" placeholder="请输入关键词搜索" v-model:value="state.inputValue"
      :loading="state.loading" @update:value="handleUpdate" />

    <template #footer>
      <n-scrollbar style="max-height: 180px" v-if="state.searchResult.length > 0">
        <n-list hoverable clickable>
          <n-list-item v-for="(item, index) in state.searchResult" :key="index">
            <template #prefix>
              <SvgIcon :name="item.meta.icon" size="18" color="#666" />
            </template>
            {{ item.meta.title }}
            <template #suffix>
              <SvgIcon name="enter" size="18" color="#666" />
            </template>
          </n-list-item>
        </n-list>
      </n-scrollbar>
      <n-empty description="什么也没找到" v-else />
    </template>
    <template #action>
      <div class="keyboard">
        <div class="key">
          <div class="svg">
            <SvgIcon name="enter" size="16" />
          </div>
          <span class="text">
            回车
          </span>
        </div>
        <div class="key">
          <div class="svg">
            <SvgIcon name="close" size="16" />
          </div>
          <span class="text">
            ESC
          </span>
        </div>
      </div>
    </template>
  </n-modal>
</template>

<script setup>
import { debounce } from '@/utils';
import { fixedRoutes } from '@/router/index';

const state = reactive({
  // 是否显示搜索框
  showSearchModal: false,
  // 搜索框是否加载
  loading: false,
  // 搜索框内容
  inputValue: '',
  // 搜索结果
  searchResult: []
})


const handleUpdate = debounce(() => {
  searchMenu();
}, 200);

function searchMenu() {

  const menuResult = [];
  fixedRoutes.forEach(route => {
    menuResult.push(route);
    if (route.children) {
      menuResult.push(...route.children);
    }
  });
  // state.searchResult = menuResult.filter(item => !item.hidden && (item.meta.title && item.meta.title.indexOf(state.inputValue)));
  // console.log(state.searchResult);
}
</script>

<style lang="scss" scoped>
.keyboard {
  display: flex;
  align-items: center;

  .key {
    display: flex;
    align-items: center;
    margin-right: 15px;

    .svg {
      margin-right: 5px;
      padding: 0 5px;
      border-radius: 2px;
      box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
      color: #555;
    }

    .text {
      line-height: 1em;
      color: #969faf;
    }
  }
}
</style>