const {greet, findPlantById} = require("./functions")

 

//we will access our functions from here
// greet("Charlie")
// greet("Mona")
// greet("Breanna")


let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

console.log(findPlantById(plants,3));
console.log(findPlantById(plants,1));


