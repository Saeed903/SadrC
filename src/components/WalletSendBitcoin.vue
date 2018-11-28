<template>
<v-container grid-list-md>
    <v-flex xl6>
        <v-card-text>
            
            <p class="pt-0 titled">فرستادن بیت کوین</p>
        
            <v-flex xs12 sm6 md6 xl6>
                <v-card>
                    <v-card-media class="pt-2">
                        <div class="fontIran pr-2">
                            <p>در کیف پول شما:</p>
                            <p>هزینه معاملات:</p>
                            <v-divider></v-divider>
                            <p class="pt-3">شما می توانید به سرعت:</p>
                        </div>
                        <div class="pr-5">
                            <p>0 BTC</p>
                            <p>0.00005 BTC</p>
                            <v-divider></v-divider>
                            <p class="pt-3">0 BTC</p>
                        </div>
                    </v-card-media>
                </v-card>
            </v-flex>
            <v-flex  xs12 sm6 md6 xl6>
                <v-text-field
                label="آدرس بیت کوین"
                class="fontIran textField"
                >
                </v-text-field>
            </v-flex>
            <v-flex  xs12 sm6 md6 xl6>
                <v-text-field
                label="مقدار بیت کوین"
                class="fontIran TextField"
                >
                </v-text-field>
            </v-flex>
        
            <v-flex xs12 sm6 md6 xl6 class="pt-3">
                
                <p class="fontIran">گزینه های بیشتر</p>
                <v-divider></v-divider>
            </v-flex>

        
            <v-flex xs12 sm6 md6 xl6 class="pt-2">
                <v-text-field
                    class="fontIran"
                    label="در لیست معاملات نمایش داده می شود."
                >
                </v-text-field>
            </v-flex>
            
            <v-layout row wrap>
            <v-flex  xs9 sm4 md4 xl4>
                    <v-text-field
                        class=" fontIran textAmount"
                        label="مقدار"
                    >
                    </v-text-field>
            </v-flex>
                <v-flex  xs3 sm2 md2 xl2>
                    <v-select
                        :items="items"
                        label="دلار"
                        required
                        class="fontIran select"
                    >
                    </v-select>
                </v-flex>
            </v-layout>
        
            <div>
                <v-btn to="" class="grey darken-2 fontIran">ادامه دادن</v-btn>
            </div>
            <div>
                <v-list-group class="fontIran">
                    {{text}}
                </v-list-group>
            </div>
        </v-card-text>
    </v-flex>
</v-container>
</template>
<script>
    export default{
        data() {
            return{
                text:'به سایت مبادله ما خوش آمدید؟'
            }
        }
    }
</script>
<style scoped>
.titled{
    font-family: Iranian Sans;
    font-size: 18px;
}
.fontIran{
    font-family: Iranian Sans;
}
.contant{
    font-family: Iranian Sans;
   
}
</style>
