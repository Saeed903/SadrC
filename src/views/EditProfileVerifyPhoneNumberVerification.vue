<template>
    <div>
        <p>phone number verification</p>
        <p>we have sent an SMS with your verification code to your phone number</p>
        <p>enter the verification code in the field below</p>
        <v-text-field
            label="verification code"        
        >
        </v-text-field>
        <v-btn @click="submit" class="primary">verify</v-btn>
        <v-btn @click="submit" class="accent">wrong phone number?</v-btn>
    </div>
</template>
