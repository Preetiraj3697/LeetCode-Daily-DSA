//Question Alternating characters Issue #22

function fun(s){
    s = s.split("");
  let res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      res++;
    }
  }
  console.log(res);
 }
 function runProgram(input){
     //Input Taking Here
     input = input.trim().split("\n");
     let tc = +input[0];
     let line = 1;
     for(let i=0; i<tc; i++){
         let str = input[line++];
         fun(str);
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
