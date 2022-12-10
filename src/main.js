import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
console.log(import.meta.env.VITE_APP_API_URL);

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        console.log('interceptors token >>> ' + token );

        // if (token) {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            // config.headers['Authorization'] = `Bearer 21|96pcsI7Nx7fF4fdKw2uGT0ImHdHtAtv8BcybAsdk`;
        // }
        
        return config;
    },
    error => {
        Promise.reject(error)
});

import { TailwindPagination } from 'laravel-vue-pagination';  

import './assets/main.css'
const app = createApp(App)
app.use(router)
app.component('TailwindPagination', TailwindPagination);
app.mount('#app')



