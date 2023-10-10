/*
Make a function called getAllCoins that takes no parameters.
You can use this endpoint: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


Return an array of coins sorted by their price change percentage and where each object has been formatted to have this shape. SORT the results by their price_change_percentage_24h property: 
  
{
    "name": "Bitcoin",
    "current_price": 20575,
    "price_change_percentage_24h": -0.29773
}

*/

const axios = require("axios")
const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

async function getAllCoins() {  
  const response = await axios.get(`${BASE_URL}`)
  const data = response.data
  const sortedCoin = data.sort((a, b)=>b.price_change_percentage_24h - a.price_change_percentage_24h)
  const formattedCoin = sortedCoin.map((coin)=>{
    return {
        name: coin.name,
        current_price: coin.current_price,
        price_change_percentage_24h: coin.price_change_percentage_24h
    }
  })
  return formattedCoin.slice(0,3)
}

getAllCoins().then((response)=>{
    console.log(response)
})