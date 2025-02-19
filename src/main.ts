import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { adjustRootValue } from '@/utils/adjust-font-size'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

adjustRootValue()

app.mount('#app')
