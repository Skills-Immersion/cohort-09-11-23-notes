/*
splitting array in HALF until we get a single sorted array O(n log n) 
                    [8,3,5,4,7,6,1,2]
            [8,3,5,4]              [7,6,1,2]
          [8,3]   [5,4]           [7,6]   [1,2]
       [8] [3]    [5] [4]       [7] [6]  [1]  [2]
*/

/*
merge the sorted halves, and put the small ones in first  O(n)
        [8]    [3]     [5]     [4]     [7]     [6]     [1]      [2]
                    [3,8]    [4,5]    [6,7]    [1,2]
                        [3,4,5,8]           [1,2,6,7]
                            [1,2,3,4,5,6,7,8]                    
*/ 
function compare(a, b) {
    return a - b;
}

function mergeSort(arr, compare) {
    //base case
    if ( arr.length === 1 ) {
        return arr;
    }
    //recursive case
    let mid = Math.floor(arr.length/2);
    let leftSide = mergeSort(arr.slice(0,mid), compare);
    let rightSide = mergeSort(arr.slice(mid), compare);
    return merge(leftSide, rightSide, compare);
}
//         l          r
//      [3,8]    [4,5]    
//        [3,4,5,8] 
function merge(leftArr, rightArr, compare) {
    let sortedArr = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while ( leftIdx < leftArr.length && rightIdx < rightArr.length ) {
        let comparison = compare(leftArr[leftIdx], rightArr[rightIdx]);
        if ( comparison < 0 ) {
            sortedArr.push(leftArr[leftIdx]);
            leftIdx++;
        } else {
            sortedArr.push(rightArr[rightIdx]);
            rightIdx++;
        }
    } // deal with left over numbers
    return sortedArr.concat(
        leftIdx < leftArr.length ? leftArr.slice(leftIdx) : rightArr.slice(rightIdx)
    )

}

console.log(mergeSort([11,3,13,7], compare));