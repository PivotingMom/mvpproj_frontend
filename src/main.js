import { createApp } from 'vue' 
//this was helpful to understand the createApp, line2,30 &34 https://blog.logrocket.com/definitive-guide-vue-3-components/
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios';
import { createPinia } from 'pinia'


axios.defaults.headers.common['Content-Type'] = 'application/json' 

// this ensures only authenticated users can visit the pages
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

//to mount the application to the DOM simply means to make the vue application which is made up of javascript show up on the page in HTML. the mount method takes a css selector to target the element that we want to mount to.this element lives in the index.html file in the root of our project & this is the file that initially gets served in the browser & includes the javascript code for our Vue app. 
