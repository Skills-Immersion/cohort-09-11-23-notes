//GLOBAL VARIABLE - variable that is created outside of functions, loops, and conditional blocks
const firstname = "Rob"
//GLOBAL FUNCTION
//FUNCTIONS CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A FUNCTION IS ONLY VISIBLE WITHIN THAT FUNCTION
function greet(name){
  console.log("hello ", name)
  console.log(firstname)
  const color = "blue"
}

// console.log(color)

greet("bron")


//LOOPS AND CONDITIONALS (BLOCKS) CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A BLOCK IS ONLY VISIBLE WITHIN THAT BLOCK
for(let i = 0; i<5; i++){
  // console.log(i)
  const food = "yes please"
}

// console.log(food)
let num = 5;
if(1+1 === 2){
  num++
}

console.log(num)

