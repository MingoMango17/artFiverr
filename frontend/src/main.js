import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import store from './store';
import { app } from './firebase.js'

const firestoreApp = app;

createApp(App).use(router).use(store).mount('#app');