
const input = [1,2,-2,11,7,1];
//const output = 7
const input1 = [1,4,7,2,4,7];
function fun(input){
    let arr = [...new Set(input)].sort((a,b)=>a-b);
    return arr[arr.length-2];
}
console.log(fun(input1));


/** Question Number 2 */


function scndLarg(arr) {
    let newArr = arr.sort((a, b) => a - b);
    let val = []
    for (let i = 0; i < newArr.length; i++) {
        if (!val.includes(newArr[i])) {
            val.push(newArr[i])
        }
    }
    return val[val.length -2]
}

console.log(scndLarg(input));




/** Question Number 2 */

// const input = [1,2,-2,11,7,1]
input.sort((a,b)=> b-a)

function secondLargest(input){
for(value of input){
    let temp=input[0]
    if(value!==temp){
        return value
        break
    }
}
}

const result = secondLargest(input)
console.log(result);
