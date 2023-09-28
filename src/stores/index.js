import pinia from './store';
import { useAuthStore } from './modules/auth';
import { useSettingStore } from './modules/setting';
import { useMenuStore } from './modules/menu';

export function useAuthStoreHook() {
  return useAuthStore(pinia);
}

export function useSettingStoreHook() {
  return useSettingStore(pinia);
}

export {
  useAuthStore,
  useMenuStore,
  useSettingStore,
};