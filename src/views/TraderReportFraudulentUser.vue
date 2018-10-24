<template>
    <div>
        <div>
            <p>support:i want to report a fraudulent user</p>
        </div>
        <div>
            <p>dears users,due to unusual amount fo tickets our current time is 2 days.we kindly ask you to not to open multiple tickets regarding the same issue.as it will only prolong our responsive time.thank you for understanding!</p>
        </div>
        <div>
            <p>return to previous</p>
        </div>
        <v-divider></v-divider>
        <div>
            <p>please include with your report:</p>
            <ul>
                <li>the sadrCrypto username of the user you are reporting</li>
                <li>explain in detail your reason for the report</li>
            </ul>
        </div>
        <div>
            <v-text-field
                label="username"
            >
            </v-text-field>
            <p>please enter the username of the user you want to report</p>
        </div>
        <div>
            <v-text-field
                label="message"            
            >
            </v-text-field>
        </div>
        <div>
            <p>attachment</p>
            <v-btn>choose files</v-btn><p>no file chosen</p>
            <p>upload a related image e.g a screenshot.to select multiple files,hold down the CTRL or SHIFT key while selecting.only PNG and JPEG images are accepted</p>
            <v-btn @click="submit" class="primary">send request</v-btn>
        </div>
    </div>
</template>
