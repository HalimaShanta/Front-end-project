import "bootstrap/dist/css/bootstrap.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { createApp } from 'vue'
import App from './App.vue'

library.add(fas)

createApp(App).use(router)
.component ('fa', FontAwesomeIcon)
.mount('#app')
import "bootstrap/dist/js/bootstrap.js"
import router from './router'
