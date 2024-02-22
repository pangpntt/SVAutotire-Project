import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import "./assets/style.css"

const app = createApp(App)
app.use(PrimeVue);

app.use(router)

app.mount('#app')
