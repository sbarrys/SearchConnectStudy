import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//vue-bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//axios
import axios from 'axios'
Vue.prototype.$http=axios

//default setting
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
