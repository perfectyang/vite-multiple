import { createI18n } from "vue-i18n";
import ElementLocale from 'element-plus/lib/locale'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
export const localesConfigs = {
  [enLocale.name]: {
    el: enLocale.el,
    '首页': 'Home'
  },
  [zhLocale.name]: {
    el: zhLocale.el,
    '首页': '首页'
  },
  testLocale: {
    el: {}
    // 没有定义 message 字段，会 fallback 回到 en 去.
  }
}
export const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: enLocale.name,
  messages: localesConfigs
})
ElementLocale.i18n(i18n.global.t)
export function initI18n (app) {
  app.use(i18n)
}