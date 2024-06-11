import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {createI18n} from 'vue-i18n'

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
const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages: {
    zh: {
      hello: '你好'
    },
    en: {
      hello: 'hello'
    }
  }
})
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
