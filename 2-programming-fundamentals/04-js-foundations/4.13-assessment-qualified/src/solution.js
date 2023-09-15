/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

// chooseItemByNameAndSize()
// This function has three parameters: products, name, and size.

// When used correctly, the function will search through all of the products and find a product with a matching name that has the size value inside of the product's availableSizes array. If no match is found for either reason, null should be returned.

/* 
{
  name: "Court Sneaker",
  priceInCents: 8800,
  availableSizes: [ 6, 8, 10, 11, 12 ]
}
*/
let products = [
  {
    name: "Court Sneaker",
    priceInCents: 9800,
    availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
  },
  {
    name: "Relaxed Silk Shirt",
    priceInCents: 9800,
    availableSizes: [0, 10, 12, 2],
  },
  {
    name: "Square-Neck Jumpsuit",
    priceInCents: 8800,
    availableSizes: [6, 10, 14, 2, 12],
  },
];

const cart1 = {
  "Court Sneaker": {
    priceInCents: 8800,
    quantity: 1
  },
  "Relaxed Silk Shirt": {
    priceInCents: 9800,
    quantity: 1
  }
}
const product1 = {
  name: "Court Sneaker",
  priceInCents: 9800,
  availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
}

function chooseItemByNameAndSize(products=[], name="", size=0) {
  //loop through the products array and for each product element do:
  for(let i = 0; i<products.length; i++){
    // console.log("each product", products[i])
    const currentProduct = products[i];
    //check if the currentproduct's name matches the inputted name and the input size is in its availableSizes array
    if(currentProduct.name === name && currentProduct.availableSizes.includes(size)){
      //return the current product
      return currentProduct;
    }
  }

  //if we go through the whole loop and never returend a product, return null
  return null;
}

// console.log(chooseItemByNameAndSize(products, "Relaxed Silk Shirt", 10))
// console.log(chooseItemByNameAndSize(products, "Nike Shoes", 3))



// addProductToCart()
// This function has two parameters: product and cart. The cart parameter is optional.

// If addProductToCart() is only called with a product, it will create a new cart object and reformat the product, as described above. It will also set the quantity to 1.

function addProductToCart(product={}, cart={}) {
  
  //if the product name does not exsits as a key in the cart, then we will create a new key value pair in the cart
  if(cart[product.name] === undefined){
    cart[product.name] = {
      priceInCents: product.priceInCents,
      quantity: 1
    }
  }else{
    //if the product name is a key in the cart, then we increase the quantity of that product by 1
    cart[product.name].quantity++
  }

  return cart;
}

console.log(addProductToCart(product1, cart1));

function calculateTotal() {}

function printReceipt() {}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
