import { createApp } from 'vue'
import { initI18n } from '@/pages/pc/i18n'
import App from './App.vue'
import router from './router/index'
import '@/assets/public.less'

const app = createApp(App)
initI18n(app)
app.use(router)
app.mount('#app')
