<template>
    <div>
        <p>داشبورد بازرگان</p>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 lg5 offset-lg2>
                    <v-expansion-panel inset>
                        <v-expansion-panel-content
                            v-for="(item,i) in items"
                            :key="i"
                            >
                            <div slot="header">{{item.title}}</div>
                            <v-card>
                            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
 export default{
    data:() => ({
        items:[
            {title:'farzad'},
            {title:'ali'},
            {title:'ahbar'},
            {title:'heydar'},
            {title:'saeed'},
        ]
    })
 }
</script>