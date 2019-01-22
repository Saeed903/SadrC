<template >
<div>
    {{publishAdvertises}}
  <v-data-table
      class="table"
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      :total-items="totalDesserts"
      :loading="loadingAdvertise"
     >
      <template v-if="!loading" slot="publishAdvertises" slot-scope="publishAdvertises">
        <td>{{ props.item.id }}({{props.item.userName}},{{props.item.mobile}})</td>
        <td >{{ props.item.introduction }}</td>
        <td >{{ props.item.margin }}</td>
        <td >{{ props.item.driversLicense }}</td>
        <td ><v-btn class="primary elevation-5" @click="buy()" to="Order">خرید</v-btn></td>
      </template>
    </v-data-table>
</div>
</template>
<script>

import { mapActions, mapState, mapGetters } from 'vuex';
import { log } from 'async';

export default{
  name:"Advertise",
  props:['isSeller', 'query'],
  data () {
    return {
        totalDesserts: 0,
        desserts: [],
        pagination: {},
      }
  },
  computed:{
    ...mapState('advertises', { loadingAdvertise: 'isFindPending'}),
    ...mapState('publishAdvertises', { loadingPublishAdvertises: 'isFindPending'}),
    ...mapGetters('advertises', { findAdvertisesOnline: 'find'}),
    ...mapGetters('publishAdvertises', { findPublishAdvertisesOnline: 'find'}),

    advertises(){
        return this.findAdvertisesOnline().data;
    },

    publishAdvertises(){
        return this.findPublishAdvertisesOnline().data ;
    },

    typeCustomer() {
        return (this.isSeller==1) ?'فروشنده':'خریدار';
    },
    headers() {
        return  [
                 {
                    text: this.typeCustomer,
                    align: 'center',
                    class:'text-xs-right white--text',
                    sortable: false,
                    value: this.typeCustomer
                 },
                 {
                    text: 'روش پرداخت',
                    align: 'center',
                    class:'text-xs-right',
                    sortable: false,
                    value: 'روش پرداخت'
                 },
                 {
                    text: ' بیت کوین | قیمت ',
                    align: 'center',
                    class:'text-xs-right',
                    sortable: false,
                    value: ' بیت کوین | قیمت'
                 },
                 {
                    text: 'محدودیت ها',
                    align: 'center',
                    class:'text-xs-right',
                    sortable: false,
                    value: 'محدودیت ها'
                 },
                
            
        ]
    }
  },
  watch: {
    pagination: {
    handler () {
        this.getDataFromApi()
        .then(data => {
            this.desserts = data.items
            this.totalDesserts = data.total
        })
    },
    deep: true
    }
  },
  mounted () {

    this.findAdvertise()
        .then(response => {
            const advertises = response.data || response;
            
        }), 

    this.findPublishAdvertise()
        .then(response => {
            const publishAdvertises = response.data || response;
            console.log(publishAdvertises);
            
        }),    
    this.getDataFromApi()
        .then(data => {
            this.desserts = data.items
            this.totalDesserts = data.total
        })
  },
  methods: {


    ...mapActions('advertises', { findAdvertise : 'find'}),
    ...mapActions('publishAdvertises', { findPublishAdvertise : 'find'}),

    buy(){

    },

    getDataFromApi () {
    this.loading = true
    return new Promise((resolve, reject) => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination

        let items = this.getDesserts()
        const total = items.length

        if (this.pagination.sortBy) {
        items = items.sort((a, b) => {
            const sortA = a[sortBy]
            const sortB = b[sortBy]

            if (descending) {
            if (sortA < sortB) return 1
            if (sortA > sortB) return -1
            return 0
            } else {
            if (sortA < sortB) return -1
            if (sortA > sortB) return 1
            return 0
            }
        })
        }

        if (rowsPerPage > 0) {
        items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        setTimeout(() => {
        this.loading = false
        resolve({
            items,
            total
        })
        }, 1000)
    })
    },
    getDesserts () {
    return [
        {
            id:'  فرزاد افسری',
            userName:'98',
            mobile:'100%',
            introduction:'تایید کردن',
            margin:'58',
            driversLicense:'100',
        },
         {
            trader:'علی',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'تایید کردن',
            price:'58',
            limits:'100',
        },
         {
            trader:'حیدر',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'تایید کردن',
            price:'58',
            limits:'100',
        },
         {
            trader:'حسین',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'تایید کردن',
            price:'58',
            limits:'100',
        },
         {
            trader:'باقری',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'تایید کردن',
            price:'58',
            limits:'100',
        },
    ]
    }
  }
};
  
</script>
<style scoped>
.table{
    font-family: Iranian Sans;
   background-color:rgb(30, 38, 52);
}


</style>

