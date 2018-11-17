import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex';
import feathersClient from './feathers-client';
import router from './router';

// const { 
//   service, 
//   auth, 
//   FeathersVuex 
// } = feathersVuex(feathersClient, {
//   idField: '_id'
// });

const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: 'Id' })

Vue.use(Vuex);

Vue.use(FeathersVuex);

export default new Vuex.Store({

  state:{
    currency:'',
    currencyMenu: [
      { icon: 'mdi-currency-btc', text:'بیت کوین', path:'/Bitcoin'},
      { icon: 'mdi-currency-erh', text:'اتریوم', path:'/Bitcoin'},
      { icon: 'archive', text:'ریپل', path:'/Bitcoin'},
      { icon: 'delete', text:'زد کش', path:'/Bitcoin'},
      { icon: 'delete', text:'زد کش1', path:'/Bitcoin'},
      { icon: 'touch_app', text:'یک سوال دارید؟', path:'/Bitcoin'},
    ],
  },
  mutations:{
    setCurrency(state,index){
      const selectedCurrency = state.currencyMenu.filter((item)=>item.text === index);
      return state.currency = selectedCurrency[0].text;
    }
  },
  actions:{
    routingMenu(context,index){

      const routmenu = context.state.currencyMenu.filter((i)=>i.text === index);

      router.push(routmenu[0].path);
      
      context.commit('setCurrency', index);

    }
  },

  plugins:[
    service('users'),
    service('orders'),
    service('advertises'),
    auth({ userService: 'users', }),
  ],
})
