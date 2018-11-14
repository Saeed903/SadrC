<template>
<div>
    
        <p class="text-xs-center">بستن تمام معاملات</p>
        <router-link to="">.اطلاعات را با فرمت سی اس وی دانلود کنید</router-link>
    
        <v-card-text>
            <v-card>
        <div class="dataTable">
            <v-data-table
                class="text-xs-left"
                :headers="headers"
                :items="desserts"
                :pagination.sync="pagination"
                :total-items="totalDesserts"
                :loading="loading"
                >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
                    <td class="text-xs-right">{{ props.item.paymentMethod }}</td>
                    <td class="text-xs-right">{{ props.item.price }}</td>
                    <td class="text-xs-right">{{ props.item.limits }}</td>
                    <td class="text-xs-right"><v-btn class="primary" @click="buy()">خرید</v-btn></td>
                </template>
            </v-data-table>
        </div>
            </v-card>
    </v-card-text>
    </div>
</template>
<script>
export default{
  name:"Transaction",
  props:["isSeller"],
  data () {
    return {
        totalDesserts: 0,
        desserts: [],
        loading: true,
        pagination: {},
      }
  },
  computed:{
    typeCustomer:function() {
        return (this.isSeller==1) ?'فروشنده':'خریدار';
    },
    headers:function() {
        return  [{
            text: this.typeCustomer,
            align: 'left',
            class:'text-xs-left',
            sortable: false,
            value: 'name'
            },
            { text: 'created at', value: 'created at' },
            { text: 'نوع تجارت', value: 'نوع تجارت' },
            { text: 'شریک تجاری', value: 'شریک تجاری' },
            { text: 'وضعیت معامله', value: 'وضعیت معامله' },
            { text: 'fiat', value: 'fiat' },
            { text: 'trade amount', value: 'trade amount' },
            { text: 'trading fee', value: 'trading fee' },
            { text: 'total BTC', value: 'total BTC' },       
            { text: 'exchange rate', value: 'exchange rate' },               
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
    console.log(this.isSeller);  
    this.getDataFromApi()
    .then(data => {
        this.desserts = data.items
        this.totalDesserts = data.total
    })
  },
  methods: {
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
        
    ]
    }
  }
};
  
</script>
<style scoped>

</style>


