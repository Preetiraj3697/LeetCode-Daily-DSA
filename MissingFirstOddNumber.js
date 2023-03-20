let input = [5,7,9,11,15,17]
let n = 2

const findMissing = (input,n) => {
    for(let i =0 ; i < input.length ;i++){
        if(input[i]+n !== input[i+1]){
            return input[i]+n
        }
    }   
}

console.log(findMissing(input,n))

function fun(input){
    for(let i of input){
        const num = i + 2;
        const pre = input.includes(num);
        if(pre){
            continue;
        }else{
            console.log(num);
            break;
        }
    }
}
fun(input)
const n = 2
function Odd(input,n){

    for(let i=0; i<input.length; i++){
        let curr = input[i];
        let next = curr + n;
        if(input[i+1]!==next){
            console.log(next);
            break;
        }
    }
}

Odd(input,n);
