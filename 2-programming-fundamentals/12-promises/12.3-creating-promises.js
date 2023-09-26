// WE WILL LOOK AT EXAMPLES FROM THE LEARNING PLATFORM FIRST
const fs = require('fs'); //file system


/* 
WHAT IS A PROMISE?

A Promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a way to handle asynchronous code in a more organized and readable manner. They provide a structured way to work with asynchronous operations.


WHEN TO USE A PROMISE?

You use promises when you want to be able to wait for async code to finish before running some sync code. By default, sync code will all run before async code. However, sometimes some sync code should wait for async code to finish because maybe the sync code relies on the data from an async operation. In other words, use promises when you have sync code that relies on the completion of an async process. This way your sync code won't prematurely have the wrong/incomplete information from not waiting for async code.

HOW TO USE A PROMISE?

You will usually have promises within a function. Here are the steps:

1. Identify the async code block

2. Wrap it inside of a promise and return the promise. To create a promsie, here is the outline: 
return new Promise((resolve, reject)=>{
  //put your async code block here
})

3. use resolve() to wrap around the data of interest from the async operation

4. use reject() to wrap around the error that may occur as a result of a failed async operation

5. Once you call a function that returns a promise, you're getting back a "pending promise" which is like a pending order at starbucks. A pending promise doesn't have your data available right away, just like your food order ticket doesn't have your food right away. 

6. To perform a task once a pending promise successfully resolves, use .then(). To perform task once a pending promise rejects/fails, use .catch()

7. .then() takes a callbackfunction with a parameter that represents the resolved value from the promise

8. .catch() takes a calllbackfunction with a parameter that represents the rejected value from the promise

9. The .then() or .catch() will execute as soon as the promise is resolved or rejected

10. using setTimeout is another way to wait for a pending promise, however, the downside is we may set a time amount that waits too long, or not long enough, and the tiem we need to wait may vary on a case by case basis

11. Promises have three states: Pending, Resolved/Fulfilled, Rejected. (Just like your starbucks order when you get the receipt with order number)
*/

// function getRandomQuote(){
//   let quote = null; //sync
  
//   console.log("Finding a quote..."); //sync
  
//   fs.readFile("quotes.txt", (error, buffer) => { //async
//     if (error) {
//       throw error;
//     }
//     const lines = buffer.toString().split("\n");
//     quote = lines[Math.floor(Math.random() * lines.length)];
//   });
  
//   console.log(`Your quote is: ${quote}`); //sync
// }

function getRandomQuote(){
  let quote = null; //sync
  
  console.log("Finding a quote..."); //sync
  
  return new Promise((resolve, reject)=>{
    fs.readFile("qs.txt", (error, buffer) => { //async
      if (error) {
        // throw error;
        return reject(error)
      }
      const lines = buffer.toString().split("\n");
      quote = lines[Math.floor(Math.random() * lines.length)];
      resolve(quote);
    });
  })
}


const randomQuote = getRandomQuote()

console.log("randomQuote", randomQuote)
// setTimeout(()=>{
//   console.log(randomQuote)
// },1000)

randomQuote
  .then((resolvedVal)=>{
    console.log("quote has resolved!!!")
    console.log(resolvedVal)
  })
  .catch((rejectedVal)=>{
    console.log("oops something went wrong with your order")
    console.log(rejectedVal)
  })

console.log("texting a freind")
console.log("loading up anohter part of the site")
console.log("thinking about coding")


// randomQuote
//   .then((resolvedVal)=>{
//     console.log("resolved val is this", resolvedVal) //sync
//   })
//   .catch((rejectedVal)=>{
//     console.log("rejected val is this", rejectedVal)
//   })

// setTimeout(()=>{
//   console.log(randomQuote)
// },1000)



const promise = new Promise((resolve, reject) => {
  console.log("Completed!");
});

console.log("answer is", promise)


