import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@/styles/common.css'
import '@/styles/theme.scss'
import 'virtual:uno.css'
import App from '@/App.vue'
import i18 from '@/modules/i18n.ts'
import { createRouter,createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App)
.use(i18)
.use(router)
.mount('#app')
