

//without nested for loop for begineer
let input = [2,7,11,4,-2];
let output = []
let sum = 0
for(i in input){
    sum += input[i];
}
for(i in input){
    output.push(sum - input[i])
}
console.log(output)

// INBUILD METHOD APPROACH

// const input =[2,7,11,4,-2]
// let output = [20,15,11,18,24]

// let sum = input.reduce((a,b)=>a+b)

// let totalsum = []

// for (const value of input) {

// totalsum.push(sum-value)
// }


// console.log(totalsum);
// let inputSum = [2, 7, 11, 4, -2];
// let netsum = inputSum.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(netsum);
// let output = inputSum.map((val,index,arr)=>{
//     return netsum-val;
// });

// console.log(output);

// NESTSED LOOP APPROACH
// let arr = [2, 7, 11, 4, -2];
// let output = [];
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (j == i) {
//       continue;
//     } else {
//       sum += arr[j];
//     }
//   }
//   output.push(sum);
// }
// console.log(output);
