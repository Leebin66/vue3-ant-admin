import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

console.log(import.meta.env.VITE_APP_TITLE)

app.mount('#app')
