/* 
.reduce() -> loop through the array and accumulate a value based on a condition.
  -INPUT: CALLBACK FUNCTION, INITIAL VALUE
  -RETURNS: ACCUMULATED VALUE
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ACCUMULATOR, ELEMENT, AND INDEX
    -CB RULE: RETURN AN ACCUMULATION - the callback function has to return a value that will be accumulated with the previous values on each iteration.
*/




const numbers = [768, 1004.2, 433.1];
const luckyNums = [7, 11, 3];


function sumNumsForEachWay(nums=[]){
  //set an accumulator
  let total = 0;
  nums.forEach((num, idx)=>{
    total += num;
  })
  return total
}

// console.log(sumNumsForEachWay(numbers))

function sumNums(nums=[]){
  const total = nums.reduce((accumulator, element, idx)=>{
    //accumulate to the accumulator
    accumulator += element
    //you have to return the accumulator at the end of this callback function
    return accumulator;
  },0)

  return total;
}

// console.log(sumNums(numbers))
// console.log(sumNums(luckyNums))



const movies = [
  {
      title: "Austin Powers",
      views: '1000',
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
  {
      title: "Finding Nemo",
      views: 2000,
      producer: { 
          name: "Disney",
          city: "Orlando"
      }
  },
  {
      title: "Forrest Gump",
      views: 3000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
];


/* ADD UP ALL THE VIEWS FROM ALL THE MOVIE OBJECTS IN THE MOVIES ARRAY */


function totalViews(movies=[]){
  const total = movies.reduce((accumulator, movieObj, idx)=>{
    //1. accumulate to the accumulator
    // const x = "views"
    accumulator += movieObj.views;
    //2. return the accumulator
    return accumulator;
  },0)
  return total;
}

// console.log(totalViews(movies))



/* HOW TO ACCUMULATE ONTO OBJECTS- GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS A MOVIE TITLE, AND THE VALUE IS THE PRODUCER NAME 
EXAMPLE OUTPUT:

{
  'Austin Powers': 'Universal Studios',
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
}

{
  "Austin Powers": "Universal Studios",
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
  
}
*/
//For objects when you want to access or create a new key/value pair, use . notation or [""] notation if the key you're accessing or creating is literally spelled the way you want the property to be. If its a varaible that reperesents a property name, you use bracket notation with NO quotes

function movieAndProducerName(movies=[]){
  const result = movies.reduce((acc, movieObj, idx)=>{
    const movieTitle = movieObj.title;
    //1. accumulate to the accumulator
    acc[movieObj.title] = movieObj.producer.name;
    // acc['movieTitle'] = movieObj.producer.name;
    // acc.movieTitle = movieObj.producer.name;
    //2. return the accumulator
    return acc
  },{})

  return result;
}


// console.log(movieAndProducerName(movies));

/* ADVANCED PROBLEM- HINT FOR YOUR ASSESSMENT:  GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS THE PRODUCER NAME, AND EACH VALUE IS AN ARRAY OF MOVIES ASSOCIATED WITH THAT PRODUCER NAME 

EXAMPLE OUTPUT: 

{
  'Universal Studios': [
      { title: 'Austin Powers', views: 1000, producer: [Object] },
      { title: 'Forrest Gump', views: 3000, producer: [Object] }
    ],
  Disney: [ { title: 'Finding Nemo', views: 2000, producer: [Object] } ]
}


{
  "Universal studios": [{austin powers}]
  "Disney": [{finding nemo obj}],
}

*/

function movieByProducer(movies=[]){
  const result = movies.reduce((acc, movieObj, idx)=>{
    //if the accumulator at the current movie objecs producer name key does not exist, create a new key value pair and set the value to be an array
    if(acc[movieObj.producer.name] === undefined){
      //1. accumulate to the accumulator
      acc[movieObj.producer.name] = [movieObj]
    }else{
      //if the accumulator at the current movies producer name is alreay a key whose value is an array, then push to that array
      acc[movieObj.producer.name].push(movieObj)
    }

    //2. return the accumulator
    return acc;
  },{})

  return result;
}

console.log(movieByProducer(movies))