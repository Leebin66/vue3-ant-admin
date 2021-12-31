import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'
import router from './router/index'

import http from './utils/http'

import './assets/scss/reset.scss'

const app = createApp(App)
app.config.globalProperties.$axios = http
console.log(import.meta.env.VITE_APP_TITLE)
app.use(router)
app.mount('#app')
