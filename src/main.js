import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store/index.js'
import router from './router/router'

import * as mdb from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';


const app = createApp(App)
app.use(router)
app.use(mdb)
app.use(store)
app.component('scroll-parallax', ScrollParallax);
app.mount('#app')

