// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(10);
console.log(res);

// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"

var isPalindrome = function(x) {
    let reverse = 0;
    let copy = x;
    while(copy>0){
        const digit = copy%10;
        reverse = reverse*10+digit;
        copy = Math.floor(copy/10);
    }
    return reverse==x;
};

const res = isPalindrome(10);
console.log(res);
