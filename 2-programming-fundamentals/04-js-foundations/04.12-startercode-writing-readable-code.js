const authors = [
  {
    id: 1,
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    series: ["His Dark Materials", "Sally Lockhart"],
  },
  {
    id: 2,
    name: {
      firstName: "Terry",
      lastName: "Pratchett",
    },
    series: ["Discworld", "Long Earth"],
  },
];


/* 
1. DONT REPEAT YOURSELF: THE ABOVE FUNCTION WORKS, HOWEVER WE CAN REFACTOR THE "authors[i]" TO BE MORE READABLE BY ASSIGNING IT TO A VARIABLE:

*/
function getAllSeries(authors) {
  const result = [];
  for (let i = 0; i < authors.length; i++) {
    const currentAuthor = authors[i]
    for (let j = 0; j < currentAuthor.series.length; j++) {
      result.push(currentAuthor.series[j]);
    }
  }
  return result;
}

// console.log(getAllSeries(authors)); // [ 'His Dark Materials', 'Sally Lockhart', 'Discworld', 'Long Earth' ]


/* 
2. RETURN EARLY- GUARD CLAUSE (WHAT IS IT AND WHEN TO USE IT?)
*/

function getSeriesListById(authors, id) {
  //if no id provided we can just return early - guard clause
  if(!id) return "No ID Provided";

  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }

  // if not author was found return early
  if(!selected) return []

  //if we found an author with the given id
  const message = `Series list: ${selected.series.join(", ")}`;
  return message;
  
}

console.log(getSeriesListById(authors, 2))
/*
SOLUTION FOR 2:

function getSeriesListById(authors, id) {
  if (!id) return "No ID provided.";

  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }
  if (!selected) return [];

  return `Series list: ${selected.series.join(", ")}`;
}
*/



/* 
3. AVOID BOOLEAN RETURNS: WE CAN AVOID EXPLICITLY RETURNING TRUE OR FALSE BASED ON A CONDITION BY JUST RETURNING THE EXPRESSION/CONDITION THAT EVALUATES TO TRUE/FALSE:
*/

function moreThanThreeAuthors(authors) {
  // if (authors.length > 3) {
  //   return true;
  // } else {
  //   return false;
  // }
  return authors.length > 3
}


// console.log(authors.length > 3)

/* 
SOLUTION FOR 3:

function moreThanThreeAuthors(authors) {
  return authors.length > 3;
}

*/