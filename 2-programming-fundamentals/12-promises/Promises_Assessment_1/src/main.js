const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

// Function: getFortune
// Parameters: question (string)
// Returns: Promise that resolves to a string or an error message
// TODO: Implement the getFortune function by utilizing the ask function to get the fortune for the question
// Hint: Call the ask function with the question and extract the fortune from the response array
function getFortune(question) {
  return tell(question).then((resolvedFortuneMsg)=>{
    return [
      `Your question was: ${question}`,
      `Your fortune is: ${resolvedFortuneMsg}`,
    ];
  }).catch((errorMsg)=>{
    return `There was an error: ${errorMsg}`
  })
}

// getFortune()

// Function: fullSession
// Parameters: question (string)
// Returns: Promise that resolves to an array of strings or an error message
// TODO: Create a full session by combining the welcome, getFortune, and goodbye functions
// Hint: Use promise chaining to call the functions in the correct order and concatenate the results
// [
//   "Provide me a question and I'll give you an answer...",
//   "Your question was: Will I complete my Promises Assignment?",
//   "Your fortune is: As I see it, yes.",
//   "Best of luck in the future...",
// ];
function fullSession(question) {
  let resultArray = []
  //  return welcome()
  //   .then((resolvedWelcomeMsg)=>{
  //     resultArray.push(resolvedWelcomeMsg)
  //     return getFortune(question)
  //       .then((getFortuneResolvedArrOrRejectedString)=>{
  //         // resultArray.push(...getFortuneResolvedArrOrRejectedString)
  //         resultArray = resultArray.concat(getFortuneResolvedArrOrRejectedString)
  //         return goodbye()
  //           .then((resolvedGoodbyeMsg)=>{
  //             resultArray.push(resolvedGoodbyeMsg)
  //             // console.log(resultArray)
  //             return resultArray
  //           })
  //       })
  //   })

    return welcome()
    .then((resolvedWelcomeMsg)=>{
      resultArray.push(resolvedWelcomeMsg)
      return getFortune(question)
    })
    .then((getFortuneResolvedArrOrRejectedString)=>{
      // resultArray.push(...getFortuneResolvedArrOrRejectedString)
      resultArray = resultArray.concat(getFortuneResolvedArrOrRejectedString)
      return goodbye()
    })
    .then((resolvedGoodbyeMsg)=>{
      resultArray.push(resolvedGoodbyeMsg)
      // console.log(resultArray)
      return resultArray
    })
   

  // Call the welcome function
  // Chain the getFortune function to get the fortune for the question
  // Chain the goodbye function and concatenate the results with the session
  // Return a promise that resolves to the final session array or an error message
}

// fullSession("should i get a dog?")

module.exports = { getFortune, fullSession };
