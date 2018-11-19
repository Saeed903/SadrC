<template>
    <div>
        <v-card-text pt-0>
            <p class="text-xs-center">بستن تمام معاملات</p>
            <router-link class="link " to="">اطلاعات را با فرمت سی اس وی دانلود کنید.</router-link>
        </v-card-text>

        <v-card-text>
            <v-card>
                <div class="heydar1">
                    <v-data-table
                    class="text-xs-left"
                    :headers="headers"
                    :items="desserts"
                    :pagination.sync="pagination"
                    :total-items="totalDesserts"
                    :loading="loading"
                    >
                        <template slot="items" slot-scope="props">
                            <td class="table text-xs-right">{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
                            <td class="table text-xs-center">{{ props.item.createdAt }}</td>
                            <td class="table text-xs-center">{{ props.item.tradeType }}</td>
                            <td class="table text-xs-center">{{ props.item.tradingPartner }}</td>
                            <td class="table text-xs-center">{{ props.item.transactionStatus }}</td>
                            <td class="table text-xs-center">{{ props.item.fiat }}</td>
                            <td class="table text-xs-center">{{ props.item.tradeAmount }}</td>
                            <td class="table text-xs-center">{{ props.item.tradingFee }}</td>
                            <td class="table text-xs-center">{{ props.item.totalBTC }}</td>
                            <td class="table text-xs-center">{{ props.item.exchangeRate }}</td>
                            <td ><v-btn class="table primary" @click="buy()">خرید</v-btn></td>
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
            { text: 'ایجاد شده در', value: 'ایجاد شده در' },
            { text: 'نوع تجارت', value: 'نوع تجارت' },
            { text: 'شریک تجاری', value: 'شریک تجاری' },
            { text: 'وضعیت معامله', value: 'وضعیت معامله' },
            { text: 'fiat', value: 'fiat' },
            { text: 'مقدار تجارت', value: 'مقدار تجارت' },
            { text: 'هزینه معاملاتی', value: 'هزینه معاملاتی' },
            { text: 'مجموع بیت کوین', value: 'مجموع بیت کوین' },       
            { text: 'نرخ تبدیل', value: 'نرخ تبدیل' },               
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
    {
       trader:"حیدر" ,
       tradeCount:"1",
       satisfiedPercent:"%100",
       createdAt:"1",
       tradeType:"بیت کوین",
       tradingPartner:"فرزاد",
       transactionStatus:"فعال",
       fiat:"1",
       tradeAmount:"0.1",
       tradingFee:"1درصد",
       totalBTC:"0.5",
       exchangeRate:"0.001",       
    },


    {
    trader:"حیدر" ,
       tradeCount:"1",
       satisfiedPercent:"%100",
       createdAt:"1",
       tradeType:"بیت کوین",
       tradingPartner:"فرزاد",
       transactionStatus:"فعال",
       fiat:"1",
       tradeAmount:"0.1",
       tradingFee:"1درصد",
       totalBTC:"0.5",
       exchangeRate:"0.001",       
    },

    {
     trader:"حیدر" ,
       tradeCount:"1",
       satisfiedPercent:"%100",
       createdAt:"1",
       tradeType:"بیت کوین",
       tradingPartner:"فرزاد",
       transactionStatus:"فعال",
       fiat:"1",
       tradeAmount:"0.1",
       tradingFee:"1درصد",
       totalBTC:"0.5",
       exchangeRate:"0.001",       
    },

    ]
    }
  }
};
  
</script>
<style scoped>
.table{
    font-family: iranain sans;
    font-size: 18px;
}
.link{
    text-decoration: none;
    color:rgb(0,153,255);
}
.link:hover{
    color:rgb(0,140,255);
}
</style>


