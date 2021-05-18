import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 覆盖样式变量
        modifyVars: {
          'text-color': '#111',
          'border-color': '#eee',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },

  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        }
      ]
    })
  ]
});
