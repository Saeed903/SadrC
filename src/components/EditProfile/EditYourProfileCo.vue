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
    </div>
</template>
<script>
    
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
</style>

