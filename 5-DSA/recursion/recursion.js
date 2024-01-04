function arrayDoubler(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]*2);
    }
    return newArr;
}

function arrayDoublerRecursively(arr, result = []) {
    //base case
    let newArr = [];
    if ( arr.length === 0 ) {
        return result
    }
    result.push(arr[0] * 2)
    return arrayDoublerRecursively( arr.slice(1) , result)
}

console.log(arrayDoublerRecursively([1, 2, 3]));//  -> [2, 4, 6]

function fibonacciIterative(n) {
    if (n <= 1) return n;

    let prev = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}
//  1 1 2 3 5 8
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

console.log(fibonacciRecursive(50))