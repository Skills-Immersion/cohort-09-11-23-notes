//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS! 

// console.log(ratingAsText({name:"Central Park", rating: 5}))

// FUNCTION DECLARATION
function ratingAsText(park) {
  console.log("This is a function declaration.");
  return park.rating > 4 ? "Excellent!" : "Good";
}


// FUNCTION EXPRESSION- VARIABLE EQUALS TO A FUNCTION

const ratingAsText2 = function(park) {
  console.log("This is a function expression.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsText2({name:"Central Park", rating: 5}))




// ARROW FUNCTION EXPRESSION-HOW DO WE CONVERT TO ARROW?
  // ARROW REPLACES FUNCTION KEYWORD -> AND PUT THE ARROW AFTER THE PARAMETERS
  // () CONTAINS THE PARAMETERS FOR THE FUNCTION
  // NO () REQUIRED IF ONLY ONE PARAMETER

const ratingAsText3 = park => {
  console.log("This is an arrow function.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsText3({name:"Central Park", rating: 5}))


// IMPLICIT RETURN- WHEN THE ONLY LINE OF CODE INSIDE THE FUNCTION BODY IS A RETURN STATEMENT
  // Remove the return word and remove the {}

const ratingAsText4 = park => park.rating > 4 ? "Excellent!" : "Good";


// console.log(ratingAsText4({name:"Central Park", rating: 5}))



// POP QUIZ: CONVERT THESE TO ARROW FUNCTION
function getLocationCoordinates({ geo: { lat, lon } }, zoom = 10) {
  return `https://www.google.com/maps/@${lat},${lon},${zoom}z`;
}


const calculateCylinderVolume = function (radius, height) {
  return Math.PI * radius ** 2 * height;
};