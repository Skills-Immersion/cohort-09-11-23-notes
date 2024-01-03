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

arrayDoublerRecursively([1, 2, 3])//  -> [2, 4, 6]