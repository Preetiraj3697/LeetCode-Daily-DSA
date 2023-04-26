// 1st approach =========================================

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};


// 2nd approach =========================================

/**
* Naive Javascript Solution.
* Time = O(n) where n is the number of digits of the number because:
*  - Converting a number to a string: O(n)
*  - Splitting the string: O(n)
*  - Iterating through the string: O(n). 
*  - Each iteration does constant time operations.
* => Total: O(3*n) => remove constant = O(n)
* Space = O(n) because we'll have at most n calls on the call stacks.
* @param {number} num
* @return {number}
*/
var addDigits = function(num) {
   if (num < 10) return num;
   const numString = num.toString();
   const numArray = numString.split('');
   let sum = 0;
   
   for (const numStr of numArray) {
       sum += parseInt(numStr);
   }
   
   return addDigits(sum);
};

// 3rd approach ====================================================================

/**
 * Interative solution.
 * Function returns the one digit number created by repeatedly adding all 
 * input's digits.
 * Time = O(log(n)) where n is the num value because:
 *  - The inner while loop divides the num by 10 each time: O(log(n))
 *  - The outer while loop does constant operations.
 * Space = O(1) because we don't store anything.
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let n = num;

    // While n has more than 1 digit:
    while (n >= 10) {
        let sum = 0;

        // Add to the sum the remainder if divided by 10 = last digit
        // This is correct because: 385 % 10 = 5, 38 % 10 = 8 and so on.
        while (n > 0) {
            sum = sum + n % 10;
            // Divide the number by 10 to get the remaining digits:
            // 385 / 10 floor = 38
            // Keep doing this until we get to the first digit:
            n = Math.floor(n / 10);
        }
        // Out of while loop => We've got to the first digit of the number:
        // Put the sum we have as the new number to compute:
        n = sum;
    }
    // Out of while loop => n is a 1 digit number, return it.
    return n;
};
