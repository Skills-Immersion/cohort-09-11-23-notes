function favButtons(){
  const allBtns = document.querySelectorAll("button");
  allBtns.forEach((btn, idx)=>{
    //nodeElement.addEventListener("eventType", eventHandlerFunction)
    btn.addEventListener("click", (event)=>{
      //the event parameter in the cb will be an object that contains lots of information about the event
      // console.log("clicked on something", event)
      //event.target represents the element that the event occured on
      const parent = event.target.parentNode;
      // event.target.style.backgroundColor = "yellow";
      if( event.target.classList.contains("rate-button")){
        event.target.classList.remove("rate-button")
        event.target.classList.add("fav-button")
      }else{
        event.target.classList.remove("fav-button")
        event.target.classList.add("rate-button")
      }
      
    })
  })
}




const sortByName = (parkSectionA, parkSectionB)=>{
  const parkAName = parkSectionA.querySelector("h2").innerText;
  const parkBName = parkSectionB.querySelector("h2").innerText;
  return parkAName < parkBName ? -1 : 1;
}

const sortByRating = (parkSectionA, parkSectionB)=>{
  const parkARating = parkSectionA.querySelector(".rating-display .value").innerText;
  const parkBRating = parkSectionB.querySelector(".rating-display .value").innerText;
  return Number(parkBRating) - Number(parkARating)
}

const nameSorterClickhandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array from the parksList nodelist
  const parksArray = Array.from(parksList);
  //5. sort the arrray
  parksArray.sort(sortByName)

  // 6. Insert each park into the DOM
  parksArray.forEach((parkSection) => {
    main.appendChild(parkSection);
  });
}

const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array from the parksList nodelist
  const parksArray = Array.from(parksList);
  //5. sort the arrray
  parksArray.sort(sortByRating)

  // 6. Insert each park into the DOM
  parksArray.forEach((parkSection) => {
    main.appendChild(parkSection);
  });
}

const main = ()=>{
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickhandler);
  
  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");
  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}


window.addEventListener("DOMContentLoaded", (event) => {
  main()
});