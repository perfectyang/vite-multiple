export default function vitePluginHtmlHash () {
  return {
    name: 'vite-plugin-html-hash',
    apply: 'build', // 构建才调用
    transformIndexHtml (html) {
      return html
    }
  }
}
