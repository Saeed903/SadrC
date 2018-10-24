<template>
    <div>
        <p>login guard</p>
        <router-link to="">back to account security</router-link>
        <p>security options to prevent unauthorized logins</p>
        <v-divider></v-divider>
        <v-checkbox>confirm logins from unknown web browsers</v-checkbox>
        <v-btn @click="submit" class="primary">change settings</v-btn>
        <p>any change to thsese settings requires a confirmation by email</p>
    </div>
</template>
