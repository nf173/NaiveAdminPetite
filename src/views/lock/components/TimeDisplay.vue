<template>
  <div class="time-display">
    <SvgIcon 
      class="lock" 
      name="lock" 
      size="80" 
      @click="handleUnlock"  
    />
    <span class="time">{{ currentTime }}</span>
    <span class="date">{{ currentDate }}</span>
  </div>
</template>

<script setup>
  import { formatDate, formatTime } from '@/utils/format';

  const emit = defineEmits(['unlock']);

  const timer = ref(null);
  const currentTime = ref('');
  const currentDate = ref('');

  // 获取时间
  function getTime() {
    currentTime.value = formatTime(new Date(), (h, m) => {
      return `${h}:${m}`;
    });
  }

  // 获取日期
  function getDate() {
    const week_arr = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    const week = new Date().getDay();
    currentDate.value = formatDate(new Date(), (y, m, d) => {
      return `${m}月${d}日，${week_arr[week]}`;
    });
  }

  function runTimer() {
    getTime();
    getDate();
    timer.value = setInterval(() => {
      getTime();
      getDate();
    }, 1000);
  }

  function handleUnlock() {
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
.time-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.85);
  font-family: helvetica;
  margin-bottom: 200px;
  .lock {
    cursor: pointer;
    margin-bottom: 100px;
    color: #fff;
    opacity: .45;
    transition: opacity .3s ease, transform .2s ease;
    &:hover {
      opacity: .75;
      transform: scale(1.1);
      transform-origin: center;
    }
    &:active {
      opacity: 1;
    }
  }
  .time {
    font-size: 80px;
  }
  .date {
    font-size: 40px;
  }
}
</style>