const axios = require("axios");
const BASE_URL = "http://localhost:5000";


//You will sometimes have situations where you are firing up multiple requests at the same time, and the requests can be in many cases promises such as axios calls. We have no guarantee which promises finish first. If we want to be able to wait for multiple promises to all finish before running some other code, we use Promise.all()

function bulkFind(ids=[]){
  const arrayOfPromises = ids.map(id=>axios.get(`${BASE_URL}/players/${id}`))
  console.log(arrayOfPromises)
  return Promise.allSettled(arrayOfPromises)
    .then((arrayOfResponses)=>{
      console.log(arrayOfResponses) //the cb parameter for the .then() on a Promise.all() will be an array of full response object for each of the promises in the array of promises.
      const onlyData = arrayOfResponses.map(responseObj => responseObj.data)
      // console.log(onlyData)
    }).catch((err)=>{
      console.log("errror occured")
      console.log(err.message)
    })
}


// bulkFind([1,20,7])


function bulkDelete(ids=[]) {
  //map the ids numbers to pending delete requests (pending promises)
  const arrayOfPromises = ids.map(id=>{
    return axios.delete(`${BASE_URL}/players/${id}`)
      .then((response)=>{
        return {id: id}
        //you can also return {id} using object shorthand since id is same for property and value
      })
  })
  console.log("arr of promises is this", arrayOfPromises)
  //use promise.all on the array of delete requests
  //one response object, array of full responses, array of response.datas
  return Promise.all(arrayOfPromises)
  // .then((reponseArr)=>{
  //   console.log("responseArr is this ------", reponseArr)
  //   //figure out how to return an array of objects with each object having an 'id' property and the value of those id properties being the id's of the players that were deleted
  //   // return ids.map(id=>{
  //   //   return {id:id}
  //   // })
  // })
}

// bulkDelete([1,20,7]) //[{id: 1}, {id: 2}, {id: 3}]
//   .then(answer => console.log(answer))


// axios.get(`${BASE_URL}/players/1`)
//   .then(response=>{
//     console.log(response)
//   })

/* 
*** Response will always be an object with properties: data, status, headers, etc; ***
GET - Data will be all the constellations/players - array
GET (1) - Data will be one constellation/player - obj
POST - Data will be the newly created constellation/player - obj
PUT - Data will be the newly updated constellation/player - obj
DELETE - Data will be an empty object - {} - obj

*/