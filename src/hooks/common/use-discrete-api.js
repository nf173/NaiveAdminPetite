import { 
  createDiscreteApi,
  lightTheme,
  darkTheme
} from "naive-ui";
import { useSettingStoreHook } from '@/stores';

const settingStore = useSettingStoreHook();

const configProviderPropsRef = computed(() => ({
  theme: settingStore.theme === "light" ? lightTheme : darkTheme
}));

const discreteApi = createDiscreteApi(
  [
    "message", 
    "dialog", 
    "notification", 
    "loadingBar"
  ],
  {
    configProviderProps: configProviderPropsRef
  }
);

export const Window = {
  message: discreteApi.message,
  notification: discreteApi.notification,
  dialog: discreteApi.dialog,
  loadingBar: discreteApi.loadingBar
}