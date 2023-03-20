function fun(n,arr){
     let obj = {};
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (obj[ele] === undefined) obj[ele] = i;
        else max = Math.max(max, i - obj[ele]);
    }

    console.log(max);
 }
 function runProgram(input){
     //Input Taking Here
     input = input.trim().split("\n");
     let tc = +input[0];
     let line = 1;
     for(let i=0; i<tc; i++){
         let n = +input[line++];
         let arr = input[line++].trim().split(" ").map(Number);
         fun(n,arr);
     }
     
 }
 if(process.env.USER===""){
     runProgram('');
 }else{
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read="";
     process.stdin.on("data",function(input){
         read+=input;
     });
     process.stdin.on("end",function(){
         read=read.replace(/\n$/,"");
         read=read.replace(/\n$/,'');
         runProgram(read);
     });
     process.on('SIGINT',function(){
         read=read.replace(/\n$/,"");
         runProgramm(read);
         process.et(0);
     });
 }
