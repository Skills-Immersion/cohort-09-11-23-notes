const product = {
  priceInCents: 2100,
  name: "Red Beanie",
  size: "L",
  onSale: false,
};

// BASIC IF STATEMENTS
function getPrice(product) {
  let price = product.priceInCents;
  if (product.onSale) {
    price = price * 0.9;
  }

  return price;
}
// console.log(getPrice(product)); //> 1890

// SINGLE LINE IF STATEMENTS- refactor the above function
function getPrice2(product) {
  let price = product.priceInCents;
  if (product.onSale) price = price * 0.9;
  

  return price;
}

// console.log(getPrice2(product)); //> 1890


// CONDITIONAL OPERATOR (ternary operator)- refactor getPrice()
function getPrice3(product) {
  let price = product.priceInCents;

  product.onSale ? price = price * 0.9: console.log("no discounts available")
  
  return price;
}

// console.log(getPrice3(product)); //> 1890

// CONDITIONAL OPERATOR WITH RETURNS - refactor getPrice()
function isDiscountAvailable(product) {
  let price = product.priceInCents;
  // if (product.onSale) {
  //   return "yes there is a discount"
  // }else{
  //   return "no discount"
  // }

  return product.onSale ? "yes there is a discount" : "no discount"

}

// console.log(isDiscountAvailable(product))

// MULTIPLE CONDITIONAL IF-ELSE STATEMENTS
function calculateTax(stateAbbreviation){
  let result;
  if (stateAbbreviation === "CA") {
    result = 0.0725;
  } else if (stateAbbreviation === "CO") {
    result = 0.029;
  } else if (stateAbbreviation === "GA") {
    result = 0.04;
  } else if (stateAbbreviation === "VT") {
    result = 0.06;
  } else {
    result = 0;
  }

  return result;
}

// console.log(calculateTax("GA"))


// SWITCH STATEMENTS -> refactor calculateTax()
function calculateTax2(stateAbbreviation){
  let result;
  switch(stateAbbreviation){
    case "CA":
      result = 0.0725;
      break;
    case "CO":
      result =  0.029;
      break;
    case "GA":
      console.log("Gwagiaaaa")
      result =  0.029;
      break;
    case ("VT"):
      result =  0.029;
      break;
    default:
      console.log("defaulting")
      result = 0
  }
  return result;
}

console.log(calculateTax2("GA"))