function fun(arr){
     // console.log(arr);
     if(arr[0]<=arr[1] && arr[1]>=arr[2]){
         console.log("AC");
     }else{
         console.log("No AC");
     }
 }
 function runProgram(input){
     //Input Taking Here
     input = input.trim().split("\n");
     let tc = +input[0];
     let line = 1;
     for(let i=0; i<tc; i++){
         let arr = input[line++].trim().split(" ").map(Number);
         fun(arr);
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
