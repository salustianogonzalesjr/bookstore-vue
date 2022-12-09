import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { TailwindPagination } from 'laravel-vue-pagination';  

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('TailwindPagination', TailwindPagination);

app.mount('#app')



