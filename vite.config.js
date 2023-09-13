/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:08
 * @LastEditTime: 2023-09-12 16:38:31
 * @LastEditors: nanfs
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { fileURLToPath, URL } from 'node:url';
import { viteMockServe } from "vite-plugin-mock";

import path from 'path';

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      host: 'localhost',
      port: 8888,
      open: true,
      proxy: {
        '/api': {
          // 接口域名
          target: 'http://localhost:8888/api',
          // 是否支持跨域
          changeOrigin: true,
          // 是否支持 https
          secure: true,
          // 重置路径
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },

    plugins: [
      vue(),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ],
      }),
      createSvgIconsPlugin({
        // 指定要缓存的文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: '[name]'
      }),
      viteMockServe({
        mockPath: 'mock',
        watchFiles: false,
        localEnabled: command === "serve" && mode === "mock",
      })
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/main.scss";`
        }
      }
    },
  }
})
