//Question => https://github.com/Preetiraj3697/LeetCode-Daily-DSA/issues/37
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var obj1 = {};
    var obj2 = {};
    for(var i = 0; i < s.length; i++){
        if(obj1[s[i]] === undefined){
            if(obj2[t[i]] !== undefined) return false;
            obj1[s[i]] = t[i];
            obj2[t[i]] = s[i];
        }
        else if(obj1[s[i]] === t[i]) continue;
        else return false
    }
    return true; 
};
