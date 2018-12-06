<template>
    <v-layout row wrap align-justify justify-center>
        <v-flex xs12 sm8 md6>
            <v-card-text>
                <v-card-text>
                    <p class="fontIran text-xs-center">تأیید شماره تلفن</p>
                    <p class="fontIrans">ما کد تایید خود را به شماره تلفن شما ارسال کردیم.</p>
                    <p class="fontIrans">کد تأیید را در فیلد زیر وارد کنید.</p>
                    <v-text-field class="fontIrans" label="کد تایید"></v-text-field>
                </v-card-text>
                <v-layout pr-2>
                    <v-flex pt-0 xs4 sm3 md3 xl2 class="fontIrans text-xs-center">
                        <v-btn @click="submit" class="grey darken-2 text-xs-center">تأیید</v-btn>
                    </v-flex>
                    <v-flex pt-0 xs6 sm4 md3 class="fontIrans">
                        <v-btn @click="submit" class="grey darken-2">شماره تلفن اشتباه است؟</v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-flex>
    </v-layout>
</template>
