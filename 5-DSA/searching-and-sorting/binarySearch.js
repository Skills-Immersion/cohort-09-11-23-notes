function compare(leftElement, rightElement) {
    return leftElement - rightElement;
}

// + greater
// - less
// 0 equal
//       
//          v
//       l        u  m               
let x = [2, 3, 5, 7, 11];

// function binarySearch(arr, cb, value) {
//     //declare our boundaries
//     let lowerBound = 0;
//     let upperBound = arr.length - 1;
//     // play the guessing game
//     while (lowerBound <=  upperBound) { // in bounds
//         //guess the midpoint
//         let midPoint = Math.floor((lowerBound + upperBound) /2 );
//         let compareValue = cb(arr[midPoint], value);
//         // is our guess is right
//         if ( compareValue === 0 ) {
//             return midPoint;
//         } 
//         else if ( compareValue > 0 ) {
//             upperBound = midPoint - 1;
//         }
//         else {
//             lowerBound = midPoint +1;
//         }
//     }
//     return -1
// }

// console.log(binarySearch(x,compare, 111));

function binarySearchRecursive(arr, cb, value, lowerBound = 0, upperBound = arr.length -1 ) {
    //base case 
    if ( lowerBound >= upperBound ) return -1;

    //guess the midpoint
    let midPoint = Math.floor((lowerBound + upperBound) /2 );
    let compareValue = cb(arr[midPoint], value);
    // is our guess is right
    if ( compareValue === 0 ) return midPoint;
    else if ( compareValue > 0 ) return binarySearchRecursive(arr, cb, value, lowerBound, midPoint - 1);
    else return binarySearchRecursive(arr, cb, value, midPoint + 1, upperBound);
    
}

console.log(binarySearchRecursive(x,compare, 2));

