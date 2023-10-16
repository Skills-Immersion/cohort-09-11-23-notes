



/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.6 form submissions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
  
  1. Validate the form
      Ensure that the form is not blank. Here, blank means an empty string or a string containing only spaces. If the form is blank, display an error message by creating and appending a new error element to the end of the form. The error element must take the following form:

      <div class="error" id="searchError">Please enter a search term</div>
    If the form is not blank, the error element should not be on the form.


  2. Perform the search
     Perform a case-insensitive search of the titles of the articles (that is, the innerHTML values of the h2 elements). If the search term matches any part of the title, the article should be displayed. If the search term doesn't match any part of the title, the article should be hidden.

     To hide an article, add the class hidden to the article element. To make it visible again, remove the class hidden from the article element.

     If a second search is conducted, articles hidden by any previous searches should be made visible again.
  */

function validateExists(value) {
  return value && value.trim();
}

function validateNumber(value) {
  return !isNaN(value);
}

function validateRange(value, min, max) {
  return value >= min && value <= max;
}

function validateForm(formData) {
  const errors = {};

  // Check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // Check if rating was entered
  // Check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  } else {
    // Check if the rating is a number
    if (!validateNumber(formData.get("rating"))) {
      errors.rating = "Rating must be a number";
    } else {
      // Because it is a number, convert it
      const rating = Number.parseFloat(formData.get("rating"));
      // Check that the rating is between 1 and 5, inclusive
      if (!validateRange(rating, 1, 5)) {
        errors.rating = "Rating must be between 1 and 5 inclusive";
      }
    }
  }

  // Check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // Check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // Check if area was entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // Check if location date was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }

  return errors;
}

const submitHandler = (event)=>{
  event.preventDefault();
  //event.target represents the form that was submitted
  
  // const nameInput = document.querySelector("#name-input").value;
  const formData = new FormData(event.target);
  // const inputNames = [
  //   "name",
  //   "location",
  //   "description",
  //   "established",
  //   "area",
  //   "rating"
  // ]
  // inputNames.forEach((inputName)=>{
  //   console.log(formData.get(inputName))
  // })


  //validate the info from the form first
  const errors = validateForm(formData)
  console.log('errors is this', errors)
  
  
  const name = formData.get("name")
  const location = formData.get("location")
  const description = formData.get("description")
  const established = formData.get("established")
  const area = formData.get("area")
  const rating = formData.get("rating")

  if(Object.keys(errors).length > 0){
    // Clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
      element.style.display = "none";
    }

    // Display any new errors
    Object.keys(errors).forEach((key) => {
      // Find the specific error element
      const errorElement = document.querySelector(`#${key}-form .error`);
      errorElement.innerHTML = errors[key];
      errorElement.style.display = "block";
    });
  }
  const parkHtml = `<section class="park-display">
  <h2>${name}</h2>
  <div class="location-display">${location}</div>
  <div class="description-display">
    ${description}
  </div>
  <button class="rate-button" title="Add to Favourites">&#9734;</button>
  <div class="stats">
    <div class="established-display stat">
      <h3>Established</h3>
      <div class="value">
        ${established}
      </div>
    </div>
    <div class="area-display stat">
      <h3>Area</h3>
      <div class="value">${area}</div>
    </div>
    <div class="rating-display stat">
      <h3>Rating</h3>
      <div class="value">
        ${rating}
      </div>
    </div>
  </div>
</section>`

  const main = document.querySelector("main");
  main.innerHTML += parkHtml;

}


function main() {
  //purpose of main() is to select elements on the page that need to listen for events and attach event listeners to them
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
}


window.addEventListener("DOMContentLoaded", (event)=>{
  main();
})





