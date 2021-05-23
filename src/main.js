import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from "axios";
import store from "./store"
import './plugins/VModal'
import './plugins/vue-toastification'
// import  './plugins/vulidate'

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  VueRouter,
  store,
  render: h => h(App),
}).$mount('#app')
