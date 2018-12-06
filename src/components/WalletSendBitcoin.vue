<template>
    <v-flex xl6 pt-0>
        <v-card-text class="pt-0">

            <p class="pt-0 fontIran pr-3">فرستادن بیت کوین</p>
        
            <v-flex xs12 sm6 md6 xl6>
                <v-card>
                    <v-card-text class="fontIrans pr-2">
                        <p>در کیف پول شما: <span class="pr-5" style="color:greenyellow"> BTC 0</span></p>
                        <p>هزینه معاملات: <span class="pr-5" style="color:greenyellow">0.00005 BTC</span></p>
                        <v-divider></v-divider>
                        <p>شما می توانید به سرعت: <span class="pr-2" style="color:greenyellow">0 BTC</span></p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex pt-0  xs12 sm6 md6 xl6>
                <v-text-field
                label="آدرس بیت کوین"
                class="fontIrans textField"
                >
                </v-text-field>
            </v-flex>
            <v-flex pt-0 xs12 sm6 md6 xl6>
                <v-text-field
                label="مقدار بیت کوین"
                class="fontIrans TextField"
                >
                </v-text-field>
            </v-flex>
        
            <v-flex pt-0 xs12 sm6 md6 xl6 class="pt-3">
                
                <p class="fontIrans">گزینه های بیشتر</p>
                <v-divider></v-divider>
            </v-flex>

        
            <v-flex xs12 sm6 md6 xl6 class="pt-2">
                <v-text-field
                    class="fontIrans"
                    label="در لیست معاملات نمایش داده می شود."
                >
                </v-text-field>
            </v-flex>
            
            <v-layout row wrap>
                <v-flex pt-0 xs7 sm4 md4 xl4>
                    <v-text-field
                        class=" fontIrans textAmount"
                        label="مقدار"
                    >
                    </v-text-field>
                </v-flex>
                <v-flex pt-0 xs4 sm2 md2 xl2>
                    <v-car-text >
                        <v-select
                            :items="items"
                            label="دلار"
                            required
                            class="fontIrans select"
                        >
                        </v-select>
                    </v-car-text>
                </v-flex>
            </v-layout>
        
            <div>
                <v-btn to="" class="grey darken-2 fontIrans">ادامه دادن</v-btn>
            </div>
            <div>
                <v-list-group class="fontIrans">
                    {{text}}
                </v-list-group>
            </div>
        </v-card-text>
    </v-flex>
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
