<template>
    <div>
        <div v-if="!confirmEmail && logged">
            <v-flex d-flex>
                <v-layout row wrap>
                    <v-flex v-for="n in 1" :key="n" d-flex xs12>
                    <v-card-text class="fontIran">
                        <p>شما باید ایمیل خود را تایید نمایید.قبل از آنکه سفارش بدهید ایمیل فرستاده شده را پیدا کرده و پس از تایید دوباره به این صفحه بازگردید.
                        اگر دوباره خطایی ملاحضه کردید می توانید با پشتیبانی<router-link class="router" to="" >پشتیبانی</router-link>  تماس بگیرید.</p>
                        <v-btn to="/EditProfileAccountSecurity" block color="secondary" dark class="fontIran"><v-icon >send</v-icon>ارسال مجدد تاییدیه ایمیل</v-btn>
                    </v-card-text>
                    </v-flex>
                </v-layout>
            </v-flex>
        </div>

        <div v-if="confirmEmail || !logged">
            <h3> How much you wish to buy?</h3>

        </div>

        <div v-if="!logged">
            <h3>not logged</h3>
        </div>
        <div v-if="logged">
            <h3>logged</h3>
        </div>
        <div>

            
        </div>
    </div>
    
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'OrderProcess',
    computed:{
        ...mapState(['logged', 'confirmEmail']),
    }
}
</script>
<style scoped>

</style>

