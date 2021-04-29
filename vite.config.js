import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import styleImport from "vite-plugin-style-import";
import vitePluginImport from 'vite-plugin-babel-import';
import path from 'path'

import mpa from 'vite-plugin-mpa'

const baseUrl = {
  development: './',
  production: '//www.test.com/'
}
const mpConfig = mpa({
})

 function myPlugin() {
  const virtualFileId = '@my-virtual-file'

  return {
    name: 'my-plugin', // 必须的，将会显示在 warning 和 error 中
    apply: 'build', // serve
    // resolveId(id) {
    //   if (id === virtualFileId) {
    //     return virtualFileId
    //   }
    // },
    // load(id) {
    //   if (id === virtualFileId) {
    //     return `export const msg = "from virtual file"`
    //   }
    // },
    // transform(src, id) {
    //   // console.log('src', src)
    // },
    transformIndexHtml(html) {
      console.log(('在这果', html))
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>新加在的东要</title>`
      )
    }
  }
}

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
      '@': path.resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-browser.prod.js'
    }
  },
  plugins: [
    vue(),
    mpConfig,
    myPlugin(),
    vitePluginImport([
      {
          libraryName: 'element-plus',
          libraryDirectory: 'es',
          style(name) {
              return `element-plus/lib/theme-chalk/${name}.css`;
          }
      }
    ])
    // styleImport({
    //   libs: [
    //     // 按需加载element-plus
    //     {
    //       libraryName: "element-plus",
    //       esModule: true,
    //       ensureStyleFile: true,
    //       resolveStyle: (name) => {
    //         console.log('name22', name)
    //         return `element-plus/lib/theme-chalk/${name}.css`;
    //       },
    //       resolveComponent: (name) => {
    //         console.log('name', name)
    //         return `element-plus/lib/${name}`;
    //       },
    //     }
    //   ],
    // })
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
