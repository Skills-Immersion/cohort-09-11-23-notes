//Our functions will be here
function greet(name){
  console.log("wazzzaaap", name)
}

function findPlantById(plants, id) {
  let result = null;
  for (let i = 0; i < plants.length; i++) {
    let plant = plants[i];
    if (plant.id === id) {
      result = plant;
    }
  }
  return result;
}


//export data like this
module.exports = {greet, findPlantById};
