// WE WILL LOOK AT EXAMPLES FROM THE LEARNING PLATFORM FIRST
const fs = require('fs'); //file system


//YOU USE PROMISES WHEN YOU WANT TO BE ABLE TO WAIT FOR ASYNC CODE TO FINISH BEFORE RUNNING SOEM SYNC CODE. BY DEFAULT, SYNC CODE WILL ALL RUN BEFORE ASYNC CODE. HOWEVER, SOMETIMES SOME SYNC CODE SHOULD WAIT FOR ASYNC CODE TO FINISH BECAUSE MAYBE IT NEED THE DATA FROM AN ASYNC OPERATION

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
        return reject(error);
      }
      const lines = buffer.toString().split("\n");
      quote = lines[Math.floor(Math.random() * lines.length)];
      resolve(quote)
    });
  })

  
  // console.log(`Your quote is: ${quote}`); //sync
}

const randomQuote = getRandomQuote()

randomQuote
  .then((resolvedVal)=>{
    console.log("resolved val is this", resolvedVal) //sync
  })
  .catch((rejectedVal)=>{
    console.log("rejected val is this", rejectedVal)
  })

// setTimeout(()=>{
//   console.log(randomQuote)
// },1000)




