<template>
    <div>
        
        <p class="text-xs-center">تبلیغات شما</p>
        <p> شما می توانید حداکثر 5 آگهی ایجاد کنید محدودیت ها براساس حجم 30 روزه شما است که 0.00000000 بیت کوین است. برای کسب اطلاعات بیشتر درباره محدودیت های تبلیغات <router-link to="LearnAdverDashboard" class="learnMoreAd">اینجا کلیک کنید</router-link></p>
    
        <v-card-text>
            <v-card>
                <v-data-table
                    class="text-xs-left"
                    :headers="headers"
                    :items="desserts" 
                    :pagination.sync="pagination"
                    :total-items="totalDesserts"
                    :loading="loading"
                >
                    <template slot="items" slot-scope="props">
                        <td >{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
                        <td >{{ props.item.paymentMethod }}</td>
                        <td >{{ props.item.price }}</td>
                        <td >{{ props.item.limits }}</td>
                        <td ><v-btn class="primary" @click="buy()">خرید</v-btn></td>
                    </template>
                </v-data-table>
            </v-card>
        </v-card-text>

        <v-card-text>
        <div class="">
        <v-btn class="primary">ایجاد تبلیغات</v-btn>
        </div>
        </v-card-text>

        <v-card-text>
        <p class="headline">تعطیلات</p>
        <v-checkbox label="فروش در تعطیلات" messages="همه تبلیغات خود را برای فروش به طور موقت غیرفعال کنید"></v-checkbox>
        <v-checkbox label="خرید در تعطیلات" messages="همه تبلیغات خود را برای خرید به طور موقت غیرفعال کنید"></v-checkbox>
        <v-btn to="" class="primary">ذخیره</v-btn>
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
            { text: 'روش پرداخت', value: 'روش پرداخت' },
            { text: 'بیت کوین | قیمت', value: ' بیت کوین | قیمت' },
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

            { trader: 'حیدر', paymentMethod: 'نقدی', price:'12', limits:'fgfh' },
            { trader: 'حیدر', paymentMethod: 'نقدی', price:'12', limits:'fgfh' },
            { trader: 'حیدر', paymentMethod: 'نقدی', price:'12', limits:'fgfh' }
         
    ]
    }
  }
};
</script>
<style scoped>

</style>
