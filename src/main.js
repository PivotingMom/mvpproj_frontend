import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios';
import { createPinia } from 'pinia'


axios.defaults.headers.common['Content-Type'] = 'application/json' 
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common.token = token
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
