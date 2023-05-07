// You want to build some obstacle courses. You are given a 0-indexed integer array obstacles of length n, where obstacles[i] describes the height of the ith obstacle.

// For every index i between 0 and n - 1 (inclusive), find the length of the longest obstacle course in obstacles such that:

// You choose any number of obstacles between 0 and i inclusive.
// You must include the ith obstacle in the course.
// You must put the chosen obstacles in the same order as they appear in obstacles.
// Every obstacle (except the first) is taller than or the same height as the obstacle immediately before it.
// Return an array ans of length n, where ans[i] is the length of the longest obstacle course for index i as described above.

 

// Example 1:

// Input: obstacles = [1,2,3,2]
// Output: [1,2,3,3]
// Explanation: The longest valid obstacle course at each position is:
// - i = 0: [1], [1] has length 1.
// - i = 1: [1,2], [1,2] has length 2.
// - i = 2: [1,2,3], [1,2,3] has length 3.
// - i = 3: [1,2,3,2], [1,2,2] has length 3.
// Example 2:

// Input: obstacles = [2,2,1]
// Output: [1,2,1]
// Explanation: The longest valid obstacle course at each position is:
// - i = 0: [2], [2] has length 1.
// - i = 1: [2,2], [2,2] has length 2.
// - i = 2: [2,2,1], [1] has length 1.
// Example 3:

// Input: obstacles = [3,1,5,6,4,2]
// Output: [1,1,2,3,2,2]
// Explanation: The longest valid obstacle course at each position is:
// - i = 0: [3], [3] has length 1.
// - i = 1: [3,1], [1] has length 1.
// - i = 2: [3,1,5], [3,5] has length 2. [1,5] is also valid.
// - i = 3: [3,1,5,6], [3,5,6] has length 3. [1,5,6] is also valid.
// - i = 4: [3,1,5,6,4], [3,4] has length 2. [1,4] is also valid.
// - i = 5: [3,1,5,6,4,2], [1,2] has length 2.
 

// Constraints:

// n == obstacles.length
// 1 <= n <= 105
// 1 <= obstacles[i] <= 107

//1st solution

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    let dp = [], res = [];
    for (let i = 0; i < obstacles.length; i++) {
        let j = upperBound(dp, obstacles[i]);
        if (j == dp.length) {
            dp.push(obstacles[i]);
        } else {
            dp[j] = obstacles[i];
        }
        res.push(j + 1);
    }
    return res;
};
function upperBound(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

// 2nd solution

/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    // Store the length of the input array
    const n = obstacles.length;
    // Create an array of length n and fill it with 1's
    const ans = new Array(n).fill(1);
    // Create a stack to store increasing subsequence of obstacles
    const stack = [obstacles[0]];

    // Iterate over each obstacle in the input array
    for (let i = 1; i < n; i++) {
        // If the current obstacle is greater than or equal to the last obstacle in the stack
        if (obstacles[i] >= stack[stack.length - 1]) {
            // Add the current obstacle to the stack
            stack.push(obstacles[i]);
            // The length of the non-decreasing subsequence ending at the current position is equal to the length of the stack
            ans[i] = stack.length;
        } else {
            // If the current obstacle is less than the last obstacle in the stack
            // Use binary search to find the position of the first obstacle in the stack that is greater than the current obstacle
            let l = 0;
            let r = stack.length - 1;

            while (l <= r) {
                const mid = Math.floor((l + r) / 2);
                if (stack[mid] <= obstacles[i]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }

            // Replace the obstacle at the found position with the current obstacle
            stack[l] = obstacles[i];
            // The length of the non-decreasing subsequence ending at the current position is equal to the position of the first obstacle in the stack that is greater than the current obstacle
            ans[i] = l + 1;
        }
    }

    // Return the array of lengths of non-decreasing subsequences ending at each position in the input array
    return ans;
};




