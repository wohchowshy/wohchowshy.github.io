import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
// import './assets/css/darkmode.css'
// import './assets/css/lightmode.css'
// import './assets/css/headerbar.css'
// import './assets/css/introcard.css'

createApp(App).use(store).use(router).mount('#app')
