<template>

    <v-layout row wrap align-justify justify-center>
        <v-flex xs12 sm8 md6 >
            
                <v-card-text>
                    <v-card-text>
                        <p class="titled text-xs-center">تأیید شماره تلفن</p>
                        <p class="fontIran">ما کد تایید خود را به شماره تلفن شما ارسال کردیم.</p>
                        <p class="fontIran">کد تأیید را در فیلد زیر وارد کنید.</p>
                    </v-card-text>

                    <v-text-field class="fontIran" label="کد تایید"></v-text-field>
                    <v-layout>
                        <v-flex xs4 sm3 md3 xl2 class="fontIran text-xs-center">
                            <v-btn @click="submit" class="grey darken-2 text-xs-center">تأیید</v-btn>
                        </v-flex>
                        <v-flex xs6 sm4 md3 class="fontIran">
                            <v-btn @click="submit" class="grey darken-2">شماره تلفن اشتباه است؟</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-text>
           
        </v-flex>
    </v-layout>

</template>
<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size: 18px; 
}

.fontIran{
font-family: Iranian Sans;
}
</style>
