import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/darkmode.css'
import './assets/lightmode.css'
import './assets/headerbar.css'

createApp(App).use(store).use(router).mount('#app')
