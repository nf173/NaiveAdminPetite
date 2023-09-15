import { computed } from 'vue';
import { createDiscreteApi, darkTheme, lightTheme } from 'naive-ui';
import appSetting from '../settings/appSetting';

const theme = appSetting.navTheme;
const configProviderPropsRef = computed(() => ({
  theme: theme === "light" ? lightTheme : darkTheme
}));

export const { message, loadingBar } = createDiscreteApi(["message", "loadingBar"], {
  configProviderProps: configProviderPropsRef
});