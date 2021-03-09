import Vue from 'vue'
import store from './sotre/store'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes/routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
