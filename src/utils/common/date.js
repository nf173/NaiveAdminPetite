/**
 * @method 日期格式化函数
 * @param {Date} date
 * @param {Function} callback - [可选]自定义返回格式
 * @param {String} year - 年
 * @param {String} month - 月
 * @param {String} day - 日
 * @description 示例: yyyy-mm-dd
 */
export function formatDate(date, callback) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if(!callback) return `${pad(year, 4)}-${pad(month)}-${pad(day)}`;

  return callback(pad(year, 4), pad(month, 1), pad(day));
}


/**
 * @method 时间格式化函数
 * @param {Date} date 
 * @param {Function} callback - 自定义返回格式
 * @param {String} hour - 时
 * @param {String} minute - 分
 * @param {String} second - 秒
 * @description 示例: hh:mm:ss
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
 * @param {*} target 填充对象
 * @param {*} len 填充位数 
 * @param {*} str 填充物
 */
function pad(target, len = 2, str = '0') {
  return target.toString().padStart(len, str);
}
