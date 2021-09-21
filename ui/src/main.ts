import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import 'vfonts/Lato.css';

createApp(App).use(createPinia()).use(router).mount('#app');
