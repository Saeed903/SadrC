<template>
    <div>
        <div>
            <p class="sendBtc">فرستادن بیت کوین</p>
        </div>
        <div class="wallet">
            <div class="walletBtc">
                <p class="boxText">:در کیف پول شما</p>
                <p class="boxText">:هزینه معاملات</p>
                <p class="boxText">:شما می توانید به سرعت</p>
            </div>
            <div class="walletBtcLeft">
                <p>0 BTC</p>
                <p>0.00005 BTC</p>
                <p>0 BTC</p>
            </div>
        </div>
        <div>
            <v-text-field
            label="آدرس بیت کوین"
            class="textField"
            >
            </v-text-field>
        </div>
        <div>
            <v-text-field
             label="مقدار بیت کوین"
             class="secondTextField"
            >
            </v-text-field>
        </div>
        <div>
            <p class="moreOption">گزینه های بیشتر</p>
        </div>
        <div>
            <v-text-field
                class="textAppear"
                label=".در لیست معاملات نمایش داده می شود"
            >
            </v-text-field>
        </div>
        <div>
            <v-text-field
                class="textAmount"
                label="مقدار"
            >
            </v-text-field>
        </div>
        <div>
            <v-select
                :items="items"
                label="دلار"
                required
                class="select"
            >
            </v-select>
        </div>
        <div>
            <v-btn to="" class="primary">ادامه دادن</v-btn>
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
<style scoped>
.textField{
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
