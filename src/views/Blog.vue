<template>
    <div>
        <div class="divTopicImage">
            <img class="topicImage" src="./../../public/img/SadrCrypto/topic.jpg"/>
            <v-card-text class="fontAweasome text-xs-center">داستانی از دنیای بیت کوین و ارزهای دیجیتال</v-card-text>
        </div>
        <v-card-text>
            <router-link class="textCard" to="">ابزار بیشتر برای معاملات خاموش</router-link><br>
            <span class="fontsIran">ما چندین ابزار را ایجاد کرده ایم که در موارد خاص می تواند معاملات با بیت کوین را ارزان تر کند. یکی از ویژگی های این نرم افزار تنها گزینه ی خاموش برای ابزار تجاری ما است. دیگر تگ recv در کد QR برای سپرده یا پرداخت صورتحساب است. توجه داشته باشید که این پست وبلاگ در راستای توسعه دهندگان، بازرگانان و / یا ارائه دهندگان خدمات است.</span><br>
            <router-link class="textCard" to="">ادامه مطلب</router-link><br>
            <div class="text-xs-left">
                <span class="fontIrans">Jeremias</span><br>
                <span class="fontIrans">September 28th, 2017</span><br>
            </div>
            
        </v-card-text>
    </div>
</template>
<style>
.topicImage{
    width:100%;
}
.divTopicImage{
    max-width:100%;
}
.fontAweasome{
    font-size:20px;
    font-family:'Iranian Sans';
}
.fontIran{
    font-family:'Iranian Sans';
    font-size:19px;
    color:white;
}
.fontsIran{
    font-family:'Iranian Sans';
    font-size:15px;
    color:#E0E0E0;
}
.fontIrans{
    font-family:'Iranian Sans';
    font-size:12px;
    color:#BDBDBD;
}
.textCard{
    font-family:'iranian sans';
    color:#00E5FF;
    text-decoration:none;
}
.textCard:hover{
    color:#18FFFF;
}

</style>
