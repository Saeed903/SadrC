<template>
    <div>
        <div>
            <p>انگلستان</p>
            <p>اطلاعات در مورد انگلستان</p>
            <div>
                <p>حجم تجارت</p>
                <p>تعداد معاملات تایید شده</p>
                <p>نمهر بازخورد</p>
                <p>تایید نام واقعی</p>
                <p>خرید اول</p>
                <p>حساب کاربری ایجاد شده</p>
                <p>آخرین مشاهده شده</p>
                <p>زبان</p>
                <p>پست الکترونیک</p>
                <p>شماره تلفن</p>
                <p>شناسه گذرنامه رانندگان</p>
                <p>مجوز</p>
                <p>اعتماد</p>
                <p>بلوک ها</p>
            </div>
            <div>
                <p>500+BTC</p>
                <p>1000+</p>
                <p>با 6652 شرک مختلف</p>
                <p>100%</p>
                <p>21,17 تایید اعتماد</p>
                <p>تایید,1تاییدیه رد شد</p>
                <p>3 هفته پیش</p>
                <p>10ماه</p>
                <p>1دقیقه قبل</p>
                <p>انگلیسی</p>
                <p>تایید شده 10 ماه، 3 هفته پیش</p>
                <p>تایید شده 13 ساعت و 14 دقیقه قبل</p>
                <p>تایید شده 10 ماه، 3 هفته پیش</p>
                <p>اعتماد 100+ نفر</p>
                <p>مسدود شده توسط 2+ نفر</p>
                <p>طرفدار معامله گر</p>
            </div>
            <div>
                <p>زمان انتشار سپرده  فروشنده</p>
                <p>متوسط: 18 دقیقه</p>
                <p>میانگین: 19 دقیقه</p>
            </div>
            <router-link to="">گزارش این کاربر</router-link>
        </div>
        <div>
            <p>خرید بیت کوین آنلاین در انگلستان</p>
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
                <td class="text-xs-right"><v-btn class="primary" @click="buy()">buy</v-btn></td>
            </template>
            </v-data-table>
        </div>
        <router-link to="">همه تبلیغات کاربران برای خرید بیت کوین را نشان می دهد</router-link>
        <div>
            <p>خرید بیت کوین با پول نقد در انگلستان</p>
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
        <router-link to="">همه تبلیغات کاربران برای خرید بیت کوین با پول نقد را نشان می دهد</router-link>
        <div>
            <p>فروش بیت کوین آنلاین به انگلستان</p>
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
        <router-link to="">همه تبلیغات کاربران برای فروش آنلاین بیت کوین را نشان می دهد</router-link>
        <div>
            <router-link to="">همه تبلیغات کاربران برای فروش آنلاین بیت کوین را نشان می دهد</router-link>
        </div>
        <div>
            <p>بازخورد</p>
            <p>بازخورد توسط کاربران با حجم قابل توجه تجاری ترک شده است.</p>
            <div>
                <p>مارس 1،2018،8: 46 دقیقه</p>
                <v-btn></v-btn>
            </div>
            <div>
                <p>june 15، 2018، 4: 37 p.m</p>
                <v-btn></v-btn>
            </div>
            <div>
                <p>فوریه 21، 2012، 11: 59، یکشنبه</p>
                <v-btn></v-btn>
            </div>
            <div>
                <p>ژوئیه 18، 2011، 11: 34 یکشنبه</p>
                <v-btn></v-btn>
            </div>
        </div>
        <div>
            <p>..دیدن<router-link to="">بازخورد بیشتر برای انگلستان</router-link></p>
        </div>
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
        return (this.isSeller==1) ?'Seller':'Buyer';
    },
    headers:function() {
        return  [{
            text: this.typeCustomer,
            align: 'left',
            class:'text-xs-left',
            sortable: false,
            value: 'name'
            },
            { text: 'paymentMethod', value: 'paymentMethod' },
            { text: ' price | bitcoin', value: ' price | bitcoin' },
            { text: 'limits', value: 'limits' }
            
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
            trader:'farzad',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'ali',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'heydar',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'koomari',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'lakzad',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
    ]
    }
  }
};
  
</script>

<style scoped lang="postcss">

padding: ;
</style>
