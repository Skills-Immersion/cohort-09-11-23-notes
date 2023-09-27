const axios = require('axios');

// MAKE AN API CALL TO THE POKEMON API AND LOG ALL THE POKEMON
function getPokemon(){
  console.log("1. making the order - make the request to an api")
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{
      console.log("2. data recieved!")
      //the code in the .then() will only run once the promise is resolved/order is fulfilled
      const sorted = response.data.results.sort((pkmnA, pkmnB)=>{
        return pkmnA.name.toLowerCase() < pkmnB.name.toLowerCase() ? -1 : 1
      }) //this is the response body similar to in postman

      console.log(sorted.slice(0,10))
    })
    .catch((err)=>{
      console.log(err.message)
    })

  console.log("3. texting a friend while waiting");
  console.log("4. loading up other parts of the page while waiting");

}

// getPokemon()

// MAKE AN API CALL TO THE CRYPTOCURRENCY SERVER AND LOG ALL THE COINS
function getCryptoCoins(){
  return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response)=>{
      //response.data will be all the coins
      const mostProfitibleCoins = response.data.sort((coinA, coinB)=>{
        return coinB.price_change_percentage_24h - coinA.price_change_percentage_24h
      }).map((coinObj)=>{
        return coinObj.name
      })
      console.log(mostProfitibleCoins.slice(0,5));
      return mostProfitibleCoins.slice(0,5);
    })
    .catch((err)=>{
      console.log(err.message)
    })
}

// getCryptoCoins()


// MAKE AN API CALL TO OUR PLAYERS SERVER (LOCALLY RUN SERVER) AND LOG ALL THE PLAYERS
function getAllPlayers(){
  return axios.get("http://localhost:5000/players")
    .then((response)=>{
      const {data} = response
      console.log(data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
}

getAllPlayers()


// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY THE NAMES OF THE PLAYERS IN AN ARRAY
function getPlayerNamesOnly(){

}

// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY PLAYERS FROM A GIVEN STATE
function getPLayersByState(stateName){

}

