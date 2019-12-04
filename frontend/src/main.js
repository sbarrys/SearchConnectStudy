import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
//axios
import axios from 'axios'
Vue.prototype.$http=axios
//vue-bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)



//default setting
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
