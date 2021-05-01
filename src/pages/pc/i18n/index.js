import { createI18n } from 'vue-i18n'
import enLocale from 'element-plus/es/locale/lang/en'
import zhLocale from 'element-plus/es/locale/lang/zh-cn'
import gbLocale from 'element-plus/es/locale/lang/zh-tw'
import { i18n as elI18n } from 'element-plus/es/locale'
import zh from './config/zh'
import gb from './config/gb'
import en from './config/en'

console.log('zh', zh)
console.log('zh', en)

export const localesConfigs = {
  [zhLocale.name]: {
    el: zhLocale.el,
    ...zh
  },
  [gbLocale.name]: {
    el: gbLocale.el,
    ...gb
  },
  [enLocale.name]: {
    el: enLocale.el,
    ...en
  }
}
export const i18n = createI18n({
  locale: 'zh-tw', // en zh-cn zh-tw
  fallbackLocale: enLocale.name,
  messages: localesConfigs
})

export function initI18n (app) {
  elI18n(i18n.global.t)
  app.use(i18n)
}
