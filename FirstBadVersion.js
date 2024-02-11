/* Suppose you have n versions [1, 2, ..., n] and you want to find out

the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether

version is bad. Implement a function to find the first bad version. */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var min = 1;
        var max = n;
        var bad = -1;
        while (min <= max) {
            var mid = Math.floor((min+max)/2);
            if (isBadVersion(mid)) {
                bad = mid;
                max = mid-1;
            }
            else {
                min = mid+1;
            }
        }
        return bad;
    };
};
