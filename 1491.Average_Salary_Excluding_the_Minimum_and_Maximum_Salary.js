
// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
// Example 1:
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
// Example 2:
// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
// Constraints:
// 3 <= salary.length <= 100
// 1000 <= salary[i] <= 106
// All the integers of salary are unique.

// 1st solution;=================================================================================================
function fun(salary){
    let sort = salary.sort(function(a ,b){return a - b})
    sort.shift(); // remove minimum;
    sort.pop(); // remove maximum;
    return salary.reduce((a, b) => a + b, 0) / salary.length;
}

// 2nd solution;==================================================================================================
function fun(salary){
  let val = 0;
  let max = -Infinity;
  let min = Infinity;
  for(let el of salary){
    val += el;
    min>el? min=el:min=min;
    max<el? max=el:max=max;
  }
  let ans = val-(max+min);
  return ans/(salary.length-2);
}

// 3rd solution;

function fun(salary){
  salary.sort((a,b)=>a-b);
  let total=0, n=salary.length;
  for(let i=1; i<=n-2; i++){
    total += salary[i];
  }
  return total/(n-2);
}

// 4th solution

function fun(salary){
  let max = Math.max(...salary);
  let min = Math.min(...salary);
  let sum = salary.reduce((a,b)=>a+b);
  sum -= max;
  sum -= min;
  return sum/(salary.length-2)
}


