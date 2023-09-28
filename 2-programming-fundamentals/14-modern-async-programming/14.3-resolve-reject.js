// Lets look at examples from the learning module
const axios = require("axios");
const BASE_URL = "http://localhost:5000";


//update the player if the id and body are provided
function update(id, body) {
  if (!id || !body) return Promise.reject("No Id or body was provided");
  const url = `${BASE_URL}/players/${id}`;
  return axios.put(url, body)
}

const newInfo = {
  "name": "Goat bron",
  "team": "Lakers",
  "number_championships": 6,
  "state": "California"
}
// update()

update(1, newInfo)
  .then((response)=>{
    // console.log("response.data is this", response.data)
  })

update()
  .then((response)=>{
    // console.log(response.data)
  })
  .catch(err=>{
    // console.log(err)
  })



//guess the result
// Promise.resolve("hello")
//   .then((value) => Promise.reject(value + " world"))
//   .then((result) => console.log("I said", result))
//   .catch((result) => console.log(`They said: ${result}`));

/* 

//guess the result

*/

Promise.resolve({ name: "Lebron" })
.then((value) => {
  return value.team
  ? Promise.reject(value)
  : Promise.resolve({ error: "Missing key." });
})
.then((result) => console.log("Success:", result))
.catch((result) => console.log("Failure:", result));