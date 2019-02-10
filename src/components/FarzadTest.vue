<template>
<div>
  <v-layout row>
    <v-flex xs10 sm6 md4 lg3 xl4>
      <v-card class="elevation-20">
        <!--<img class="cardImg" src="./../../public/img/SadrCrypto/blockchain.jpg">-->
        <v-card-title primary-title>
          <div>
            <div class="fontsIran">ادغام API ما</div>
            <span class="fontsIran grey--text">یک راه حل کاملا استاندارد سفید برای پروژه شما، یعنی کیسه کیف پول، بازار یا ارائه دهنده خدمات. تنظیم آن را به پذیرفتن هر 100 + ارزدیجیتال  ذکر شده در صدرکریپتو و دریافت درآمد از هر معامله ساخته شده است.</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn class="fontsIran elevation-24" color="cyan accent-2" outline>اطلاعات بیشتر</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon color="cyan accent-2">{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text class="fontsIran grey--text" v-show="show">
            یک راه حل کاملا استاندارد سفید برای پروژه شما، یعنی کیسه کیف پول، بازار یا ارائه دهنده خدمات. تنظیم آن را به پذیرفتن هر 100 + ارزدیجیتال  ذکر شده در صدرکریپتو و دریافت درآمد از هر معامله ساخته شده است.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>
<style>
.cardImg{
  width:450px;
  max-width:100%;
}

</style>
