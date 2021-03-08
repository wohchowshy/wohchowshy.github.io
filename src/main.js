import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/dark.css'
import 'highlight.js/styles/vs2015.css'
import 'github-markdown-css/github-markdown.css'

createApp(App).use(store).use(router).mount('#app')
