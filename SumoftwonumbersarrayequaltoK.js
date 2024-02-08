// Here’s the context of the problem:
// Let’s say we have an array [12, 5, 17, 4, 19, 6, -11] and 
// we want to find two numbers that add up to 36, which is k.
// After searching through the whole array, we realize the two 
// numbers that add up to k would be 17 and 19.
// 3 ways to solve this problem.
// 1. Brute force
const SumKth = (arr, k) => {
  const pair = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){ //o(n)
       if(arr[i] + arr[j] == k){
        pair.push(arr[i]);
        pair.push(arr[j]);
       }
    }
  }
  return pair;
}
// T.C => o(n²) S.C => o(1)

// 2. Two pointer 
const SumKth = (arr, k) => {
  let low = 0;
  let high = arr.length -1;
  const pair = [];
        
  Arrays.sort(arr);
  while(low < high){
    const num = arr[low] + arr[high];
    if(num < k){
      low++;
    }
    else if(num > k){
      high--;
    }
    else if(num == k){
      pair.push(arr[low]);
      pair.push(arr[high]);
      return pair;
    }
  }
  return pair;
}

// T.C =>  o(n log n) S.C => o(n)  

// 3. Hashing 
const SumKth = (arr, k) => {
  const pair = [];        
  const sumPair = {};
  for(let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];
    if(sumPair[temp]){
      pair.push(arr[i]);
      pair.push(temp);
      return pair;
    }else{
      sumPair[arr[i] = true;
    }
  }
  return pair;
}

// T.C =>  o(n) S.C => o(n) 



