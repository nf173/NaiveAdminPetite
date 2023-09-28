import SvgIcon from '@/components/common/svg-icon/index.vue';
import { h } from 'vue';
import { NTag } from 'naive-ui';

/* 渲染表头Mode */
export function renderColumnsMode(row) {
  let type = '';
  switch (row.mode) {
    case '轻松':
      type = 'success';
      break;
    case '生存':
      type = 'success';
      break;
    case '荒野':
      type = 'warning';
      break;
    case '无尽':
      type = 'info';
      break;
    case '暗无天日':
      type = 'error';
      break;
  }
  return h(
    NTag, 
    {
      type: type,
      bordered: false
    },
    {
      default: () => row.mode
    }
  );
}

/* 渲染表头Module */
export function renderColumnsModule(row) {
  if(row.module.length !== 0) {
    return h(
      SvgIcon,
      {
        name: 'plugin',
        size: '20'
      }
    )
  } else {
    return '';
  }
}

/* 渲染表头Ping */
export function renderColumnsPing(row) {
  let color = '#18a058';
  if(row.ping === 0) {
    color = '#ccc'
  }
  if (row.ping > 80) {
    color = '#d03050'
  }
  if (row.ping > 60 && row.ping <= 80) {
    color = '#f0a020'
  }
  return h(
    SvgIcon,
    {
      name: 'signal',
      size: '20',
      color: color
    }
  )
}