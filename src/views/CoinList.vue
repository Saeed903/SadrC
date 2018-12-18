<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <td>Rank</td>
                <td>Name</td>
                <td>Symbol</td>
                <td>Price (USD)</td>
                <td>1H</td>
                <td>1D</td>
                <td>1W</td>
                <td>Market Cap (USD)</td>
            </tr>    
        </thead>
        <tbody>
            <tr v-for="(coin, index) in coins" :key="index">
                <td>{{ coin.rank }}</td>
                <td> {{ coin.name }}</td>
                <td>{{ coin.symbol }}</td>
                <td>{{ coin.price_usd | currency }}</td>
                <td :style="getColor(coin.percent_change_1h)">
                <span v-if="coin.percent_change_1h > 0">+</span>{{ coin.percent_change_1h }}%
                </td>
                <td :style="getColor(coin.percent_change_24h)">
                <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}%
                </td>
                <td :style="getColor(coin.percent_change_7d)">
                <span v-if="coin.percent_change_7d > 0">+</span>{{ coin.percent_change_7d }}%
                </td>
                <td>{{ coin.market_cap_usd | currency }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from 'axios';

let CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";

let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";

let cryptocompare_api_key= "f31d8751d294d7d559da3847f272834503ea2681473a4ae68f1d6e9e1f6c6e66";

let UPDATE_INTERVAL = 5 * 1000;

let CoinList = {
    name: 'CoinList',
    data:() => ({
        coins: [],
        coinData: {}
    }),
    methods:{
        getCoins: function() {
            let self = this;

            axios.get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=20")
                .then((resp) => {
                    this.coins = resp.data;
                })
                    .catch((err) => {
                    console.error(err);
                });
        },
        getCoinData() {
            let self = this;

            axios.get(CRYPTOCOMPARE_API_URI + "/data/all/coinlist")
                .then((resp) => {
                    this.coinData = resp.data.Data;
                    this.getCoins();
                })
                    .catch((err) => {
                    this.getCoins();
                    console.error(err);
                });
        },
        // getCoinImage(symbol) {
        //     return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl;
        // },
        getColor: (num) => {
            return num > 0 ? "color:green;" : "color:red;";
        },
    },
    created(){
        this.getCoinData();
    }
};

export default CoinList;

setInterval(() => {
  CoinList.getCoins();
}, UPDATE_INTERVAL);
</script>

