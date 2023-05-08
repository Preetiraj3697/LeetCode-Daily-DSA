// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
// Example 1:
// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:
// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:
// Input: mat = [[5]]
// Output: 5

// Constraints:
// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100



//1st solution

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(matrix) {
     let sum=0;
    
    for(i=0; i<matrix.length; i++){
        for(j=0; j<matrix[0].length; j++){
            if(i==j){
                    sum += matrix[i][j];
                }
                else if(i+j == matrix.length-1){
                    sum += matrix[i][j];
                }
        }
    }
    
return sum;
    
   console.log(sum);
};

// 2nd solution

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let sum = 0
    let n = mat.length - 1
    for (let i = 0; i <= n; i++) {
        sum = sum + mat[i][i]
        if (i !== (n - i)) {
            sum = sum + mat[i][n - i]
        }
    }
    return sum
};

// 3rd solution

var diagonalSum = function (mat) {
    if (!mat.length)
        return 0
    let sum = 0
    for (i = 0; i < mat.length; i++) {
        if (i !== mat.length - i - 1)
            sum = sum + mat[i][i] + mat[i][mat.length - i - 1]
        else
            sum = sum + mat[i][i]
    }
    return sum
};
