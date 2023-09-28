import { useSettingStoreHook } from '@/stores';

const settingStore = useSettingStoreHook();

export default [
  {
    path: '/',
    name: 'Root',
    meta: {
      hidden: true,
    },
    redirect: settingStore.baseHome
  }
];