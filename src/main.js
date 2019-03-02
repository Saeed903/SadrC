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
import VueApollo from 'vue-apollo';
import i18n from './i18n';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'



const httpLink = new HttpLink({
  uri: 'http://localhost:4060/graphql'
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

Vue.use(Vuetify, {
  rtl: true,
  //iconfont: 'mdi',
  lang: {
    locales: 'fa',
    current: 'fa'
  }
});

Vue.use(VeeValidate);

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  //apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
