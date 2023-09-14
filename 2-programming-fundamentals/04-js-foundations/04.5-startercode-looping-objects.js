const player = {
  firstName: "Lebron",
  "last name": "James",
  age: 38,
  awards: ["MVP", "Finals MVP", "Points leader of all time", "GOAT"],
  team: {
    name: "Lakers",
    city: "Los Angeles",
    salary: 38000000
  }
}

// - OBJECTS HAVE KEY VALUE PAIRS (KEYS ARE ALSO PROPERTIES)

// - KEYS NEED TO BE IN STRINGS IF THEY HAVE A SPACE OR '-' IN IT

// - ACCESSING VALUES IN AN OBJECT USING A KEY NAME (DOT NOTATION VS BRACKET NOTATION)
// console.log(player.firstName)
// console.log(player.age)
// console.log(player["last name"])
// console.log(player["firstName"])
// console.log(player.team.name)
// console.log(player["team"]["name"])
// console.log(player["team"].salary)



// - DOT NOTATION VS BRACKET NOTATION TO ADD THE FOLLOWING KEYS: 'NUMBEROFCHAMPIONSHIPS', 'HOMETOWN':
player.height = 84;
player["hometown"] = "Cleveland"


// - DOT NOTATION VS BRACKET NOTATION TO UPDATE AN EXISTING KEY VALUE PAIR
player.firstName = "bron bron"
player["age"]++
// console.log(player)





// - VARIABLES GO IN BRACKET NOTATION WITH NO QUOTES
const primeroNombre = "firstName";

console.log(player[primeroNombre]);
console.log(player.otherSport)

// - LITERAL PROPERTY NAMES GO IN DOT NOTATION OR BRACKET NOTATION WITH QUOTES



// - FOR IN LOOP TO LOOP OVER OBJECTS - "foreign object"
for(let key in player){
  console.log("key is", key)
  console.log("value is", player[key])
}


// - OBJECT.KEYS() AND OBJECT.VALUES() GIVE US BACK ARRAYS THAT WE CAN LOOP THROUGH KEYS AND VALUES WITH
console.log(Object.keys(player))
console.log(Object.values(player))


// - FOR OF LOOP TO LOOP OVER ARRAYS
const names = ["Gavin", "William", "Charlie", "Nimit", "Nathaniel"];

for(let studentName of names){
  console.log(studentName)
}



