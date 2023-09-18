const dishes = ["Calamari", "Pasta", "Lasagna", "Garlic Bread", "Salad", "Pizza"]
// 1. GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING REGULAR FOR LOOP
for(let i = 0; i<dishes.length; i++){
  const element = dishes[i]
}

// 1.1 GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING .FOREACH()
function printIt(element,idx){
  console.log(element, idx);
}

// const printIt = (element, idx)=>{
//   console.log(element, idx);
// }

// dishes.forEach(printIt)

dishes.forEach((element, idx)=>{
  // console.log(element)
})

  //printIt('Calamari', 0)
  //printIt('Pasta', 1)
  //printIt('Lasagna', 2)
  //...



// 2. USE FOREACH() TO LOOP THROUGH AN ARRAY OF OBJECTS AND SHOW THEIR DETAILS: "The rapper Drake earned 10000000 from rapping career with a fire level of 10."

const rappers = [
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "5",
    moneyEarnedFromRapping: 0
  }
];

// for(let i = 0; i<rappers.length; i++){
//   const rapperElement = rappers[i];
//   const {name, moneyEarnedFromRapping, fireLevel} = rapperElement
//   console.log(`The rapper ${name} earned ${moneyEarnedFromRapping} from rapping career with a fire level of ${fireLevel}.`)
// }

rappers.forEach((rapperElement)=>{
  const {name, moneyEarnedFromRapping, fireLevel} = rapperElement
  console.log(`The rapper ${name} earned ${moneyEarnedFromRapping} from rapping career with a fire level of ${fireLevel}.`)
})

/*

//You can destructure in the parameter - here is an example 

rappers.forEach(({name, moneyEarnedFromRapping, fireLevel})=>{
  // const {name, moneyEarnedFromRapping, fireLevel} = rapperElement
  console.log(`The rapper ${name} earned ${moneyEarnedFromRapping} from rapping career with a fire level of ${fireLevel}.`)
})

*/

/* 
GENERAL RULES OF .FOREACH()

.forEach() -> accepts a callbackfunction as its agrument. It will apply the callback function to each element in the array. 

-The first parameter represents current element in the loop
-The second parameter represents index number of current element

*/


// 3. USE FOREACH TO ADD UP THE FIRELEVELS OF THE ARTISTS ABOVE AND GIVE BACK THE TOTALFIRE AND AVERAGEFIRE
let total = 0;
rappers.forEach((rapperObject,idx)=>{
  total+= Number(rapperObject.fireLevel);
})

console.log(total)
console.log("average is", total/rappers.length)


// 4. USE FOREACH TO BUILD A STATEMENT FROM GIVEN DATA ABOVE "MY TOP RAPPERS LIST ARE: DRAKE, LUPE FIASCO, ROB D, AND THEY ARE ALL FUEGO.
let sentence = "My top rappers list are: "
rappers.forEach((rapperObject)=>{
  sentence += `${rapperObject.name}, `
})

sentence += "and they are all fuego."
console.log(sentence)

// 5. USE FOREACH TO LOG THE MONEYEARNEDFROMRAPPING FOR EACH ARTIST ABOVE AND FORMAT USING THE DOLLAR SIGN TO SHOW AMOUNT IN DOLLARS







