import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'element-plus/dist/index.css'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
import './assets/main.css'
import 'virtual:svg-icons-register'


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
