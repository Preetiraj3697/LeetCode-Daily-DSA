//Question => https://github.com/Preetiraj3697/LeetCode-Daily-DSA/issues/38
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   let i = 0, j = 0;
    while( j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }
    return i === s.length ? true: false;
};
