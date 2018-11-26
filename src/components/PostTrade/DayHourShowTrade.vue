<template>
    <v-layout>
        <v-flex>
               
        <v-card-text class="fontIran"> 
            <p>روزها و ساعت هایی که میخواهید آگهی و تبلیغات شما نشان داده شود:</p>
        </v-card-text>
        
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex>
                <v-layout>
                <v-flex xs2 sm1 md1 lg1>
                    <v-card-text class="fontIran">شنبه</v-card-text>
                </v-flex>
                <v-flex xs5 sm4 md3 lg3>
                    <v-select class="fontIran" label="از ساعت" color="cyan accent-2"></v-select>
                </v-flex>
                <v-flex xs5 sm4 md3 lg3>           
                    <v-select class="fontIran" label="تا ساعت" color="cyan accent-2"></v-select>
                </v-flex> 
                </v-layout>

                <v-layout>
                    <v-flex xs2 sm1 md1 lg1>             
                        <v-card-text class="fontIran">1شنبه</v-card-text> 
                    </v-flex>    
                    <v-flex xs5 sm4 md3 lg3>        
                    <v-select class="fontIran" label="از ساعت" color="cyan accent-2"></v-select>             
                    </v-flex>           
                    <v-flex xs5 sm4 md3 lg3>                        
                        <v-select class="fontIran" label="تا ساعت" color="cyan accent-2"></v-select>                 
                    </v-flex>   
                </v-layout>

                <v-layout>
                    <v-flex xs2 sm1 md1 lg1>             
                        <v-card-text class="fontIran">2شنبه</v-card-text> 
                    </v-flex>    
                    <v-flex xs5 sm4 md3 lg3>        
                        <v-select class="fontIran" label="از ساعت" color="cyan accent-2"></v-select>             
                    </v-flex>           
                    <v-flex xs5 sm4 md3 lg3>                        
                        <v-select class="fontIran" label="تا ساعت" color="cyan accent-2"></v-select>                 
                    </v-flex>   
                </v-layout>

                <v-layout>
                    <v-flex xs2 sm1 md1 lg1>             
                        <v-card-text class="fontIran">3شنبه</v-card-text> 
                    </v-flex>    
                    <v-flex xs5 sm4 md3 lg3>        
                        <v-select class="fontIran" label="از ساعت" color="cyan accent-2"></v-select>             
                    </v-flex>           
                    <v-flex xs5 sm4 md3 lg3>                        
                        <v-select class="fontIran" label="تا ساعت" color="cyan accent-2"></v-select>                 
                    </v-flex>   
                </v-layout>

                <v-layout>
                    <v-flex xs2 sm1 md1 lg1>             
                        <v-card-text class="fontIran">4شنبه</v-card-text> 
                    </v-flex>    
                    <v-flex xs5 sm4 md3 lg3>        
                        <v-select class="fontIran" label="از ساعت" color="cyan accent-2"></v-select>             
                    </v-flex>           
                    <v-flex xs5 sm4 md3 lg3>                        
                        <v-select class="fontIran" label="تا ساعت" color="cyan accent-2"></v-select>                 
                    </v-flex>   
                </v-layout>

                <v-layout>
                    <v-flex xs2 sm1 md1 lg1>             
                        <v-card-text class="fontIran">5شنبه</v-card-text> 
                    </v-flex>    
                    <v-flex xs5 sm4 md3 lg3>        
                        <v-select class="fontIran" label="از ساعت" color="cyan accent-2"></v-select>             
                    </v-flex>           
                    <v-flex xs5 sm4 md3 lg3>                        
                        <v-select class="fontIran" label="تا ساعت" color="cyan accent-2"></v-select>                 
                    </v-flex>   
                </v-layout>

                <v-layout>
                    <v-flex xs2 sm1 md1 lg1>             
                        <v-card-text class="fontIran">جمعه</v-card-text> 
                    </v-flex>    
                    <v-flex xs5 sm4 md3 lg3>        
                        <v-select class="fontIran" label="از ساعت" color="cyan accent-2"></v-select>             
                    </v-flex>           
                    <v-flex xs5 sm4 md3 lg3>                        
                        <v-select class="fontIran" label="تا ساعت" color="cyan accent-2"></v-select>                 
                    </v-flex>   
                </v-layout>
                </v-flex>
            </v-layout>
        </v-container>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-textarea
                class="textField mr-3 fontIran"
                label="شرایط تجارت"
                box
                color="cyan accent-2"
                >
                </v-textarea>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-2">سایر اطلاعاتی که میخواهید درباره تجارت خود بگویید<br>.مثال1:این تبلیغات صرفا برای معاملات نقدی است اگر میخواهید با پرداخ ت آنلاین باما تماس بپیرید.
                        مثال2:لطفا درخواست را فقط زمانی که میتوانید پرداخت را با پول نقد ظرف مدت 12 ساعت تکمیل کمید.<br></p>    
            </v-flex>
        </v-layout>

        <v-card-text class="fontIran">
            <p>گزینه های نقدینگی</p>
            
        </v-card-text>
<v-divider></v-divider>
        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="پیگیری نقدینگی"
                class="fontIran pr-3"    
                color="cyan accent-2"               
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.این گزینه نقدینگی این تبلیغ را به حداکثر محدود می کند. محدودیت معامله خریداران می توانند معاملات را بیش از این مقدار باز نکنند</span>    
            </v-flex>
        </v-layout>

        <v-card-text class="fontIran">
            <p>گزینه های امنیتی</p>
            <v-divider></v-divider>
        </v-card-text>
  
        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="فقط شناسایی افراد"
                class="fontIran pr-3" 
                color="cyan accent-2"                  
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.برای تماس با تبلیغات خود، کاربران باید هویت خود را با ارسال شناسه،گواهینامه رانندگی یا گذرنامه تأیید کنند</span>    
            </v-flex>
        </v-layout>
        
        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="تاییدیه پیامک"
                class="fontIran pr-3"   
                color="cyan accent-2"                
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.فقط تماس با یک شماره تلفن همراه تأیید شده می تواند از طریق تبلیغ شما با شما تماس بگیرد</span>    
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="اعتماد مردم"
                class="fontIran pr-3"   
                color="cyan accent-2"                
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.تبلیغات خود را محدود کنید تا تنها به کاربران نشان داده شود که شما به عنوان اعتماد علامتگذاری کرده اید<router-link class="fontsIran" to="">چگونگی علامت گذاری به کاربران مورد اعتماد</router-link>.</span>    
            </v-flex>
        </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
    export default{
        data: () =>({
            checkbox:true,
        select:null,
        radioGroup:1,
        tradeTypes:[
            "فروش بیت کوین خود در صدر کریپتو",
            "خرید بیت کوین در صدر کریپتو",
            "فروش بیت کوین آنلاین شما",
            "خرید بیت کوین آنلاین"
        ],s
        })
    }
</script>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
    padding-left:20px;
}
.fontsIran{
    font-family:'iranian sans';
    color:#00B8D4;
    text-decoration:none;
}
.fontsIran:hover{
    color:#18FFFF;
}

</style>
