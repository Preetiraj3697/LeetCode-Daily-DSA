// 1st solution
var findSmallestSetOfVertices = function(n, edges) {
    let map = new Array(n);
    let ans = [];
    
    for (let [index,value] of edges) {
        map[value] = 1;
    };
    
    for (let i = 0; i < n; i++) {
        if (!map[i]) ans.push(i);
    };
    
    return ans;
};

// 2nd solution

var findSmallestSetOfVertices = function(n, edges) {
    const degree = Array(n).fill(0);
    const output = [];
    edges.forEach(([u, v]) => degree[v]++);
    degree.forEach((deg, i) => !deg && output.push(i));
    return output;
};
