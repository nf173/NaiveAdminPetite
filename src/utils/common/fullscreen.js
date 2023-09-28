/**
 * @method 全屏显示元素
 * @param {Element} el - dom元素
 */
export function openFullscreen(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.mozRequestFullScreen) { /* Firefox */
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) { /* Chrome, Safari 和 Opera */
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) { /* IE/Edge */
    el.msRequestFullscreen();
  }
}

/**
 * @method 关闭全屏显示
 * @param {Element} el - dom元素
 */
export function closeFullscreen(el) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari 和 Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}