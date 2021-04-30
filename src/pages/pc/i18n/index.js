import { createI18n } from 'vue-i18n'
import enLocale from 'element-plus/es/locale/lang/en'
import zhLocale from 'element-plus/es/locale/lang/zh-cn'
import { i18n as elI18n } from 'element-plus/es/locale'

export const localesConfigs = {
  [enLocale.name]: {
    el: enLocale.el,
    首页: 'Home'
  },
  [zhLocale.name]: {
    el: zhLocale.el,
    首页: '首页'
  }
}
export const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: enLocale.name,
  messages: localesConfigs
})

export function initI18n (app) {
  elI18n(i18n.global.t)
  app.use(i18n)
}
