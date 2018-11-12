<template>
<v-container >
    <v-layout row wrapalign-justify justify-center>
        <v-flex xs12 sm6 md6 >
            <v-card>
                <v-card-text pa-25>
                    <v-card-text class="headline">
                        <p class="text-xs-center">تأیید شماره تلفن</p>
                    </v-card-text>
                    <p class="subheading">ما کد تایید خود را به شماره تلفن شما ارسال کردیم.</p>
                    <p class="subheading">کد تأیید را در فیلد زیر وارد کنید.</p>
                    <v-text-field label="کد تایید"></v-text-field>
                    </v-card-text>
                    <v-flex text-xs-center>
                        <v-card-text>
                            <v-btn @click="submit" class="primary">تأیید</v-btn>
                            <v-btn @click="submit" class="accent">شماره تلفن اشتباه است؟</v-btn>
                        </v-card-text>
                </v-flex>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
