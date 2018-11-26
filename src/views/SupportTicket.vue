<template>
    <dir>
        <v-card-text class="fontIran subheading">بلیط های پشتیبانی من</v-card-text>
        <v-card-text class="fontIran ">کاربران عزیز، با توجه به مقدار غیر معمول بلیط، زمان پاسخ فعلی ما 2 روز است. با مهربانی از شما می خواهیم که بلیط های چندگانه را در رابطه با همین مسئله باز نکنید، زیرا فقط زمان پاسخ ما را طولانی تر می کند.</v-card-text>
        <v-btn class="fontIran" color="primary">یک بلیط جدید ایجاد کنید</v-btn>
        <v-card-text class="fontIran caption pt-0">شما هیچ بلیط پشتیبانی ندارید
            <Footer></Footer>
</v-card-text>
    </dir>
</template>
<script>
import Footer from './../components/Footer.vue'
export default{
    components:{
        Footer,
    }
}
</script>

<style scoped>
.fontIran{
    font-family:'Iranian Sans';
}
</style>
