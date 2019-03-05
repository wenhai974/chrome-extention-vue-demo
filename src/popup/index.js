import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../assets/css/pc-reset.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
