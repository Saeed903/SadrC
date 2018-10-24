<template>
    <div>
        <div class="changePassword">
            <span class="twoCharacters">change password</span><br>
            <router-link class="routerCharacters" to="">change password</router-link>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">change email address</span><br>
            <router-link class="routerCharacters" to="">change email address</router-link>
        </div>

        <div class="changePassword">
            <span class="twoCharacters">vertification</span><br>
            <span class="textCharacters">E-mail verified:no</span><br>
            <router-link class="routerCharacters" to="">set up email</router-link><br>
            <span class="textCharacters">phone number verified:no</span><br>
            <router-link class="routerCharacters" to="">verify phone number</router-link><br>
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

        <div>
            <p>apps</p>
            <p>third-party apps can do trades for you on sadrCrypto with <router-link to="">SadrCrypto API</router-link>.</p>
            <p>you are not using any apps right now</p>
            <router-link to="">set and change app PIN code</router-link>
            <router-link to="">manage apps</router-link>
        </div>

        <div>
            <p>premium service receips</p>
            <router-link to="">view your receips for sadrCrypto.com services here.</router-link>
            <p><strong>note:</strong>there are not the receips from your transactions,but the receipss from the services you have bought from sadrCrypto.com,for tax purposes.you can find your trade receips undre <router-link to="">dashboard</router-link>,closed contacts.</p>
        </div>

        <div>
            <p>personal data</p>
            <router-link to="">show personal data</router-link>
        </div>

        <div>
            <p>account data</p>
            <router-link to="">delete your sadrCryptos account</router-link>
        </div>

    </div>
</template>
<script>
    
</script>
<style>
.twoCharacters{
    font-size:20px;
    font-weight:bold;
    font-family:b nazanin;
    color:rgb(34, 31, 31);
    text-shadow:1px 3px 3px rgb(168, 156, 156);
}
.routerCharacters{
    text-decoration:none;
    text-align:justify;
    direction:rtl;
    text-indent:5px;
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
