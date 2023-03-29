// Question link => https://github.com/Preetiraj3697/LeetCode-Daily-DSA/issues/35
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
     for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    
    return nums;
};
