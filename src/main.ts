import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './shared/style.scss'
import App from './App.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', component: App }],
})
createApp(App).mount('#app')
