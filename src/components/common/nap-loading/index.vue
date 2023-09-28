<template>
  <transition name="card-load-fade">
    <div class="p-card-loading" v-if="loading">
      <slot name="loading" v-if="customLoading">Custom Loading</slot>
      <div class="p-card-loading_wave" v-else>
        <span v-for="(item, index) in spans" :key="index"
          :style="{ '--delay': item, background: color }">
        </span>
      </div>
    </div>
  </transition>
</template>

<script setup>
  const props = defineProps({
    loading: {
      type: Boolean,
      default: false
    },
    customLoading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#36ad6a'
    }
  })

  const spans = ['-1.1s', '-1.0s', '-0.9s', '-0.8s', '-0.7s'];
</script>

<style lang="scss" scoped>
  .p-card-loading {
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;

    .p-card-loading_wave {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 6px;
        height: 28px;
        margin: 0 1px;
        animation: wave 1.1s infinite ease-in-out;
        animation-delay: var(--delay);
      }
    }

    @keyframes wave {
      0%,
      40%,
      100% {
        transform: scale(.4);
      }

      20% {
        transform: scale(1);
      }
    }
  }

  .card-load-fade-enter-from,
  .card-load-fade-leave-to {
    opacity: 0;
  }

  .card-load-fade-enter-active,
  .card-load-fade-leave-active {
    transition: opacity .3s ease;
  }
</style>