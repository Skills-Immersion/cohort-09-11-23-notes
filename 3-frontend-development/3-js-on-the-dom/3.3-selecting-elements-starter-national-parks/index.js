//SANITY CHECK
// console.log("hi")
/*
NOTES:
- document.querySelector("") --> to select the first element on the page that matches the query

- document.querySelectorAll("") --> to select all elements on the page that matches the query

For the query, you can do:
- tag name (h1, p, img, div, etc;)
- by id (#idNameHere)
- by class (.classNameHere)
- by descendant selector (main button)
- combine class/id and descendant selector (.park-display h2)
*/


// 1. Select the first h1 selector
const firstH1 = document.querySelector("h1")
// console.log(firstH1)
// 2. Select all h1 selectors
const allH1s = document.querySelectorAll("h1")
// console.log(allH1s)

// 3. Select the first section with the class of park-display
const firstParkDisplayClassElement = document.querySelector(".park-display")
// console.log(firstParkDisplayClassElement)

// 4. Select the first established date value
const firstDate = document.querySelector(".established-display .value")
// console.log(firstDate)

// 4.1 Select the first area value
const firstArea = document.querySelector(".area-display .value")
// console.log(firstArea)


// 5. Select all the established date values
const allDates = document.querySelectorAll(".established-display .value")
// console.log(allDates)

// 6. Select all the area values
const allAreas = document.querySelectorAll(".area-display .value")

// 7. Write a statement that will find the Grand Canyon national park element by its ID.
const grandCanyon = document.querySelector("#gcnp")
// console.log(grandCanyon)
// 8. Write a statement that will find the element containing the established date for the Grand Canyon national park.
const grandCanyonDate = document.querySelector("#gcnp .value")
// console.log(grandCanyonDate)

const grandCanyonArea = document.querySelector("#gcnp .area-display .value")
// console.log(grandCanyonArea)

