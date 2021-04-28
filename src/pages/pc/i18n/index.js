import { createI18n } from "vue-i18n";
// import ElementPlus from 'element-plus'
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
  }
}
const i18n = createI18n({
  legacy: true,
  locale: 'zh-cn',
  fallbackLocale: enLocale.name,
  messages: localesConfigs
})
ElementLocale.i18n(i18n.global.t)
console.log(i18n.global.locale)
// i18n.global.locale.value = 'zh-cn'

export function initI18n (app) {
  // app.use(ElementPlus, {
  //   i18n: i18n.global.t
  // })
  app.use(i18n)
}