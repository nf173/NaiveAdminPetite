<template>
  <div class="screen-lock" :class="{ unlock: isControlDisplayShow }">
    <div class="content">
      <transition name="fade" mode="out-in">
        <TimeDisplay v-if="!isControlDisplayShow" @unlock="isControlDisplayShow = true" />
        <ControlDisplay @back="isControlDisplayShow = false" v-else />
      </transition>
    </div>
  </div>
</template>

<script setup>
  import TimeDisplay from './components/TimeDisplay.vue';
  import ControlDisplay from './components/ControlDisplay.vue';

  const isControlDisplayShow = ref(false);

  function init() {
    //禁止浏览器上一步下一步
    window.onpopstate = () => {
      history.pushState(null, null, document.URL);
    }
    window.oncontextmenu = () => {
      return false;
    }
  }

  onMounted(() => {
    init();
  })

  onBeforeUnmount(() => {
    window.onpopstate = null;
  })
</script>

<style lang="scss" scoped>
.screen-lock {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/lock_bg_2.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  &::before {
    content: '';
    z-index: 8;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: .75;
    transition: opacity .5s ease;
  }
  &.unlock::before {
    opacity: .25;
  }
  .content {
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>