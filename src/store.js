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

const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: 'id' })

Vue.use(Vuex);

Vue.use(FeathersVuex);

export default new Vuex.Store({

  state:{
    
    currency:'',
    currencyMenu: [
      {arrowIcon: 'keyboard_arrow_up','arrowIcon-alt': 'keyboard_arrow_left', text:'ارز دیجیتال', path:'/Bitcoin',
        children:[
          {icon:'mdi-currency-btc',text:'بیت کوین',path:'/bitcoin'},
          {icon:'mdi-currency-btc',text:'اتریوم',path:'/bitcoin'},
          {icon:'mdi-currency-btc',text:'ترون',path:'/bitcoin'},
        ]
      },
    ],
  },
  mutations:{
    setCurrency(state,index){
      const selectedCurrency = state.currencyMenu.filter((item)=>item.text === index);
      return state.currency = selectedCurrency[0].text;
    },
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
    service('tradeTypes'),
    service('cryptoCurrencies'),
    service('countries'),
    service('publishAdvertises'),
    auth({ userService: 'users', }),
  ],
})
