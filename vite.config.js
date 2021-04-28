import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import";
// import vitePluginImport from 'vite-plugin-babel-import';
import path from 'path'

import mpa from 'vite-plugin-mpa'

const baseUrl = {
  development: './',
  production: '//www.test.com/'
}
const mpConfig = mpa({
})

export default ({ mode }) =>  defineConfig({
  open: false,
  mode,
  base: baseUrl[mode],
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
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    mpConfig,
    styleImport({
      libs: [
        // 按需加载element-plus
        {
          libraryName: "element-plus",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            console.log('name22', name)
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            console.log('name', name)
            return `element-plus/lib/${name}`;
          },
        }
      ],
    })
  ],
  optimizeDeps: {
    include: [
      "element-plus/lib/locale/lang/zh-cn",
      "element-plus/lib/locale/lang/en",
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