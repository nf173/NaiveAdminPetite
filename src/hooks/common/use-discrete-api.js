import { useSettingStoreHook } from '@/stores';
import { 
  createDiscreteApi,
  lightTheme,
  darkTheme
} from "naive-ui";


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

export const message = discreteApi.message;
export const notification = discreteApi.notification;
export const dialog = discreteApi.dialog;
export const loadingBar = discreteApi.loadingBar;