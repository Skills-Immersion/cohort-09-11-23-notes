/*time complexity  
                 p   
                [5,2,1,8,4,7,6,3]
                       5              5 is in the right spot idx of 4
              p                       do the same on the left side
              3,2,1,4      7,6,8
                3                     3 is in the right spot idx of 2
            p      
            1,2   4
            1                         1 is in the right spot idx of 0  
              2 
                          p
                          7,6,8      time for the right side
                          7          7 is in the right spot idx of 6
                        6   8 
            1 , 2 ,3 ,4 ,5 ,6 ,7 ,8
*/ 

function compare(a,b) {
    return a - b;
}

function quickSort(arr, compare, lowerIndex = 0, upperIndex = arr.length -1) {
    // base case 
    if ( lowerIndex < upperIndex ) { //i know i can split things in half
        //recursive case
        const index = partition(arr, compare, lowerIndex, upperIndex);
        //sort left
        quickSort(arr, compare, lowerIndex, index - 1);
        //sort right
        quickSort(arr, compare, index + 1, upperIndex);
    } 
    return arr;
}
//       i
//
//
//  [1,5,7]
//   p
function partition(arr, compare, lowerIndex = 0, upperIndex = arr.length -1) {
    // choose the pivot value
    let pivotValue = arr[lowerIndex];
    //keep track of how many things are less than the pivot
    let partitionIdx = lowerIndex + 1
    for (let i = lowerIndex + 1; i <= upperIndex ; i++) {
        const comparison = compare(arr[i], pivotValue);
        if (comparison < 0) { // less than my pivot
            [arr[i], arr[partitionIdx]] = [arr[partitionIdx], arr[i]];
            partitionIdx++
        }
    }
    // at the end we need to swap or pivotvalue with the left side of our partion index
    [arr[lowerIndex], arr[partitionIdx-1]] = [arr[partitionIdx-1], arr[lowerIndex]]
    return partitionIdx -1
}