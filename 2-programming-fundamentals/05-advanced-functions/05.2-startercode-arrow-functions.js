// FUNCTION DECLARATION
function ratingAsText(park) {
  console.log("This is a function declaration.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// FUNCTION EXPRESSION- VARIABLE EQUALS TO A FUNCTION


// ARROW FUNCTION EXPRESSION-HOW DO WE CONVERT TO ARROW?
  // ARROW REPLACES FUNCTION KEYWORD
  // () CONTAINS THE PARAMETERS FOR THE FUNCTION
  // NO () REQUIRED IF ONLY ONE PARAMETER


// IMPLICIT RETURN- WHEN THE ONLY LINE OF CODE INSIDE THE FUNCTION BODY IS A RETURN STATEMENT





// POP QUIZ: CONVERT THESE TO ARROW FUNCTION
function getLocationCoordinates({ geo: { lat, lon } }, zoom = 10) {
  return `https://www.google.com/maps/@${lat},${lon},${zoom}z`;
}

const calculateCylinderVolume = function (radius, height) {
  return Math.PI * radius ** 2 * height;
};