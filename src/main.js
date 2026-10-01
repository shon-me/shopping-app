import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPLuginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light',
    themes: {
        light: {
            colors: {
                primary: "#1F70EA",
                secondary: "#FF8C00",
                comp: "#FF3D00",
                accent1: "#FFC300",
            },
        },
    },
  },
})

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPLuginPersistedstate)
app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
