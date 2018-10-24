<template>
    <div>
        <div>
            <p class="editProfileText">edit your profile</p>
        </div>
        <div class="topInformationBox">
            <router-link class="topBoxText" to="">basic user information</router-link><br>
            <router-link class="topBoxText" to="">change password</router-link><br>
            <router-link class="topBoxText" to="">change email address</router-link><br>
            <router-link class="topBoxText" to="">verification</router-link><br>
            <router-link class="topBoxText" to="">security</router-link><br>
            <router-link class="topBoxText" to="">real name</router-link><br>
        </div>
        <div class="resendEmail">
            <p class="resendEmailText"><span class="surprise">!</span> you have not verified your email yet.you have about 2 days,22 hours until your vertification mail expires.please check your inbox for the vertification mail soon.</p>
            <v-btn color="info" round to="">resend vertification email</v-btn>
        </div>
        <div class="resendEmail">
            <p class="resendEmailText"><span class="surprise">!</span> you have not added a vertified phone number to your account yet.</p>
            <v-btn color="info" round to="">verify phone number</v-btn>
        </div>
        <div class="resendEmail">
            <div>
                <p class="resendEmailText"><span class="surprise">!</span> you have not  set a real name to your account yet.</p>
            </div>
            <div>
                <v-btn color="info" round to="">set real name</v-btn>
            </div>
        </div>
        <div class="backInfoTop">
            <p class="basicInfo">basic user information</p>
            <p class="basicEmail">email:farzad6238afsari@gmail.com(unverified)</p>
        </div>
        <div>
            <v-select
            class="selectPercentage"
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'timezone is required']"
            label="timezone"
            required
            >
            </v-select>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="show me as real name verifier to others"
            >
            </v-switch>
            <span class="userNameShown"> your username is shown when people make new trades with your trading partners.</span>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="disable sensitive information from email notifications"
            >
            </v-switch>
            <span class="userNameShown">the email will just ask you to log in to the site.where the actual notifications will be.</span>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="enable web notifications"
            >
            </v-switch>
            <span class="userNameShown">you will get external notifications for sale temporarily</span>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="selling vacation"
            >
            </v-switch>
            <span class="userNameShown">disable all your advertisements for purchase temporarily</span>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="buying vacation"
            >
            </v-switch>
            <span class="userNameShown">disable all your advertisements for purchase temporarily</span>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="send SMS notifications for new trade contacts"
            >
            </v-switch>
            <span class="userNameShown">send SMS notifications from new contact requests.(price:free)</span>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="send SMS notifications for new online payments"
            >
            </v-switch>
            <span class="userNameShown">send SMS notifications fro new online payments in your advertisements(price:free)</span>
        </div>
        <div class="showRealName">
            <v-switch
            color="blue"
            label="send SMS notifications from new online escrow releases(price:free)"
            >
            </v-switch>
            <span class="userNameShown">send SMS notifications from new online escrow release(price:free)</span>
        </div>
        <div>
            <v-flex xs6>
                <v-textarea
                    box
                    label="introduction"
                    class="farzad"
                    hint="shown on your public profile.plain text only,up to 200 characters."
                >
                </v-textarea>
            </v-flex>
            <v-btn 
                @click="submit"
                color="blue"
                round
            >
            save profile
             </v-btn>
        </div>
        <div>
            <p>change password</p>
            <router-link to="">change password</router-link>
        </div>
        <div>
            <p>change email address</p>
            <router-link to="">change email address</router-link>
        </div>
        <div>
            <p>vertification</p>
            <p>E-mail verified:no</p>
            <router-link to="">set up email</router-link>
            <p>phone number verified:no</p>
            <router-link to="">verify phone number</router-link>
            <p>identify verified;no</p>
            <router-link to="">verify identify</router-link>
        </div>
        <div>
            <p>security</p>
            <p>your account security level is:weak</p>
            <router-link to="">edit security options</router-link>
        </div>
        <div>
            <p>real name</p>
            <p>real name vertification :0 vertifications</p>
            <router-link to="">your real name information</router-link>
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
export default {
    data: () => ({
        select: null,
        items: [
            'istanbul',
            'tehran',
            'ankara',
            'tabriz',
        ],
    }),
}
</script>
<style>
.editProfileText{
    text-align:left;
    font-size:25px;
    font-family:b nazanin;
    font-weight:bold;
    color:rgb(78, 73, 73);
    text-shadow:1px 3px 3px rgb(207, 194, 194);
}
.topInformationBox{
    border:2px solid rgb(214, 206, 206);
    border-radius:5px;
    background-color:rgb(243, 240, 240);
    width:100%;
    margin-right:auto;
    margin-left:auto;
}
.topBoxText{
    text-decoration:none;
    color:rgb(91, 31, 230);
    font-size:16px;
    font-family:b nazanin;
    padding-left:10px;
}
.topBoxText:hover{
    text-decoration:underline;
    color:rgb(22, 40, 201);
}
.resendEmail{
    background-color:rgb(201, 235, 243);
    border-radius:5px;
    border:2px solid rgb(151, 243, 243);   
    margin-top:22px;
}
.resendEmailText{
    font-size:18px;
    font-family:b nazanin;
    color:rgb(69, 49, 184);
    text-shadow:1px 3px 3px rgb(206, 184, 184);
    padding-left:5px;
    padding-top:6px;
}
.surprise{
    font-weight:bold;
}
.basicInfo{
    font-size:25px;
    font-family:b nazanin;
    font-weight:bold;
    color:rgb(78, 73, 73);
    text-align:left;
    text-shadow:1px 3px 3px rgb(201, 183, 183);
}
.basicEmail{
    font-size:18px;
    font-family:b nazanin;
    color:rgb(78, 73, 73);
    text-align:left;
    text-shadow:1px 3px 3px rgb(201, 183, 183);
}
.backInfoTop{
    margin-top:22px;
}
.userNameShown{
    font-size:18px;
    font-family:b nazanin;
    color:rgb(121, 113, 113);
    padding-top:0;
}
.showRealName{
    padding-bottom:25px;
}
.selectPercentage{
    width:35%;
}
.farzad{
    padding-top:25px;
}
</style>
