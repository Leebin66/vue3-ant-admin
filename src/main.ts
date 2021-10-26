import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

const app = createApp(App)

console.log(import.meta.env.VITE_APP_TITLE)
app.use(router)
app.mount('#app')
