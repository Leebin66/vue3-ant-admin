import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import http from './utils/http'

const app = createApp(App)
app.config.globalProperties.$axios = http
console.log(import.meta.env.VITE_APP_TITLE)
app.use(router)
app.mount('#app')
