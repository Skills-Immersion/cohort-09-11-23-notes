const axios = require("axios");
//GET ALL PLAYERS
function findAllPlayers(){

}
//GET ONE PLAYER BY ID
function findPlayerById(id){
  return axios.get(`http://localhost:5000/players/${id}`)
    .then((response)=>{
      const {data} = response;
      console.log(data)
    })
    .catch((err)=>{
      console.log(err.message)
    })

}

// findPlayerById(3)
// findPlayerById(1)
// findPlayerById(2)


//CREATE A NEW PLAYER
function createPlayer(info={}){
  return axios.post("http://localhost:5000/players", info)
  .then((response)=>{
    const {data} = response;
    console.log(data)
  })
  .catch((err)=>{
    console.log(err.message)
  })
} 

// createPlayer({
//   name: 'Gavin',
//   team: 'Knicks',
//   number_championships: 2,
//   state: 'New York'
// })


//UPDATE PLAYER BY ID
function updatePlayer(id, newInfo){
  return axios.put(`http://localhost:5000/players/${id}`, newInfo)
  .then((response)=>{
    const {data} = response;
    console.log(data)
  })
  .catch((err)=>{
    console.log(err.message)
  })
}

const bron = {
  "name": "Bron bron",
  "team": "Cavs",
  "number_championships": 6,
  "state": "Ohio"
}

// updatePlayer(1, bron)

//DELETE PLAYER BY ID
function deletePlayer(id){
  return axios.delete(`http://localhost:5000/players/${id}`)
  .then((response)=>{
    const {data} = response;
    console.log(data)
  })
  .catch((err)=>{
    console.log(err.message)
  })
}

deletePlayer(3)

