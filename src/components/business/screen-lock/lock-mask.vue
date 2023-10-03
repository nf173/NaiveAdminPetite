<template>
  <div class="lock-mask">
    <div class="lock-btn" @click="handleUnlockClick">
      <SvgIcon name="lock" size="120" />
    </div>
    <div class="date-time">
      <span class="time">{{ currentTime }}</span>
      <span class="date">{{ currentDate }}</span>
    </div>
  </div>
</template>

<script setup>
  import { formatDate, formatTime } from '@/utils';

  const emit = defineEmits(['unlock']);

  const timer = ref(null);
  const currentTime = ref('');
  const currentDate = ref('');

  function runTimer() {
    getTime();
    getDate();
    timer.value = setInterval(() => {
      getTime();
      getDate();
    }, 1000);
  }

  function getTime() {
    currentTime.value = formatTime(new Date(), (h, m) => {
      return `${h}:${m}`;
    });
  }

  function getDate() {
    const week_arr = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    const week = new Date().getDay();
    currentDate.value = formatDate(new Date(), (y, m, d) => {
      return `${m}月${d}日，${week_arr[week]}`;
    });
  }

  function handleUnlockClick() {
    emit('unlock');
  }

  onMounted(() => {
    runTimer();
  });

  onBeforeUnmount(() => {
    timer.value = null;
  })

</script>

<style lang="scss" scoped>
  .lock-mask {
    z-index: 2;
    position: relative;
    width: 100%;
    height: 100%;
    color: #ffffffd9;
    .lock-btn {
      position: absolute;
      top: 46%;
      left: 50%;
      transform: translate(-50%, -50%);
      .svg-icon {
        cursor: pointer;
        opacity: .45;
        transition: all .3s ease;
        transform-origin: center;
        &:hover {
          opacity: .85;
          transform: scale(1.02);
        }
        &:active {
          opacity: 1;
        }
      }
    }
    .date-time {
      position: absolute;
      left: 3%;
      bottom: 5%;
      display: flex;
      flex-direction: column;
      .time {
        font-size: 80px;
      }
      .date {
        font-size: 40px;
      }
    }
  }
</style>