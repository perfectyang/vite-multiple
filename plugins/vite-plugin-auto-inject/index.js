import fs from 'fs'
import transformSrcCode from './core'

export default function vitePluginAutoInject (options) {
  return {
    name: 'vite-plugin-auto-inject',
    load(id) {
      if (/\.(vue)$/.test(id)) {
        const content = fs.readFileSync(id, 'utf-8')
        return {
          code: transformSrcCode(content, options),
          map: null
        }
      }
    }
    // transform(id) {
    //   if (/\.(vue)$/.test(id)) {
    //     console.log('中文', id)
    //   }
    // }
  }
}

