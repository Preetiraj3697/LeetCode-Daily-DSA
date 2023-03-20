function fun(n,k,arr){
     arr.sort((a, b) => a - b);
     let sum = 0;
  const prefixSums = arr.map(arr => {
    sum += arr;
    return sum;
  });
  let numberOfToyes;
  for (let i = 0; i < prefixSums.length; i++) {
    if (prefixSums[i] > k) {
      numberOfToyes = i;
      break;
    }
  }
  return numberOfToyes;
 }
 function runProgram(input){
     //Input Taking Here
     input = input.trim().split("\n");
     let [n,k] = input[0].trim().split(" ").map(Number);
     let line = 1;
    
         let arr = input[line++].trim().split(" ").map(Number);
         console.log(fun(n,k,arr));
     
     
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

