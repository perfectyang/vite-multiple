import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {initI18n, i18n} from '@/pages/pc/i18n'
import "@/assets/public.less";
const app = createApp(App)
initI18n(app)
app.use(router)

app.mount('#app')