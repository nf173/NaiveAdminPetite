/**
 * @method 生成范围内随机整数
 * @param {Number} min - 最小值
 * @param {Number} max - 最大值
 */
export function randomNum(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

/**
 * @method 生成随机RGBA颜色
 * @param {Number} min - 最小值
 * @param {Number} max - 最大值
 * @param {Boolean} alpha - 是否随机透明度
 */
export function randomColor(min, max, isAlpha) {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  if(!isAlpha) return `rgb(${r},${g},${b})`;

  const a = randomNum(1, 10) / 10;
  return `rgba(${r},${g},${b},${a})`;
}