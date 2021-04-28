import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {initI18n, i18n} from '@/pages/pc/i18n'
import "@/assets/public.less";
// import ElementLocale from 'element-plus/lib/locale'
// ElementLocale.i18n((key, value) => i18n.global.t(key, value))

const app = createApp(App)
initI18n(app)
app.use(router)

app.mount('#app')