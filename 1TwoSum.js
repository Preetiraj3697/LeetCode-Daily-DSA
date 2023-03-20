// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Answer

// Brute Force Solution

function TwoSum(arr,target){
 
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                if(i!==j){
                    return [i,j]
                }
            }
        }
    }
}
let sum = TwoSum([2,7,11,15],9)
console.log(sum);

// The time complexity of this solution is O(n^2), where n is the length of the input array. This is because the algorithm uses nested loops to compare every possible pair of elements in the array.

// The space complexity of this solution is O(1) because the algorithm only uses a constant amount of extra space to store the loop variables and the output array (which has a fixed size of two).

//==========================================================================================================================================//

// Second solution (Two Pointer);

function twoSum(arr, target) {
    let pointer1 = 0; // initialize pointers
   let pointer2 = pointer1 + 1;
   let sum = arr[pointer1] + arr[pointer2]; // get the sum of first two
   let answer = null; // set null at first in case target is never met, otherwise change it

   
    // if the first two values don't then we increase pointer 2 till the end
    while(true){
    sum = arr[pointer1] + arr[pointer2];
    if (sum === target){ // if the new sum = target we record the indices as the answer and break from loop
        answer = [pointer1, pointer2];
        break;
    };
    pointer2++;
    if (pointer2 >= arr.length) { // if pointer 2 gets to the end without finding the answer we increment pointer 1 and reinitalize
        pointer1++;
        pointer2 = pointer1 + 1;
    };
    if (pointer1 >= arr.length) break; // if pointer 1 gets to the end of the arr that means we never found the answer so we just break from loop and return null
    };
   return answer;
};

// let sumTwo = twoSum([2,7,11,15],9)
// console.log('sumTwo: ', sumTwo);

// The time complexity of this solution is O(n^2), where n is the length of the input array. In the worst case, the algorithm may need to iterate over every pair of elements in the array to find the target sum. However, in practice, the time complexity is likely to be much better than O(n^2) since the while loop will terminate early as soon as a pair with the target sum is found.

// The space complexity of this solution is O(1) since the algorithm only uses a constant amount of extra space to store the loop variables and the output array (which has a fixed size of two).


//==========================================================================================================================================//

// Third Solution

function twoSum(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};
// let sumTwo = twoSum([2,7,11,15],9)
// console.log('sumTwo: ', sumTwo);


//==========================================================================================================================================//


// Forth Solution

function twoSum(nums, target) {
    const mp = {}
 
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
    
        if (diff in mp) return [i, mp[diff]]
 
        mp[nums[i]] = i
    }
 }
//  let sumTwo = twoSum([2,7,11,15],9)
//  console.log('sumTwo: ', sumTwo);


//==========================================================================================================================================//

//  // Fifth Solution
 function twoSum(nums, target) {
 for (let i = 0; i < nums.length; i++) {
    const pairNum = target - nums[i];
    const indexOfNum = nums.indexOf(pairNum);

    if (indexOfNum !== -1 && indexOfNum !== i) {
        return [i, indexOfNum];
    }
}
}
let sumTwo = twoSum([2,7,11,15],9)
console.log('sumTwo: ', sumTwo);

// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // logic
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
// [3,2,4] => 3+2, 3+4, 2+4 => 7, 7, 6

// Using JS Objects

const twoSum = function (nums, target) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26));

// nums = [2,7,11,15], target = 26
// {
//     "2":0,  // 26 - 2 = 24
//     "7": 1,
//     "11": 2,  // 26-11 = 15
//     "15":     // 26 - 15 = 11 => [obj[11],3] => [2, 3]
// }
