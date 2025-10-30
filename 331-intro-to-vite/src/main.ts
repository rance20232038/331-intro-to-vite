import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'  // 添加这行
import './assets/main.css'  // 修改为main.css
import { inject } from '@vercel/analytics'


const pinia = createPinia()

const app = createApp(App)

inject()

app.use(pinia)
app.use(router)


app.mount('#app')
