<template>
    <div>
        <div>
            <p class="createBitcoin">create a bitcoin trade advertisement</p>
        </div>
        <div class="advertisement">
            <p class="beforeCreate">please <router-link to="/Login" class="topLogText">logIn</router-link> or <router-link to="/signUp" class="topLogText0">signUp</router-link> before creating an advertisement</p>
        </div>
        <div>
            <p class="rules">Advertisement rules and requirements</p>
            <ul>
                <li>For your ads to display you need to have Bitcoins in your LocalBitcoins wallet. You need 0.04 BTC or more for advertisements with online payment methods and 0.04 BTC or more for local advertisements (Cash).</li>
                <li>Certain payment methods require you to be ID verified before your ads are visible.</li>
                <li>Each completed trade costs advertisers 1% of the total trade amount.<span><router-link to="" class="fees"> See all fees on our fees page.</router-link></span></li>
                <li>Once a trade is opened the price is final, except when there is a clear mistake in the pricing.</li>
                <li>You are not allowed to buy or sell Bitcoin on behalf of someone else (brokering).</li>
                <li>You may only use payment accounts that are registered in your own name (no third party payments!).</li>
                <li>You must provide your payement details in the advertisement or in the trade chat.</li>
                <li>All communication must happen on LocalBitcoins.com.</li>
                <li>Payment methods marked <span class="span">High Risk</span> have a <span class="span">significant risk of fraud</span>. Be careful and always ID verify your trading partners when using high risk payment methods.</li>
            </ul>
        </div>
        <div>
            <p class="tradeType">trade type</p>
        </div>
        <v-divider></v-divider>
        <div>
                <p class="wantText">i want to...</p>
                <v-radio-group v-model="radioGroup">
                    <v-radio
                        v-for="tradeType in tradeTypes"
                        :key="tradeType"
                        :label="tradeType"
                        :value="tradeType"
                    ></v-radio>
                </v-radio-group>
                <p class="kindTrade">What kind of trade advertisement do you wish to create?<br> If you wish to sell bitcoins make sure<br> you have bitcoins in your LocalBitcoins wallet.</p>
        </div>
        <v-divider></v-divider>
        <div>
            <v-text-field label="enter your location"></v-text-field>
        </div>
        <div>
            <p>more information</p>
            <v-divider></v-divider>
        </div>
        <div>
            <p>currency</p>
            <v-text-field label="enter currency"></v-text-field>
        </div>
        <v-divider></v-divider>
        <div>
            <p>margin</p>
            <v-text-field label="enter margin"></v-text-field>
            <p>Margin you want over the bitcoin market price. Use a negative value for buying or selling under the market price to attract more contacts. For more complex pricing edit the price equation directly.</p>
        </div>
        <div>
            <p></p>
            <v-text-field label="price equation"></v-text-field>
            <p>trade price with current market value 6496.30 USD/BTC</p>
            <p>How the trade price is determined from the hourly market price. For more information about equations how to determine your trading price see  pricing FAQ. Please note that the advertiser is always responsible for all payment processing fees.</p>
        </div>
        <v-divider></v-divider>
        <div>
            <p>max.transaction limit</p>
            <v-text-field label="maximum transaction limit"></v-text-field>
            <p>Optional. Maximum transaction limit in one trade. For online sells, your LocalBitcoins.com wallet balance may limit the maximum fundable trade also.</p>
        </div>
        <v-divider></v-divider>        
        <div>
            <p>restrict amounts to</p>
            <v-text-field label="restrict amount"></v-text-field>
            <p>Optional. Restrict trading amounts to specific comma-separated integers, for example 20,50,100. In fiat currency (USD/EUR/etc). Handy for coupons, gift cards, etc.</p>
        </div>
        <v-divider></v-divider>
        <div>
            <p>liquidity options</p>
            <v-divider></v-divider>
        </div>
        <div>
        <p>Track liquidity</p>
        <v-checkbox></v-checkbox>
        <p>This option limits the liquidity of this advertisement to the max. transaction limit. Buyers cannot open and complete trades for more than this amount.</p>
        <p>Example: With track liquidity turned on and max. transaction limit set to 100 USD when a buyer opens a trade for 20 USD the max. transaction limit is automatically decreased to 80 USD. It returns to 100 USD if the buyer cancels the trade, and stays at 80 USD if the trade is completed.</p>
        </div>
        <div>
            <p>security options</p>
            <v-divider></v-divider>
        </div>
        <div>
            <p>identified people only</p>
            <v-checkbox></v-checkbox>
            <p>To contact your advertisement, users need to verify their identity by sending IDs, driver's licence or passport.</p>
        </div>
        <v-divider></v-divider>
        <div>
            <p>sms vertification required</p>
            <v-checkbox></v-checkbox>
            <p>Only contacts with a verified mobile phone number can contact you from the advertisement</p>
        </div>
        <v-divider></v-divider>
        <div>
            <p>trusted people only</p>
            <v-checkbox></v-checkbox>
            <p>Restrict your advertisement to be shown only to users that you have marked as  Trusted.<router-link to="">Learn how to mark users as trusted</router-link>.</p>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
</template>
<script>
import Footer from './../components/Footer.vue'
    export default{
        data(){
            return{
                checkbox:true,
                radioGroup:1,
                tradeTypes:[
                    "Sell Your bitcoin locally",
                    "Buy  bitcoin locally",
                    "Sell Your bitcoin online",
                    "Buy bitcoin online"
                ]
            }
        },
        components:{
            Footer
        }
    }
</script>
<style>
.createBitcoin{
    font-size:30px;
    font-family:bold;
    text-align:left;
    color:black;
    text-shadow:1px 4px 4px rgb(179, 166, 166);
}
.beforeCreate{
    color:#a94442;
    -font-size:15px;
    font-family:b nazanin;
    margin-left:15px;
    margin-top:15px;
}
.advertisement{
    background-color:#f2dede;
    border:1px solid #ebccd1;
    border-radius:4px;
}
.topLogText{
    color:#3479b6;
    font-size:15px;
    font-family:b nazanin;
    text-decoration:none;
    text-shadow:none;
}
.topLogText:hover{
    text-decoration:underline;
    color:#23527c;
}
.rules{
    color:inherit;
    text-align:left;
    font-size:20px;
    font-family:b nazanin;
    margin-top:10px;
}
.span{
    color:black;
    font-family:b nazanin;
    font-weight:bold;
    font-size:15px;
}
.fees{
    text-decoration:none;
    color:#3479b6;
}
.fees:hover{
    text-decoration:underline;
    color:#23527c;
}
.tradeType{
    margin-top:21px;
    margin-bottom:0;
    color:rgb(3, 3, 3);
    font-size:20px;
    font-family:b nazanin;
}
.wantText{
    margin-top:20px;
    margin-left:0;
    color:black;
    font-size:17px;
    font-family:b nazanin;
}
.kindTrade{
    color:black;
    font-size:20px;
    font-family:b nazanin;
    text-align:left;
    text-shadow:1px 4px 4px rgb(129, 124, 124);
}
li{
    color:rgb(7, 7, 7);
    font-size:15px;
    font-family:b nazanin;
    text-align:left;
    text-shadow:1px 4px 4px rgb(189, 175, 175);
}
 </style>
