/* 
Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. Some of the key benefits of destructuring in JavaScript are:
*/

const product1 = {
  title: "The Golden Compass",
  priceInCents: 799,
  author: {
    firstName: "Philip",
    surname: "Pullman",
  },
};

// - EXAMPLE WITHOUT DESTRUCTURING

function printAuthorAndTitle(product) {
    return `${product.title} by ${product.author.firstName} ${product.author.surname}`;
}

// console.log(printAuthorAndTitle(product1))


// - EXAMPLE WITHOUT DESTRUCTURING BUT USING VARIABLES INSTEAD
function printAuthorAndTitle2(product) {
  const author = product.author;
  const title = product.title;

  return `${title} by ${author.firstName} ${author.surname}`;
}

// - EXAMPLE WITH DESTRUCTURING

function printAuthorAndTitle3(product) {
  //title, author
  const {title, author, priceInCents, madeBy} = product;
  // - WHAT HAPPENS IF THERE IS MISSING KEYS? - madeBy is undefined
  console.log("madeBy is this", madeBy)
  return `${title} by ${author.firstName} ${author.surname}`;
}







// - DESTRUCTURING A NESTED OBJECT WITH NESTED KEYS
function printAuthorAndTitle4(product) {
  
  const {title, author:{firstName, surname}, priceInCents} = product;
  // const {firstName, surname} = author;
  return `${title} by ${firstName} ${surname}`;
}


// - RENAMING A DESTRUCTURED VARIABLE TO BE DIFFERENT FROM THE KEY NAME
function printAuthorAndTitle5(product) {
  
  const {title:novel, author:{firstName, surname:lastName}, priceInCents} = product;
  // const {firstName, surname} = author;
  return `${novel} by ${firstName} ${lastName}`;
}

// console.log(printAuthorAndTitle5(product1))



// - DESTRUCTURING ARRAYS

const genres = [
  "Fantasy", //0
  "Fiction",//1
  "Nonfiction",//2
  "Science Fiction",//3
  "Young Adult", //4
];

// const [a,,b,c] = genres;

// const a = genres[0];
// const b = genres[2];
// const c = genres[3];

// console.log(a) //fantasy
// console.log(b) //nonfiction
// console.log(c) //science fiction



// - THE REST OPERATOR ON OBJECTS (...)
const {priceInCents, ...everythingElse} = product1;
// console.log(everythingElse)
// - THE REST OPERATOR ON ARRAYS

const [a,b,...otherGenres] = genres;
console.log(otherGenres)


// - DESTRUCTURING PARAMETERS
function printAuthorAndTitle7({title, author, priceInCents, madeBy}) {
  // const {title, author, priceInCents, madeBy} = product;
  return `${title} by ${author.firstName} ${author.surname}`;
}

console.log(printAuthorAndTitle7(product1))