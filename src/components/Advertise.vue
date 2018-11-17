<template >
<div>
    {{advertises}}
  <v-data-table
      class="table text-xs-center"
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      :total-items="totalDesserts"
      :loading="loadingAdvertise"
    >
      <template v-if="!loading" slot="items" slot-scope="props">
        <td>{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
        <td class="table text-xs-center">{{ props.item.paymentMethod }}</td>
        <td class="table text-xs-center">{{ props.item.price }}</td>
        <td class="table text-xs-center">{{ props.item.limits }}</td>
        <td class="table text-xs-center"><v-btn class="primary" @click="buy()">خرید</v-btn></td>
      </template>
    </v-data-table>
</div>
</template>
<script>

import { mapActions, mapState, mapGetters } from 'vuex';

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
    ...mapGetters('advertises', { fingAdvertisesOnline: 'find'}),

    advertises(){
        return this.fingAdvertisesOnline().data;
    },

    typeCustomer:function() {
        return (this.isSeller==1) ?'فروشنده':'خریدار';
    },
    headers:function() {
        return  [{
            text: this.typeCustomer,
            align: 'center',
            class:'text-xs-center',
            sortable: false,
            value: 'name'
            },
            { text: 'روش پرداخت', value: 'روش پرداخت' },
            { text: ' بیت کوین | قیمت ', value: ' بیت کوین | قیمت' },
            { text: 'محدودیت ها', value: 'محدودیت ها' }
            
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
        // In the find action, the 'todos' array is not a reactive list, but the individual records are.
        const advertises = response.data || response
        }), 
    console.log(this.isSeller);  
    this.getDataFromApi()
        .then(data => {
            this.desserts = data.items
            this.totalDesserts = data.total
        })
  },
  methods: {
    ...mapActions('advertises', { findAdvertise : 'find'}),

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
            trader:'فرزاد افسری',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'تایید کردن',
            price:'58',
            limits:'100',
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
}

</style>

