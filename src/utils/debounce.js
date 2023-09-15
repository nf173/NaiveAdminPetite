/*
 * @Author: nanfs
 * @Date: 2023-09-07 23:45:06
 * @LastEditTime: 2023-09-08 12:14:20
 * @LastEditors: nanfs
 * @Description 自定义防抖Ref
 */
import { customRef } from 'vue';

export function useDebounceRef(value, delay=1000) {
  let timer;
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖
        track();
        return value;
      },
      set(newVal) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newVal;
          console.log(value);
          // 派发更新
          trigger();
        }, delay);
      }
    }
  })
}

export function debounce(callback, delay=1000) {
  let timer;
  return function() {
    clearTimeout(timer);
    let args = arguments;
    timer = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  }
}