import { useAuthStore } from './modules/auth';
import { useSettingStore } from './modules/setting';
import { useMenuStore } from './modules/menu';
import { useTabsStore } from './modules/tabs';
import pinia from './store';

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
  useTabsStore
};