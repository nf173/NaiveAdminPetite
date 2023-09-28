import { ref } from 'vue';
import { randomNum, randomColor } from '@/utils/common/random';
import { useAuthStoreHook } from '@/stores';

/**
 * @method 绘制图形验证码
 * @param width - 图形宽度
 * @param height - 图形高度
 */
export function useImageVerify(codeRef, width = 152, height = 40) {
  const authStore = useAuthStoreHook();
  
  const imgCode = ref('');

  function getImgCode() {
    if (!codeRef.value) return;
    imgCode.value = draw(codeRef.value, width, height);
    authStore.imgCode = imgCode.value;
  }

  return {
    imgCode,
    getImgCode
  };
}

function draw(dom, width, height) {
  let imgCode = '';

  const NUMBER_STRING = '0123456789';

  const ctx = dom.getContext('2d');
  if (!ctx) return imgCode;

  ctx.fillStyle = randomColor(180, 230);
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 4; i += 1) {
    const text = NUMBER_STRING[randomNum(0, NUMBER_STRING.length)];
    imgCode += text;
    const fontSize = randomNum(18, 41);
    const deg = randomNum(-30, 30);
    ctx.font = `${fontSize}px Simhei`;
    ctx.textBaseline = 'top';
    ctx.fillStyle = randomColor(80, 150);
    ctx.save();
    ctx.translate(30 * i + 23, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(text, -15 + 5, -15);
    ctx.restore();
  }
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(randomNum(0, width), randomNum(0, height));
    ctx.lineTo(randomNum(0, width), randomNum(0, height));
    ctx.strokeStyle = randomColor(180, 230);
    ctx.closePath();
    ctx.stroke();
  }
  for (let i = 0; i < 41; i += 1) {
    ctx.beginPath();
    ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = randomColor(150, 200);
    ctx.fill();
  }

  return imgCode;
}
