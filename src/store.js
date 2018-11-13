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

const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex);

Vue.use(FeathersVuex);

export default new Vuex.Store({

  state:{
    currency:'',
    currencyMenu: [
      { icon: 'lightbulb_outline', text:'بیت کوین', path:'/Bitcoin'},
      { icon: 'touch_app', text:'اتریوم', path:'/Bitcoin'},
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
    service('users',{
      instanceDefaults:{
        id: '',
        email : '',
        password : '',
        tel: '',
        mobile: '',
        verifiedDate: '',
        isVerified:'',
        notVerifiedDate:'',
        introduction:'',
        emailVerifiedDate:'',
        phoneVerifiedDate:'',
        identityVerifiedDate:'',
        identityCardImage:'',
        realName:''

      }
    }),
    service('orders',{
      instanceDefaults:{
        orderId : '',
        advertiseId : '',
        amount : '',
        buyerUserId : '',
        createDate : '',
        orderTitle : '',
        orderStateId : '',
      }
    }),
    service('advertises', {
      instanceDefaults:{
        advertiseId: '',
        tradeTypeId: '',
        countryId: '',
        currencyCode: '',
        margin: '',
        priceEquation: '',
        minTransactionLimit: '',
        maxTransactionLimit: '',
        termsOfTrade: '',
        trackLiquidity: '',
        identifiedPeopleOnly: '',
        smsVerification: '',
        trustedPeopleOnly: '',
        advertiserUserId: '',
      }
    }),
    auth({ userService: 'users', }),
  ],
})
