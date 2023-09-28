const axios = require("axios");
const BASE_URL = "http://localhost:5000";


//You will sometimes have situations where you are firing up multiple requests at the same time, and the requests can be in many cases promises such as axios calls. We have no guarantee which promises finish first. If we want to be able to wait for multiple promises to all finish before running some other code, we use Promise.all()

function bulkFind(ids=[]){
  const arrayOfPromises = ids.map(id=>axios.get(`${BASE_URL}/players/${id}`))
  // console.log(arrayOfPromises)
  return Promise.all(arrayOfPromises)
    .then((arrayOfResponses)=>{
      console.log(arrayOfResponses) //the cb parameter for the .then() on a Promise.all() will be an array of full response object for each of the promises in the array of promises.
      const onlyData = arrayOfResponses.map(responseObj => responseObj.data)
      console.log(onlyData)
    })
}


bulkFind([1,2,7])


function bulkDelete(ids=[]) {
  //map the ids to delete requests
  const arrayOfPromises = ids.map(id=>axios.delete(`${BASE_URL}/players/${id}`))
  //use promise.all on the array of delete requests
  //one response object, array of full responses, array of response.datas
  return Promise.all(arrayOfPromises).then((word)=>{
    // console.log(word)
    //figure out how to return an array of objects with each object having an 'id' property and the value of those id properties being the id's of the players that were deleted
  })
}

bulkDelete([1,2,7]) //[{id: 1}, {id: 2}, {id: 3}]
