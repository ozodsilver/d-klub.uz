import { createApp } from 'vue'
import App from './App.vue'

import * as mdb from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';
const app = createApp(App)
app.use(mdb)
app.mount('#app')
