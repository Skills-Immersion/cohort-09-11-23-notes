const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// const promise = welcome();

// promise.then((resolvedVal)=>{
//   console.log(resolvedVal)
// })


// console.log("texting a friend")
// promise.then(console.log)


function getFortuneLog(question){
  const result = [];
  welcome()
    .then((welcomeMsg)=>{
      // console.log(welcomeMsg)
      result.push(welcomeMsg)
      tell(question)
        .then((tellMsg)=>{
          // console.log(tellMsg)
          result.push(question)
          result.push(tellMsg)
          console.log(result)
        })
    })
}

getFortuneLog("Should I get a dog?")
getFortuneLog("Should I move to Mexico?")
getFortuneLog("Are dogs > cats?")


