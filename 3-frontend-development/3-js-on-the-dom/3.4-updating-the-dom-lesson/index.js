// console.log("sanity check")

/* 
NOTES: 
1. element.innerText -> text content within an element
2. element.innerHTML -> html within an element
3. element.style -> used to modify css styling of an element
4. element.classList.add("classNameToAddHere") -> add a class to an element
5. element.classList.remove("classNameToRemoveHere") -> remove a class from an element

6. Inserting a new dom element onto the page -> 
  a. create an element:
    const newDiv = document.createElement("div");

  b. give the new element some innertext and style as needed:
    newDiv.innerText = `There are ${numParks} number of parks on display`;
    newDiv.classList.add("header-statement");

  c. select the parent that will adopt this new element:
    const header = document.querySelector("header");

  d. have parentelement.appendChild(newElement):
    header.appendChild(newDiv);

7. remove a dom element from page
  a. select the element you want to remove:
    const firstPark = document.querySelector("section");

  b. select the parent of the element you want to remove:
    const main = document.querySelector("main");
    
  c. Remove the element using this format - parent.removeChild(child):
    main.removeChild(firstPark);
*/
function shortenDescriptions(){
  //1. select all the descriptions
  const allDescriptions = document.querySelectorAll(".description-display")

  allDescriptions.forEach((descriptionElement, idx)=>{
    //if the innerText is more than 250 characters, then shorten it to 250 characters
    if(descriptionElement.innerText.length > 250){
      descriptionElement.innerText = descriptionElement.innerText.slice(0,249)

      //have to use innerHTML when you are adding content to be parsed/interperted as html
      descriptionElement.innerHTML += "<a href='#'>...</a>";
    }
  })
}

function styleHighRatings(){
  //select all the ratings
  const allRatings = document.querySelectorAll(".rating-display .value");
  //for each rating in the list of ratings, do:
  for(let ratingElement of allRatings){
    //compare the rating number to 4.7. if rating number is greater than 4.7, update its background-color to be green
    if(Number(ratingElement.innerText) > 4.7){
      // ratingElement.style.backgroundColor = "green";
      // ratingElement.style.color = "yellow";
      // ratingElement.style.fontSize = "20px";
      // ratingElement.style.border = "3px solid pink";
      // ratingElement.classList = [];
      ratingElement.classList.remove("value");
      ratingElement.classList.add("high-rating");
    }
  }
}

function addHeading(){
  //figure out how many parks there are using JS
  const numParks = document.querySelectorAll("section").length
  //create an element - div
  const newDiv = document.createElement("div");
  //set that divs inner text to say "there are x number of parks on display"
  newDiv.innerText = `There are ${numParks} number of parks on display`;
  //add style and classes to the new div
  newDiv.classList.add("header-statement");

  //select the parent that will adopt this new element
  const header = document.querySelector("header");
  //insert the div onto the dom - firu
  header.appendChild(newDiv);
  // header
}

function removePark(){
  //select the element you want to remove
  const firstPark = document.querySelector("section");
  //select the parent of the element you want to remove
  const main = document.querySelector("main");
  //parent.removeChild(child)
  main.removeChild(firstPark);
}

shortenDescriptions();
styleHighRatings();
addHeading();

// setInterval(()=>{
  removePark();
// },2000)

// const firstSEction = document.querySelector("section")
// console.log(firstSEction.innerHTML)