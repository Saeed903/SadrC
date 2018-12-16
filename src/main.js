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
import i18n from './i18n';
import { createProvider } from './vue-apollo'

Vue.use(Vuetify, {
  rtl: true,
  //iconfont: 'mdi',
  lang: {
    locales: 'fa',
    current: 'fa'
  }
});

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
