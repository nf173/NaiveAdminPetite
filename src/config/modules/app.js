export const app = {
  // 站点基本设置
  logo: new URL('@/assets/images/logo.png', import.meta.url).href,
  title: 'NaiveAdminPetite',
  description: '',

  baseHome: '/dashboard/console',
  
  // 站点主题
  theme: 'light',
  // 站点语言
  language: 'zh',

  // 顶栏反转色
  topInverted: false,
  // 侧栏反转色
  siderInverted: false,
  // 侧栏折叠
  siderCollapsed: false,

  // 多页标签
  tabsShow: true,

  // 站点动画
  animation: true,
  activeAnimation: 'slide',
  animationType: [
    {
      key: 'fade',
      value: '淡入',
    }, 
    {
      key: 'slide',
      value: '滑动',
    },
    {
      key: 'zoom',
      value: '缩放',
    }
  ],
};