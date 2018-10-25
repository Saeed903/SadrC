<template>
    <div>
          <div class="changePassword">
            <span class="twoCharacters">تغییر رمز عبور</span><br>
            <router-link class="routerCharacters" to="">تغییر رمز عبور</router-link>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">تغییر آدرس ایمیل</span><br>
            <router-link class="routerCharacters" to="">تغییر آدرس ایمیل</router-link>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">ارزیابی</span><br>
            <span class="textCharacters">آدرس ایمیل تایید شده:نه</span><br>
            <router-link class="routerCharacters" to="">راه اندازی ایمیل</router-link><br>
            <span class="textCharacters">شماره تلفن تایید شده:نه</span><br>
            <router-link class="routerCharacters" to="">تایید شماره تلفن</router-link><br>
            <span class="textCharacters">identify verified;no</span><br>
            <router-link class="routerCharacters" to="">verify identify</router-link>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">security</span><br>
            <span class="textCharacters">your account security level is:weak</span><br>
            <router-link class="routerCharacters" to="">edit security options</router-link><br>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">real name</span><br>
            <span class="textCharacters">real name vertification :0 vertifications</span><br>
            <router-link class="routerCharacters" to="">your real name information</router-link><br>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">apps</span><br>
            <span class="textCharacters">Third-party apps can do trades for you on sadrCrypto with <router-link class="routerCharacters" to="">SadrCrypto API</router-link>.</span><br>
            <span class="textCharacters">you are not using any apps right now</span><br>
            <router-link class="routerCharacters" to="">set and change app PIN code</router-link><br>
            <router-link class="routerCharacters" to="">manage apps</router-link>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">premium service receips</span><br>
            <router-link class="routerCharacters" to="">view your receips for sadrCrypto.com services here.</router-link><br>
            <span class="textCharacters"><strong class="textCharacters">note:</strong>there are not the receips from your transactions,but the receipss from the services you have bought from sadrCrypto.com,for tax purposes.you can find your trade receips undre<router-link class="routerCharacters" to="">dashboard</router-link>,closed contacts.</span><br>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">personal data</span><br>
            <router-link class="routerCharacters" to="">show personal data</router-link>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">account data</span><br>
            <router-link class="routerCharacters" to="">delete your sadrCryptos account</router-link>
        </div>

    </div>
</template>
<script>
    
</script>
<style>







.twoCharacters{
    font-size:21px;
    font-weight:bold;
    font-family:b nazanin;
    color:rgb(34, 31, 31);
    text-shadow:1px 3px 3px rgb(168, 156, 156);
}
.routerCharacters{
    text-decoration:none;
    text-indent:55px;
    font-size:17px;
    font-family:b nazanin;
    color:rgb(15, 123, 224);
}
.routerCharacters:hover{
    text-decoration:underline;
    color:rgb(3, 129, 247);
    text-shadow:1px 3px 3px rgb(179, 167, 167);
}
.textCharacters{
    font-size:17px;
    font-family:b nazanin;
    color:rgb(5, 5, 5);
}
.changePassword{
    padding-top:30px;
}

</style>
