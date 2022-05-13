import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'

import Home from './components/Home'


Vue.use(VueRouter)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
  ]
})

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
