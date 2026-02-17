import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { initTheme } from './composables/useTheme'

// Initialize global theme (reads localStorage and applies document classes)
initTheme()

const app = createApp(App)

app.use(router)

app.mount('#app')


