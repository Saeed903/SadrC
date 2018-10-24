<template>
    <div>
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
                class="textarea"
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
    </div>
</template>
<script>
    
</script>
<style>
.backInfoTop{
    margin-top:22px;
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
.selectPercentage{
    width:35%;
}
.showRealName{
    padding-bottom:25px;
}
.userNameShown{
    font-size:18px;
    font-family:b nazanin;
    color:rgb(121, 113, 113);
    padding-top:0;
}
.textarea{
    padding-top:25px;
}

</style>
