const input = [2,7,11,4,-2];
// const output = [11,4,-2,2,7];
const k = 2;

//  INBULID METHOD APPROACH

// function rotateArr(input,k){
//     for(let i=0; i<k; i++){
//         input.push(input.shift());
//     }
//         console.log(input);
    
// }
// rotateArr(input,k)

// Nested Loop Approach

function rotaArr(input,k){
    for(let i=0; i<k; i++){
        let temp = input[0];
        for(let i=0; i<input.length; i++){
            input[i] = input[i+1];
        }
        input[input.length-1] = temp;

    }
    console.log(input);
}

rotaArr(input,k)

// For-loop Approach

function fun(input,k){
    let res = [];

    for(let i=k; i<input.length; i++){
        res.push(input[i]);
        // console.log(res);
    }
    for(let i=0; i<k; i++){
        res.push(input[i]);
        // console.log(res);
    }
    return res;
}
console.log(fun(input,k));
