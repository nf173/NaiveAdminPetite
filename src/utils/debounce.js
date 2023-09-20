/**
 * @file 函数防抖
 * @author Nanfs
 * @createDate 2023-09-15 16:27:18
 */

import { customRef } from 'vue';

/**
 * @method 自定义防抖Ref
 * @param {String} value 需要防抖的值
 * @param {Number} delay
 */
export function useDebounceRef(value, delay=1000) {
  let timer;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newVal;
          console.log(value);
          trigger();
        }, delay);
      }
    }
  })
}

/**
 * @method 普通防抖
 * @param {Function} callback
 * @param {Number} delay
 */
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