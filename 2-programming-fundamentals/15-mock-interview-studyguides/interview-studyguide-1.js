/* 
Problem
For this use the CoinGecko Api to find market data for crypto coins.

getCoinMarketData()

Create a function called getCoinMarketData that takes a string as a parameter. The string represents a crypto currency coin such as "bitcoin", or "ethereum", or "solana"

The API endpoint will be similar to this endpoint to get bitcoin information: https://api.coingecko.com/api/v3/coins/bitcoin

Make sure to make the API call update based on the coin name that is passed into getCoinMarketData.

The function should return the market_data object from the result of the API call.

An example output would be

getCoinMarketData('bitcoin') /* ->
  
{
    "current_price": {
      "aed": 70733,
      "ars": 2980147,
      "aud": 30582,
      "bch": 178.634,
      "bdt": 1959024,
      "bhd": 7261.67,
      "bmd": 19257.73,
      "bnb": 70.727,
      "brl": 101677,
      "btc": 1.0,
      "cad": 26438,
      "chf": 19274.37,
      "clp": 18944794,
      "cny": 139869,
      "czk": 476955,
      "dkk": 144991,
      "dot": 3299,
      "eos": 17993,
      "eth": 14.425859,
      "eur": 19492.33,
      "gbp": 17048.91,
      "hkd": 151172,
      "huf": 8069988,
      "idr": 300336961,
      "ils": 68482,
      "inr": 1594236,
      "jpy": 2866799,
      "krw": 27794194,
      "kwd": 5977.41,
      "lkr": 7033330,
      "ltc": 367.378,
      "mmk": 40245174,
      "mxn": 384275,
      "myr": 91243,
      "ngn": 8446557,
      "nok": 202752,
      "nzd": 33889,
      "php": 1133654,
      "pkr": 4221871,
      "pln": 93296,
      "rub": 1191572,
      "sar": 72375,
      "sek": 215675,
      "sgd": 27389,
      "thb": 734875,
      "try": 358212,
      "twd": 622686,
      "uah": 707768,
      "usd": 19257.73,
      "vef": 1928.28,
      "vnd": 478691307,
      "xag": 1006.15,
      "xau": 11.7,
      "xdr": 13707.23,
      "xlm": 175337,
      "xrp": 42424,
      "yfi": 2.547197,
      "zar": 355157,
      "bits": 1000030,
      "link": 2819,
      "sats": 100002999
}, ...other keys related to market data

*/

const axios = require("axios");

// async function getCoinMarketData(coinstring=""){
//   const coinURL = `https://api.coingecko.com/api/v3/coins/${coinstring}`
//   const response = await axios.get(coinURL)
//   return response.data.market_data
// }

// const url = "https://api.coingecko.com/api/v3/coins";

// async function getCoinMarketData(coin="") {
//   const response = await axios.get(`${url}/${coin}`);
//   return response.data["market_data"];
// }

// async function getCoinMarketData(cryptoName = "") {
//   const URL = `https://api.coingecko.com/api/v3/coins/${cryptoName}`
//   const response = await axios.get(URL)
//   return response.data.market_data
// }

// function getCoinMarketData(coinName="") {
//   const base_url = 'https://api.coingecko.com/api/v3/coins'
//   return axios.get(`${base_url}/${coinName}`)
//   .then((response) => {
//       return response.data.market_data
//   })
// }

// const url = "https://api.coingecko.com/api/v3/coins"

// async function getCoinMarketData(inputCoin) {
//   const response = await axios.get(`${url}/${inputCoin}`)
//   return response.data["market_data"];
// }

// async function getCoinMarketData (cryptoCoin=""){
//   const url = "https://api.coingecko.com/api/v3/coins"
//   const response = await axios.get(`${url}/${cryptoCoin}`)
//   return response.data.market_data
// }

// function getCoinMarketData(coin){
//   return axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
//     .then((response)=>{
//       const {data} = response
//       console.log(data.market_data)
//       return data.market_data
//     })
//     .catch(err=>{
//       return err.message;
//     })
// }

// async function getCoinMarketData(coin) {
//   try {
//     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
//     return response.data.market_data;
//   } catch ({ message }) {
//     return message;
//   }
// } 


async function getCoinMarketData(coin = ""){
  const url = "https://api.coingecko.com/api/v3/coins";
  try{
  const response = await axios.get(`${url}/${coin}`)
  return response.data.market_data;
  }
  catch(error) {
    return `Error: ${error.message}`
  }
}



getCoinMarketData("bitcoin")
  .then(answer=>console.log(answer))