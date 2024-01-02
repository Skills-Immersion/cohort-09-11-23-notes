// R - Repeat problem
// E - Example input/output & Error driven devolopment
// A - Approach
// C - Coding ***
// T - Testing / Code review
// O - Optimization / Follow-up questions

// Given an array of numbers, find the largest product formed by two of the numbers. For example, 
// if the input array is [1, 5, 3, 4, 2], the largest product that can be formed by two of the numbers is 20, 
// which is the product of 5 and 4. Can you write code to solve this problem?

// what if my input is empty -> assume its not
// what if multiple -> return me one number
// whole nums and negative are included

function findLargestProduct(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    let n = arr.length;

    // Calculate the product of the two largest numbers
    let product1 = arr[n - 1] * arr[n - 2];

    // Calculate the product of the two smallest numbers (could be negative)
    let product2 = arr[0] * arr[1];

    // Return the larger of the two products
    return Math.max(product1, product2);
}

// function findLargest(array) {
//     let max = 0;
//     let left = 0;
//     let right = array.length - 1;
  
//     while (left < right) {
//       let product = array[right] * array[left];
//       if(product < 0 ){
//           product = product * -1
//       };
//       if (product > max) {
//         max = product;
//       }
//       if (array[left] > array[right]) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//     return max;
//   } 
// //                       ll2
// //                       ss2           
// console.log(findLargest([-6,-6,1,2,3,4,7,7]));


function findLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if( element > largest ) {
            secondLargest = largest
            largest = element;
        } else if ( element > secondLargest ) {
            secondLargest = element;
        }
        if( element < smallest ) {
            secondSmallest = smallest
            smallest = element;
        } else if ( element < secondSmallest ) {
            secondSmallest = element;
        }
    }

    const wholeProduct = largest * secondLargest;
    const negativeProduct = smallest * secondSmallest;

    return Math.max(wholeProduct, negativeProduct);
}
//                                 i
//                           s  2s
//                              2l l
console.log(findLargest([-9,-2, 1, -9, 3, 7, 7]));

for (let i = 0; i < arr.length; i++) {
    for (let j = i+ 1; j < arr.length; j++) {
        product = arr[i] * arr[j]
    }
}


