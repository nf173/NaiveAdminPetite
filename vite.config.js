/*
 * @Author: nanfs
 * @Date: 2023-09-04 14:47:08
 * @LastEditTime: 2023-09-12 16:38:31
 * @LastEditors: nanfs
 * @Description: 
 */
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { fileURLToPath, URL } from 'node:url';
import { viteMockServe } from "vite-plugin-mock";
import { defineConfig } from 'vite';


export default defineConfig(({ command, mode }) => {
  return {
    publicPath: './',
    server: {
      open: true,  
      host: 'localhost',  // 指定服务器主机名
      port: 8888,
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
        mockPath: 'src/mock',
        watchFiles: false,
        localEnabled: command === "serve" && mode === "mock",
        prodEnabled: true,
        logger: true,
        enable: true
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
          additionalData: `@import "@/assets/scss/main.scss";`
        }
      }
    },
  }
})
