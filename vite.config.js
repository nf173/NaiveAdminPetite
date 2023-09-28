import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { fileURLToPath, URL } from 'node:url';
import { viteMockServe } from "vite-plugin-mock";
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  return {
    publicPath: './',
    server: {
      open: true,  
      host: 'localhost',
      port: 8888,
      proxy: {
        '/api': {
          target: 'http://localhost:3000/api',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    build: {
      rollupOptions: {
        manualChunks(id) {
          // 打包优化
          if(id.includes('node_modules')) {
            return 'vender';
          }
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
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: '[name]'
      }),
      viteMockServe({
        mockPath: 'src/mock',
        watchFiles: false,
        localEnabled: command === 'serve' && process.env.NODE_ENV === 'development',
        prodEnabled: command !== 'serve' && true,
        logger: false
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  }
})

