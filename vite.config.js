import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImport from 'vite-plugin-babel-import'
import mpa from 'vite-plugin-mpa'
import viteESLint from '@ehutch79/vite-eslint'
import vitePluginAutoInject from './plugins/vite-plugin-auto-inject/index.js'
import { loadEnv } from './build/loadEnv'

const {VITE_BASE_URL} = loadEnv()
export default (_) =>  defineConfig({
  open: false,
  base: VITE_BASE_URL,
  build: {
    assetsDir: 'assets',
    manifest: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'static/css/[name].css',
        chunkFileNames: 'static/js/[name].js',
        entryFileNames: 'static/js/[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-browser.prod.js'
    }
  },
  plugins: [
    vue(),
    mpa({}),
    viteESLint(),
    vitePluginAutoInject([
      {
        libraryName: 'element-plus',
        elementTagReg: '^el-' // 在template中组件使用的标识匹配规则
      }
    ]),
    vitePluginImport([
      {
          libraryName: 'element-plus',
          libraryDirectory: 'es',
          style (name) {
              return `element-plus/lib/theme-chalk/${name}.css`;
          }
      }
    ])
  ],
  optimizeDeps: {
    include: [
      'element-plus/lib/locale/lang/zh-cn',
      'element-plus/lib/locale/lang/en'
    ]
  },
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
