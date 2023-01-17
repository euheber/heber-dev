import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

import './assets/main.scss'
const app = createApp(App)


app.use(MotionPlugin)
app.use(router)

app.mount('#app')


