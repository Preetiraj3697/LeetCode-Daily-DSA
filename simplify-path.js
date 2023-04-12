// Example 1:
// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.

// Example 2:

// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

// Example 3:

// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    path = path.split('/');
    
    for (let i=0;i<path.length;i++) {
        if (path[i]=='.' || path[i]=='') continue;
        if (path[i]=='..') stack.pop();
        else stack.push(path[i]);
    }
    
    return '/'+stack.join('/');
};
