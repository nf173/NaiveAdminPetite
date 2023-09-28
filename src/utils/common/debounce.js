import { customRef } from 'vue';

/**
 * @method 普通防抖函数
 * @param {Function} callback - 回调函数
 * @param {Number} delay - 延迟时间
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


/**
 * @method 自定义防抖Ref
 * @param {String} value - 需要防抖的值
 * @param {Number} delay - 延迟时间
 * @description 将普通ref对象变成防抖处理后的ref对象
 * 提示: 经测试, 此方法对大多数UI框架封装的input组件无效
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