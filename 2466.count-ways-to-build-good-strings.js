/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
function countGoodStrings(low, high, zero, one) {
        // Use dp[i] to record to number of good strings of length i.
        let dp = new Array(high + 1).fill(0);
        dp[0] = 1;
        let mod = 1_000_000_007;
        
        // Iterate over each length `end`.
        for (end = 1; end <= high; ++end) {
            // check if the current string can be made by append zero `0`s or one `1`s.
            if (end >= zero) {
                dp[end] += dp[end - zero];
            }
            if (end >= one) {
                dp[end] += dp[end - one];
            }
            dp[end] %= mod;
        }
        
        // Add up the number of strings with each valid length [low ~ high].
        let answer = 0;
        for (i = low; i <= high; ++i) {
            answer += dp[i];
            answer %= mod;
        }
        return answer;
    }
