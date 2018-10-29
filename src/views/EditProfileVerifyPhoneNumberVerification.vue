<template>
    <div>
        <p>تأیید شماره تلفن</p>
        <p>.ما کد تایید خود را به شماره تلفن شما ارسال کردیم</p>
        <p>.کد تأیید را در فیلد زیر وارد کنید</p>
        <v-text-field
            label="verification code"        
        >
        </v-text-field>
        <v-btn @click="submit" class="primary">تأیید</v-btn>
        <v-btn @click="submit" class="accent">شماره تلفن اشتباه است؟</v-btn>
    </div>
</template>
