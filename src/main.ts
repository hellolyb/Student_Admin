import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// 引入i18n
import i18n from './i18n/index'
const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
