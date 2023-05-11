// You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.

// We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:
// nums1[i] == nums2[j], and
// the line we draw does not intersect any other connecting (non-horizontal) line.
// Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).
// Return the maximum number of connecting lines we can draw in this way.
// Example 1:
// Input: nums1 = [1,4,2], nums2 = [1,2,4]
// Output: 2
// Explanation: We can draw 2 uncrossed lines as in the diagram.
// We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.
// Example 2:

// Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
// Output: 3
// Example 3:

// Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
// Output: 2

// 1st solution 

var maxUncrossedLines = function(A, B) {
  let dp = new Array(A.length+1);
  dp[0] = new Array(B.length+1);
  for (let i = 0; i< A.length; i++){
    dp[i+1] = new Array(B.length+1);
    for (let j = 0; j< B.length; j++){
      if (A[i]===B[j]) dp[i+1][j+1] = (dp[i][j]||0)+1;
      else dp[i+1][j+1] = Math.max(dp[i][j+1]||0, dp[i+1][j]||0);
    }
  }
  return dp[A.length][B.length];
};

// 2nd solution 

const maxUncrossedLines = ( n1, n2, dp = [] ) => {
    for ( let i = 1; i <= n1.length; i++)
        for ( let j = 1, xp = dp.slice(); j <= n2.length; j++)
            if ( n1[i-1] == n2[j-1] ) dp[j] = ~~xp[j-1]+1
            else dp[j] = Math.max( ~~dp[j-1], ~~xp[j] )
    return dp[n2.length]
}

// 3rd solution 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const m=nums1.length;
    const n=nums2.length
    const arr= Array.from({length:m+1},()=>Array.from({length:n+1},()=>0));
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(nums1[i-1]==nums2[j-1]){
                arr[i][j]=1+arr[i-1][j-1]
            }else{
                arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1])
            }
        }
    }
    return arr[m][n]
};
