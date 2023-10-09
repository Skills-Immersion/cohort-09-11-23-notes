const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

// function update(constellation={}) {
//   const url = `${BASE_URL}/constellations/${constellation.id}`
//   //return a promise
//   return axios.put(url,constellation)
//     // .then(response=>{
//     //   console.log(response)
//     // })
//     .catch((err)=>{
//       return {error: `Updating constellation (id: ${constellation.id}) failed.`}
//       // console.log("********", err.error)
//   })
// }

async function update(constellation={}) {
  try{
    const url = `${BASE_URL}/constellations/${constellation.id}`
    //return a promise
    const result = await axios.put(url,constellation)
    return result;
  }catch(err){
    return {error: `Updating constellation (id: ${constellation.id}) failed.`}
  }
}

// update({
//   "id": "lkjlksdjsdlkjdk",
//   "name": "Column",
//   "meaning": "Row",
//   "starsWithPlanets": 5,
//   "quadrant": "CSS"
// })

// function bulkImport(constellations=[]) {
//   //if constellations datatype is not an array, throw an error/ return a promise.reject()
//   if(!Array.isArray(constellations)){
//     return Promise.reject({ error: "Inputted argument must be an array." })
//   }

//   //if at least one (some) constellation objects in the constellations array are not valid, then return a rejected promise
//   // { error: "All constellations must include relevant fields." }
//   const invalid = constellations.some(constellationObj=>!isValid(constellationObj));

//   if(invalid === true) return Promise.reject({ error: "All constellations must include relevant fields." });

//   //If all of the constellations are valid, the function will create a request for each of the given constellations and store those requests inside of an array. Use the update() function to create each of the PUT requests.
//   const arrayOfPromises = constellations.map(constellationObj=>update(constellationObj))
//   // console.log("*******", arrayOfPromises)
//   return Promise.allSettled(arrayOfPromises)
// }


function bulkImport(constellations=[]) {
  //if constellations datatype is not an array, throw an error/ return a promise.reject()
  if(!Array.isArray(constellations)){
    return Promise.reject({ error: "Inputted argument must be an array." })
  }

  //if at least one (some) constellation objects in the constellations array are not valid, then return a rejected promise
  // { error: "All constellations must include relevant fields." }
  const invalid = constellations.some(constellationObj=>!isValid(constellationObj));

  if(invalid === true) return Promise.reject({ error: "All constellations must include relevant fields." });

  //If all of the constellations are valid, the function will create a request for each of the given constellations and store those requests inside of an array. Use the update() function to create each of the PUT requests.
  const arrayOfPromises = constellations.map( (constellationObj)=>{
    return update(constellationObj)
  })
  // console.log("*******", arrayOfPromises)
  return Promise.allSettled(arrayOfPromises)
}

module.exports = { bulkImport, update };
