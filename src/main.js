import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import '@mdi/font/css/materialdesignicons.css'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify,VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
