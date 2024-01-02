// constant time
function O_1(n) {
    let x = 2 + 2;
    return n
} 

// O_1(100000000)

function O_N(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        count++ 
    }
    return count
}

// console.log(O_N(100));

// log(x) = y if b^y = x 

// log2(n) = y if 2^y = n

// log(1) = 0
// log(2) = 1
// log(4) = 2
// log(8) = 3

function binarySearch(array, item) {
    let low = 0;
    let high = array.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];
        if(guess === item) {
            return mid;
        }
        if(guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}


function log(n) {
    count = 0;
    for (let i = 1; i < n; i = i * 2) {
        count++
    }
    return count;
}

//O(n^2)
// Quadratic Time
// the pattern to look for here is nested for loops that DEPEND on each other. If you see nested for loops
// you might be looking at n^2 just make sure they depend on each other
function printPairsNotDependant(array) {
    let count = 0;
    let arrayLength = array.length;
    let newArray = ['a', 'b', 'c'];  // This array has a constant size
    for(let i = 0; i < arrayLength; i++) {
        for(let j = 0; j < newArray.length; j++) {
            count++
            console.log(array[i] + ', ' + newArray[j]);
        }
    }
    return count;
}
console.log(printPairsNotDependant([1,2,3,4,5,6,7,8,9,10]));
// note that this has an inner array that will always execute three step. this is nested for loops but is not
// O(n^2) the time complexity of the function is O(n).
// the example below the inner loop depends on the outer loop so it is O(n^2)
function printPairs(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            count++
            console.log(array[i] + ', ' + array[j]);
        }
    }
    return count
}
console.log(printPairs([1,2,3,4,5,6,7,8,9,10,11,12,13]));