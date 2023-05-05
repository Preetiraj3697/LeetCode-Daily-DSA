// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels. 
// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

// 1st solution =======================================================================================

var maxVowels = function (s, k) {
      if (s.length < 0 || k > s.length) return;
      const n = s.length;
      let i = 0;
      let j = 0;
      let max = 0;
      let localMax;
      const map = {};

      while (j < n) {
            const ws = j - i + 1;

            const left_el = s.charAt(i);
            const right_el = s.charAt(j);

            map[right_el] = map[right_el] + 1 || 1;

            if (ws < k) {
                  j++;
            } else if (ws === k) {
                  localMax = 0;
                  if (map["a"]) localMax += map["a"];
                  if (map["e"]) localMax += map["e"];
                  if (map["i"]) localMax += map["i"];
                  if (map["o"]) localMax += map["o"];
                  if (map["u"]) localMax += map["u"];

                  max = Math.max(localMax, max);
                  map[left_el] === 0 ? delete map[left_el] : map[left_el]--;
                  i++;
                  j++;
            }
      }
      return max;
};

// 2nd solution =========================================================================================

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxCount=0,count=0;
    const vowel=['a',"e", "i", "o", "u"]
    for(let i=0;i<s.length;i++)
    {
        if(vowel.includes(s[i]))   count++

        if(i>=k && vowel.includes(s[i-k])) count--

        if(count==k)
        return k;

        if(maxCount<count)
        maxCount=count
    }
    return maxCount
};

// 3rd solution ================================================================================================

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxCount = 0;
    let start = 0; // the left edge of the window
    let count = 0; // count of vowels for current substring
	// expanding the right edge of the window one character at a time
    for (let end = 0; end < s.length; end++) {
	    // increment count of vowels for current substring if the current character is present in vowels array
        if (vowels.includes(s[end])) {
            count +=1;
        }
        // if substring is longer than K, let's shrink the window by moving left edge
        if (end - start + 1 > k) {
			// reduce the current count by one if the character on the left edge is vowel
            if(vowels.includes(s[start])) {
                count -=1;
            }
			//shrinking the left edge of the window
            start +=1;
        }
		// checking if current count is larger than current maximum count
        maxCount = Math.max(maxCount, count)
		// if maxCount is equal to K, no need to check further, it is the max possible count
        if (maxCount == k) return maxCount;
    }
    return maxCount;
};

// 4th solution 

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 
var maxVowels = function(s, k) {
   let obj = {"a":1,"e":1,"i":1,"o":1,"u":1};
   let vowcount = 0;
   let ans = 0;
   for(var i=0; i<k; i++){
       if(obj[s[i]]) vowcount++;
   }
   ans = Math.max(ans,vowcount);
   while(i<s.length){
       if(obj[s[i-k]]) vowcount--;
       if(obj[s[i]]) vowcount++;
       ans = Math.max(ans,vowcount);
       i++;
   }
   return ans;
};

// 5th solution =====================================

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 function check(s){
     if(s=="a" || s=="e" || s=="i" || s=="o" || s=="u"){
        return true;
    }
    return false;
 }
var maxVowels = function(s, k) {
    let max=0,count=0;
    for(let i=0; i<k; i++){
        if(check(s[i])){
            count++;
        }
    }
    max = count;
    for(let i=k; i<s.length; i++){
        if(check(s[i])){
            count++;
        }
        if(check(s[i-k])){
            count--;
        }
        max = Math.max(max,count)
    }
    return max;
};




