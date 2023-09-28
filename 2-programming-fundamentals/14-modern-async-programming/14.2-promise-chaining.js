const axios = require("axios");
const BASE_URL = "http://localhost:5000";

const player = {
  name: "Chris Paul",
  team: "Lakers",
  number_championships: 4,
  state: "California"
}


// PROBLEM: WE NEED TO CHECK IF A PLAYER BY A GIVEN NAME EXISTS, IF THEY DO NOT, THEN WE WILL CREATE A PLAYER BY THAT NAME
function createIfNotExists(body){
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      const {data} = response;
      // console.log(data)
      const doesPlayerExist = data.some((playerObj)=>{
        return playerObj.name === body.name
      })

      if(!doesPlayerExist){
        //only make the post request if the player with the given name does not exist already
        return axios.post(`${BASE_URL}/players`, body)
          
      }else{
        throw new Error("Player with this name already exists, please try another name.")
        // throw "Player with this name already exists, please try another name."
      }
    })
    .then((response)=>{
      console.log("new player created!")
      console.log(response.data)
    })
    .catch((err)=>{
      console.log("errr happened!")
      console.log(err.message)
    })
}

// createIfNotExists(player)

function updateIfExists(id, body) {
  //use axios to retrieve a player with the given id
  return axios.get(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      console.log("in the .then()")
      console.log(response.data)
      return axios.put(`${BASE_URL}/players/${id}`, body)
    })
    .then((response)=>{
      console.log("successfully updated player")
      console.log(response.data)
      return response.data;
      // return axios.get(/*some code here*/)
    })
    
    .catch((err)=>{
      console.log("in the .catch()")
      console.log(err.message)
      return err.message;
    })
}

const newData = {
  name: "Gavin",
  team: "Celtics",
  number_championships: 30,
  state: "Boston"
}

updateIfExists('ZWMTa7P', newData)
updateIfExists(100, newData)
