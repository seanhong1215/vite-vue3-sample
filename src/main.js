import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import Loading from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// import { date, currency } from './methods/filters';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueAxios,axios)
// app.component('Loading', Loading);
// app.config.globalProperties.$filters = {
//   date,
//   currency,
// };
app.mount('#app')