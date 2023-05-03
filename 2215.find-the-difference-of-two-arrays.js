// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.
// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// -1000 <= nums1[i], nums2[i] <= 1000

// 1st approach

var findDifference = function(nums1, nums2) {
   let nums1Set = new Set(nums1)
    let nums2Set = new Set(nums2)

    let result = [[], []]
    for (num of nums1Set) {
        if (!nums2Set.has(num)) result[0].push(num)
    }

    for (num of nums2Set) {
        if (!nums1Set.has(num)) result[1].push(num)
    }

    return result
};

// 2nd solution

var findDifference = function(nums1,nums2){
  let res1 = new Set(nums1);
  let res2 = new Set(nums2);
  let ans1 = [...res1].filter(x=>!res2.has(x));
  let ans2 = [...res2].filter(x=>!res1.has(x));
  
  return [ans1,ans2]
}

// 3rd solution 

var findDifference = function(nums1, nums2) {
   let ans1=new Set(nums1)
    nums2.forEach(v=>{ans1.delete(v)});
   let ans2=new Set(nums2);
    nums1.forEach(v=>{ans2.delete(v)});    

return [[...ans1],[...ans2]];
};


// 4th solution

var findDifference = function(nums1, nums2) {
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < nums1.length; i++){
        if(!nums2.includes(nums1[i])){
            if(!arr1.includes(nums1[i])){
                arr1.push(nums1[i]);
            }
        }
    }
    for(let i = 0; i < nums2.length; i++){
        if(!nums1.includes(nums2[i])){
            if(!arr2.includes(nums2[i])){
                arr2.push(nums2[i]);
            }
        }
    }
    return [arr1, arr2];
};



