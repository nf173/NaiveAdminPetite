<template>
  <div class="screen-lock" @mousemove="handleMousemove">
    <div class="dst-mask" v-if="!toEnter">
      <div class="content">
        <img src="../../assets/images/dst_logo_text.png" alt="">
      </div>
      <div class="layers">
        <div class="layers-bg" data-speed="0.2"></div>
        <div class="layer layers-1" data-speed="0.2"></div>
        <div class="layer layers-2" data-speed="0.6"></div>
        <div class="layer layers-3" data-speed="0.8"></div>
      </div>
      <div class="footer">
        <div class="footer_content">
          <div class="standard-time">
            <div class="time">{{ currentTime }}</div>
            <div class="date">{{ currentDate }}</div>
          </div>
          <div class="pig" @click="toEnter = true">
            <img src="../../assets/images/pig.gif" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="control-mask" v-else>
      <div class="content">
        <n-avatar round :src="userStore.avatar" :size="100">
          <SvgIcon name="user" size="60" />
        </n-avatar>
        <span 
          style="margin: 15px 0; 
          font-size: 28px; 
          color: #fff;"
        >
          {{ userStore.nickname || userStore.username }}
        </span>
        <n-input 
          v-model:value="password"
          style="width: 250px; text-align: center;" 
          type="password" 
          placeholder="请输入锁屏密码"
          :maxlength="8"
        >
          <template #suffix>
            <SvgIcon 
              class="btn-enter"
              name="right_arrow" 
              size="18" 
              @click="handleEnter"
            />
          </template>
        </n-input>
        <n-space 
          class="meta" 
          justify="space-between" 
          style="
            width: 100%; 
            margin-top: 20px; 
            padding: 0 10px; 
            color: #fff;"
        >
          <span style="color: ghostwhite;" @click="handleEnter">提示: {{ userStore.lockPwd }}</span>
          <span class="back" style="cursor: pointer;" @click="toEnter = false">返回</span>
        </n-space>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/modules/user';
  import { useMessage } from 'naive-ui';

  const userStore = useUserStore();
  const message = useMessage();

  const toEnter = ref(false);
  const password = ref('');

  const props = defineProps({

  });
  const timer = ref(null);

  const currentTime = ref('');
  const currentDate = ref('');

  function handleMousemove(e) {
    document.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');

      const x = (document.querySelector('.screen-lock').getBoundingClientRect().width - e.pageX*speed) / 10;
      const y = (document.body.clientHeight - e.pageY*speed) / 10;
      
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }

  function getTime() {
    currentTime.value = `${new Date().getHours()}:${new Date().getMinutes()}`;
    timer.value = setInterval(() => {
      currentTime.value = `${new Date().getHours()}:${new Date().getMinutes()}`;
    }, 2000);
  }

  function getDate() {
    const week_arr = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    const week = new Date().getDay();
    currentDate.value = `${ new Date().getMonth() + 1 }月${ new Date().getDate() } 号，${ week_arr[week] }`;
  }

  function handleEnter() {
    if(password.value === userStore.lockPwd) {
      message.success('屏幕解锁, 正在进入系统~');
      
      setTimeout(() => {
        toEnter.value = true;
        userStore.setIsLock(false);
      }, 1000);
    } else {
      message.error('密码错误');
    }
  }

  function init() {
    getTime();
    getDate();
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
    timer.value = null;
  })
</script>

<style lang="scss" scoped>
.screen-lock {
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/lock_bg.jpg');
  overflow: hidden;
  .dst-mask {
    user-select: none;
    position: relative;
    display: flex;
    .content {
      z-index: 99;
      margin: auto;
      margin-top: 100px;
    }
    .layers {
      position: absolute;
      width: 100%;
      height: 80vh;
      overflow: hidden;
      &::before {
        content: '';
        z-index: 9;
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
      }
      &::after {
        content: '';
        z-index: 10;
        background: url('../../assets/images/dst_bg_after.png') repeat-x 50%;
        display: block;
        position: absolute;
        height: 8px;
        width: 100%;
        bottom: 0px;
        z-index: 50;
      }
      
      .layer {
        position: absolute;
        transition: transform .1s linear;
        background-position: center bottom;
        backface-visibility: hidden;
        transform-origin: center;
        transform-style: preserve-3d;
      }
      .layers-bg {
        top: 10%;
        left: 0%;
        width: 100%;
        height: 100%;
        transform-origin: center;
        transform-style: preserve-3d;
        background: url('../../assets/images/dst_layer_bg.jpg');
        background-size: cover;
        background-position: center bottom;
        backface-visibility: hidden;
        transform-origin: center;
        transform-style: preserve-3d;
      }
      .layers-1 {
        z-index: 1;
        left: -18%;
        top: 10%;
        right: 0;
        width: 120%;
        height: 120%;
        background: url('../../assets/images/dst_layer_1.png');
        background-size: contain;
      }
      .layers-2 {
        z-index: 2;
        top: auto;
        left: -3%;
        bottom: -10%;
        width: 753px;
        height: 700px;
        background: url('../../assets/images/dst_layer_2.png');
        background-size: cover;
      }
      .layers-3 {
        z-index: 2;
        top: auto;
        bottom: -10%;
        left: auto;
        right: 3%;
        width: 753px;
        height: 700px;
        background: url('../../assets/images/dst_layer_3.png');
        background-size: cover;
      }
    }
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 20vh;
      padding: 0 80px;
      display: flex;
      align-items: center;
      
      .footer_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100vw - 160px);
        .standard-time {
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          font-family: helvetica;
          color: #333;
          .time { font-size: 70px; }
          .date { font-size: 40px; }
        }
        .pig {
          cursor: pointer;
          display: flex;
          justify-content: flex-end;
          img {
            display: block;
            width: 200px;
            height: auto;
          }
        }
      }
    }
  }
  .control-mask {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: url('@/assets/images/lock_bg_2.jpg');
    background-size: cover;
    background-position: center;
    &::before {
      content: '';
      z-index: 9;
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2);
    }
    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .btn-enter {
        cursor: pointer;
        color: #999;
        &:hover {
          color: #444;
        }
      }
      .meta {
        .back {
          &:hover {
            color: #36ad6a;
          }
        }
      }
    }
  }
}
</style>