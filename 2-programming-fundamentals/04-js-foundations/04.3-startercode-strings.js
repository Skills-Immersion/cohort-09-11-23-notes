//Concept: all strings are immutable - cannot update it
let cool_quote = "how YOU DO anyTHInG is How You dO eVERyThING"



// Strings have indices
// console.log(cool_quote[1])
cool_quote[1] = "H"
// cool_quote = cool_quote + "!"
cool_quote += "!"

// console.log(cool_quote)

// You can get length of a string
// console.log(cool_quote.length)



// You can loop through a string
// for(let i = 0; i<cool_quote.length; i++){
//   console.log(cool_quote[i])
// }

// for(let char of cool_quote){
//   console.log(char)
// }



// lets create the sentence case function
function sentenceCase(inputString){
  //store the first character in inputString as an upppercase letter into a variable - result
  let result = inputString[0].toUpperCase()
  //go through the rest of the characters in the string - starting at index 1, and add to the result variable each character's lower case version
  for(let i = 1; i<inputString.length; i++){
    if (inputString[i-2] === "." || inputString[i-2] === "?"){
      result += inputString[i].toUpperCase() 
    }else{
      result += inputString[i].toLowerCase()
    }
  }
  //return the result
  return result;
}

// console.log(sentenceCase("waZZAAAP though? lets get this chedda. burr like burrdman")) //Wazzaaap though?


// the substring() method: Gives you a portion of a string
// console.log("lebron is the goat".substring(2,9))
// if you don't provide a second index number, it goes to the end
// console.log("lebron is the goat".substring(2))



// lets do sentence case function using the substring method!
function sentenceCase2(inputString){
  //store the first character in inputString as an upppercase letter into a variable - result
  let result = inputString[0].toUpperCase()
  //go through the rest of the characters in the string - starting at index 1, and add to the result variable each character's lower case version
  let restOfString = inputString.substring(1).toLowerCase()
  //return the result
  return result + restOfString;
}


console.log(sentenceCase2("lebron is goat though"))


// Splitting a string: Split string at each indicated character and put it into an array
// console.log("hello kobe one kanobe run its obi wan".split(" "))

// Joining elements from an array into a string
const strArr = [
  'hello', 'kobe',
  'one',   'kanobe',
  'run',   'its',
  'obi',   'wan'
]

// console.log(strArr.join(", "))


// Explain how titelize works in platform using split and join
function titelize(inputString){
  //get the input into an array of only words from the input
  const wordsArray = inputString.split(" ")
  // let result = "";
  //loop through the words array and send each word to the sentenceCase function
  // for(let word of wordsArray){
  //   result += sentenceCase(word) + " "
  // }

  for(let i = 0; i<wordsArray.length; i++){
    wordsArray[i] = sentenceCase(wordsArray[i])
  }
  // console.log(wordsArray)
  return wordsArray.join(" ")
}

const x = [2,4,8,9,24,25];

// console.log(titelize("today is wednesday and tomorrow is not here yet"));


// Template literals
let streetNoun = "car"
let foodItem = "pizza"
let emotion = "sad"

const sentence = "I saw my " + streetNoun + " on the street and decided to eat " + foodItem + " because I was " + emotion + "."

const sentence2 = `I saw my ${streetNoun} on the street and decided to eat ${foodItem} because I was ${emotion}. \nAnd that's all folks`
// console.log(sentence2)


// Escaping strings



// Study guide time!

