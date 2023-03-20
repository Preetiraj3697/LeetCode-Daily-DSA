const input1 = {a:1,b:2,c:3,d:10,e:12};
const input2 = {a:2,e:12,f:6,d:10};
//const output = {d:10,e:12};

function fun(input1,input2){
    let obj = {};
    for(let i in input1){
        if(input1[i]==input2[i]){
            obj[i] = input1[i];
        }
    }
    return obj;
}
console.log(fun(input1,input2));


//================================================
function fun(input1,input2){
    for(const key in input1){
        if(key in input2 && input1[key]==input2[key]){
            console.log(key,input1[key]);
        }
    }
}
fun(input1,input2);
