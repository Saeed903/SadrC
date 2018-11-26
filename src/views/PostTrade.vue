<template>
    <v-layout row wrap >
        <v-flex>
            <LogBeforePost></LogBeforePost>
            <KindOfTrade></KindOfTrade>
            <v-divider></v-divider>
            <Howprice></Howprice>
            <DayHourShowTrade></DayHourShowTrade>

            <v-btn class="fontIran" color="primary">ثبت آگهی</v-btn>

        </v-flex>
    </v-layout> 
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex';
import LogBeforePost from './../components/PostTrade/LogBeforePost.vue'
import KindOfTrade from './../components/PostTrade/KindOfTrade.vue'
import Howprice from './../components/PostTrade/Howprice.vue'
import DayHourShowTrade from './../components/PostTrade/DayHourShowTrade.vue'
export default{
    data:() => ({
        advertise:{
            tradeTypeId: 0,
            countryId: 0,
            cryptoCurrencyId: 0,
            margin: 0,
            priceEquation: '',
            minTransactionLimit: 0,
            maxTransactionLimit: 0,
            restrictAmountTo: 0,
            termsOfTrade: '',
            trackLiquidity: false,
            identifiedPeopleOnly: false,
            smsVerification : false,
            trustedPeopleOnly: false,
            ownerId: 0
        },
    }),
    methods:{
        ...mapActions('tradeType', { findTradeTypes: 'find'}),
        ...mapActions('countries', { findCountries: 'find'}),
        ...mapActions('cryptoCurrencies', { findCryptCurrencies: 'find'}),

        createAdvertise(){
            if (this.valid){
                const { Advertise } = this.$FeathersVuex;
                const advertise = new Advertise( this.advertise);
                advertise.save();
            }
        },
    },
    mounted (){
        this.findTradeTypes()
            .then( response => {
                const tradeType = response.data || response;
            }),
        
        this.findCountries()
            .then(response => {
                const countries = response.data || response;
            }),
           
        this.findCryptCurrencies()
            .then(response => {
                const CryptoCurrencies = response.data || response;
            })   
    },
    computed: {
        ...mapState(['currencyMenu', 'currency']),
        ...mapState('tradeTypes', { loadingTradeTypes: 'isFindPending'}),
        ...mapState('countries', { loadingCountries: 'isFindPending'}),
        ...mapState('cryptoCurrencies', { loadingCryptoCurrencies: 'isFindPending'}),

        ...mapGetters('tradeTypes', { findTradeTypesOnline: 'find'}),
        ...mapGetters('cryptoCurrencies', { findCryptoCurrenciesOnline: 'find'}),
        ...mapGetters('countries', { findCountriesOnline: 'find' }),

        tradeTypes(){
            return this.findTradeTypesOnline().data;
        },

        countries(){
            return this.findCountriesOnline().data;
        },

        cryptoCurrencies() {
            return this.findCryptoCurrenciesOnline().data;
        }
    },
    components:{
        LogBeforePost,
        KindOfTrade,
        Howprice,
        DayHourShowTrade
    }
}
</script>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
}
.fontsIran{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.fontsIran:hover{
    color:rgb(0, 140, 255);
}

</style>
