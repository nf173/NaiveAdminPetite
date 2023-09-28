import SvgIcon from '@/components/common/svg-icon/index.vue';

export const renderIcon = (icon, option) => {
  return () => h(SvgIcon, { name: icon, size: option?.size, color: option?.color }, null)
}