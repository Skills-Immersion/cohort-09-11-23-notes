function largerThan(array, int) {
  let sum = 0;
  for (let num of array) {
    if (num > int) {
      sum += num;
    }
  }
  return sum;
}

function updateKobe(nums){
  // for(let i = 0; i<nums.length; i++){
  //   const num = nums[i]
  //   if(num === 8 || num === 24){
  //     // num = "Kobe!"
  //     nums[i] = "Kobe";
  //   }
  // }
  for(let num of nums){
    console.log("current num is:", num)
    if(num === 8 || num === 24){
      nums[num] = "Kobe!"
    }
  }
  return nums
}

// console.log(largerThan([1,4,6,8], 6)) // > 8
//                      0 1 2 3
// console.log(largerThan([1,4,6,8], 4)) // > 14
// console.log(largerThan([1,4,6,8], 2)) // > 18
// console.log(largerThan([], 2)) // > 0

console.log(updateKobe([2,4,5,8,9,8,24,3]))


//Write me a function in javascript that takes an array of numbers in random order as a parameter, and will return to me the maximum number in the array