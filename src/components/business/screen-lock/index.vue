<template>
  <div class="screen-lock" :class="{ control: controlShow }">
    <transition name="fade" mode="out-in">
      <LockMask @unlock="controlShow = true;" v-if="!controlShow" />
      <LockControl @back="controlShow = false;" v-else />
    </transition>
  </div>
</template>

<script setup>
  import LockMask from './lock-mask.vue';
  import LockControl from './lock-control.vue';
  
  const controlShow = ref(false);

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
  });

  onBeforeUnmount(() => {
    window.onpopstate = null;
  });
</script>

<style lang="scss" scoped>
  .screen-lock {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url('@/assets/images/lock_bg.jpg');
    background-size: cover;
    background-position: center;
    &::before {
      content: '';
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: .75;
      transition: opacity .6s ease;
    }
    &.control::before {
      opacity: .35;
    }
  }
</style>