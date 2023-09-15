import { defineStore } from 'pinia';
import { websiteConfig } from '@/config/website.config';

export const useConfigStore = defineStore('config', () => {
  const siteConfig = reactive({
    ...websiteConfig
  });

  return {
    siteConfig
  }
});