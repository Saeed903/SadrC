<template>
    <div>
        <div>
            <p class="sendBtc">send bitcoins</p>
        </div>
        <div class="wallet">
            <div class="walletBtc">
                <p class="boxText">in your wallet:</p>
                <p class="boxText">transactions fee:</p>
                <p class="boxText">you can speed up to:</p>
            </div>
            <div class="walletBtcLeft">
                <p>0 BTC</p>
                <p>0.00005 BTC</p>
                <p>0 BTC</p>
            </div>
        </div>
        <div>
            <v-text-field
            label="bitcoin address"
            class="textField"
            >
            </v-text-field>
        </div>
        <div>
            <v-text-field
             label="amount in bitcoins"
             class="secondTextField"
            >
            </v-text-field>
        </div>
        <div>
            <p class="moreOption">more options</p>
        </div>
        <div>
            <v-text-field
                class="textAppear"
                label="appears in the transactions list"
            >
            </v-text-field>
        </div>
        <div>
            <v-text-field
                class="textAmount"
                label="amount"
            >
            </v-text-field>
        </div>
        <div>
            <v-select
                :items="items"
                label="usd"
                required
                class="select"
            >
            </v-select>
        </div>
        <div>
            <v-btn to="" class="primary">continue</v-btn>
        </div>
        <div>
            <v-list-group>
                {{text}}
            </v-list-group>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                text:'welcome to my exchange site'
            }
        }
    }
</script>
<style>
.textField{s
    width:50%;
}
.secondTextField{
    width:50%;
}
.textAppear{
    width:50%;
}
.textAmount{
    width:50%;
}
.select{
     width:50%;
}
.wallet{
    background-color:rgb(226, 242, 255);
    border:2px solid rgb(214, 229, 241);
    border-radius:3px;
    margin-bottom:40px;
    height:110px;
    width:75%;
}
.walletBtc{
    float:left;
}
.walletBtcLeft{
     float:left;
     text-align:right
}
.sendBtc{
    font-size:25px;
    font-family:b titr;
    text-align:left;
    text-shadow:1px 3px 3px rgb(185, 173, 173);
    display:block;
}
.boxText{
    margin-left:10px;
}
.moreOption{
    font-size:25px;
    font-family:b nazanin;
    text-align:left;
    text-shadow:1px 3px 3px rgb(185, 173, 173);
}

</style>
