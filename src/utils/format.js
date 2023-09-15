/**
 * @file 格式化函数库
 * @author Nanfs
 * @createDate 2023-09-15 16:27:18
 */


/**
 * @method 日期格式化函数
 * @param {Date} date
 * @param {Function} callback 自定义返回格式
 * @returns {*} 返回格式化后日期
 * @desc 示例: yyyy-mm-dd
 */
export function formatDate(date, callback) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if(!callback) {
    return `${pad(year, 4)}-${pad(month)}-${pad(day)}`;
  }
  return callback(pad(year, 4), pad(month, 1), pad(day));
}

/**
 * @method 时间格式化函数
 * @param {Date} date 
 * @param {Function} callback 自定义返回格式
 * @returns {*} 返回格式化后时间
 * @desc 示例: hh:mm:ss
 */
export function formatTime(date, callback) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  if(!callback) {
    return `${pad(hour)}:${pad(minute)}:${pad(second)}`;
  }
  return callback(pad(hour), pad(minute), pad(second));
}

/**
 * @method 填充字符串长度
 * @param {*} timeEl 填充对象
 * @param {*} len 填充位数 
 * @param {*} str 填充物
 * @returns {*} 返回填充后的字符串
 * @desc 
 */
function pad(timeEl, len = 2, str = '0') {
  return timeEl.toString().padStart(len, str);
}
