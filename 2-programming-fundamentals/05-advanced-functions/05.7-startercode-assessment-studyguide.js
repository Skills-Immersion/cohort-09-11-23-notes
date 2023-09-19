const books = [
  {
    id: 1,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },

  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    publisher: {
      name: "Warner Books",
      state: "California",
    },
  },
  {
    id: 3,
    title: "How to win friends and influence People",
    author: "Dale Carnegie",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    publisher: {
      name: "Penguin Books",
      state: "Maryland",
    },
  },
];

const students = {
  Spongebob: {
    finished: [1, 2],
    notFinished: [3, 4],
  },
  Squidward: {
    finished: [1],
    notFinished: [2, 3, 4],
  },
  Sandy: {
    finished: [1, 3, 4],
    notFinished: [2],
  },
};

/*
1. GET BOOKS BY PUBLISHER NAME
*/
function getBooksByPublisher(books=[], publisherName="") {
  const result = books.filter((bookObj, idx)=>{
    //bookObj.publisher.name
    return bookObj.publisher.name === publisherName;
  })
  return result;
}

// console.log(getBooksByPublisher(books, "Simon & Schuster"));


/* 
2. GET A STUDENTS FINISHED BOOKS

WRITE A FUNCTION THAT TAKES AN ARRAY OF BOOKS, OBJECT CONTAINING ALL STUDENTS, AND A STUDENT NAME.
IT WILL RETURN AN ARRAY OF BOOK OBJECTS THAT REPRESENT THE BOOKS THAT THE GIVEN USER HAS FINISHED.

[
{
    id: 1,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },
   {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    publisher: {
      name: "Warner Books",
      state: "California",
    },
  },
]
*/

function getFinishedBooksFromStudent(books=[], students={}, studentName="" ){
  //have a result variable to put things into -> []
  const result = [];
  //look at the students object first at the key representing studentName at the .finished property - store it in variable eg: [1,2]
  const finishedBookIds = students[studentName].finished; // [1,2]
  //FOR each element in the books array, do:
  books.forEach((bookObj, idx)=>{
    //look at the id of the currentbook
    const {id} = bookObj
    //if the book's id is in the array of finished books id, then its part of our result
    if(finishedBookIds.includes(id)){
      result.push(bookObj)
    }
  })
  
  //return the result;
  return result;
}

function getFinishedBooksFromStudent2(books=[], students={}, studentName="" ){
  //look at the students object first at the key representing studentName at the .finished property - store it in variable eg: [1,2]
  const finishedBookIds = students[studentName].finished; // [1,2]
  //FOR each element in the books array, do:
  const result = books.filter((bookObj, idx)=>{
    //look at the id of the currentbook
    const {id} = bookObj
    //if the book's id is in the array of finished books id, then its part of our result
    return finishedBookIds.includes(id)
      // result.push(bookObj)
  })
  //return the result;
  return result;
}

// console.log(getFinishedBooksFromStudent2(books, students, "Spongebob"))
// console.log(getFinishedBooksFromStudent2(books, students, "Sandy"))


/* 
3. FIND IF A GIVEN STUDENT HAS READ ALL THE BOOKS FROM A GIVEN PUBLISHER. RETURN TRUE OR FALSE

FUNCTION INPUTS: LIST OF BOOKS, OBJECT CONTAINING ALL STUDENTS, PUBLISHER NAME, STUDENT NAME

*/

function hasStudentReadAllBooksFromPublisher(books=[], students={}, publisherName="", studentName=""){
  //look at given studentName's finished books - eg: [1,2];
  // const finishedBookIds = students[studentName].finished;
  const {finished} = students[studentName] //[1,2]
  // console.log("finished", finished)
  //only get the books from the given publisheer [{id:1}, {id:3}] - filterd books
  const booksFromGivenPublisher = getBooksByPublisher(books, publisherName)
  //check if every id from the filteredbooks array is inclued in the given students finished books array
  // console.log("filteredBooksFromGivenPublisher", booksFromGivenPublisher)
  const result = booksFromGivenPublisher.every((bookObj)=>{
    return finished.includes(bookObj.id)
  })

  return result;
}


// console.log(hasStudentReadAllBooksFromPublisher(books, students, "Simon & Schuster", "Spongebob"))

/* 
4. GIVEN AN OBJECT CONTAINING ALL STUDENTS, AND TWO STUDENT NAMES, DETERMINE IF THE FIRST STUDENT HAS READ ANY BOOKS THAT THE SECOND STUDENT HAS NOT READ YET. IF SO, RETURN TRUE. IF THE FIRST STUDENT HAS NOT READ ANY BOOKS THE SECOND STUDENT HAS NOT READ, RETURN FALSE.

*/

function hasStudentReadOtherStudentsUnfinishedBooks(students={}, studentA="", studentB=""){
  //look at studentA's finished books and put in variable - [1, 2]
  // const finished = students[studentA].finished;
  const {finished} = students[studentA];
  //look at studentB's notFinished books and put in variable - [2]
  const {notFinished} = students[studentB];
  //check if there are any elemeents in studentA's finished that are included in studentB's notFinished
  const result = finished.some((finishedId)=>{
    return notFinished.includes(finishedId)
  })
  return result;
}

// console.log(hasStudentReadOtherStudentsUnfinishedBooks(students, "Spongebob", "Sandy"))
/* 

5. RETURN ALL THE STUDENT NAMES WHO HAVE READ ANY BOOK IN THE GIVEN STUDENT'S NOTFINISHED BOOKS

INPUTS: OBJECT OF STUDENTS, STUDENT NAME

*/


function studentsWhoHaveRead(students={}, studentName=""){
  let result = [] //stores the names of the students who have read any book that the given student has not read
  //look at given students not finished books
  const {notFinished} = students[studentName]; //[3, 4]
  //then look at what the other students have read to see if they have read anything spongebob hasnt - loop through the students object first
  for(let key in students){
    //"continue" will go to next iteration if the key is the same as the given student name
    // if(key === studentName) continue; 
    if(key !== studentName){
      const {finished} = students[key];
      const hasStudentRead = finished.some((bookId)=>{
        return notFinished.includes(bookId)
      })
      if(hasStudentRead === true){
        result.push(key)
      }
      //our solution here
    }
  }
  return result;
}

console.log(studentsWhoHaveRead(students, "Spongebob"))
console.log(studentsWhoHaveRead(students, "Squidward"))

