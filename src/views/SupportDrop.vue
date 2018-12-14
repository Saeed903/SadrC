<template>
    <v-container fluid grid-list-xl>
        <v-layout  justify-space-around>
            <v-flex lg10 xl8>
                <v-card-text class="fontIran subheading">بلیط های پشتیبانی من</v-card-text>
                <v-flex>
                    <v-card color="blue-grey darken-3 elevation-24">
                        <v-card-text class="fontsIran text-xs-right"><v-icon color="orange lighten-3" size="17px">done_all</v-icon>کاربران عزیز، با توجه به مقدار غیر معمول بلیط، زمان پاسخ فعلی ما 2 روز است. با مهربانی از شما می خواهیم که بلیط های چندگانه را در رابطه با همین مسئله باز نکنید، زیرا فقط زمان پاسخ ما را طولانی تر می کند.</v-card-text>
                    </v-card>
                </v-flex>
                <v-btn class="fontsIran mt-4" round color="primary" to="SupportCreateNewTicket"><v-icon size="17px">send</v-icon>یک بلیط جدید ایجاد کنید</v-btn>
                <v-card-text class="fontIran caption pt-0"><v-icon color="red" size="17px">warning</v-icon>شما هیچ بلیط پشتیبانی ندارید</v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default{

}
</script>

<style scoped>
.fontIran{
    font-family:'Iranian Sans';
}
.fontsIran{
    font-family:iranian sans;
    font-size:13px;
}
</style>
