// Input = [1,2,2] output = [1,2]
// Input = [0,0,1,1,1,2,2,3,3,4] Output = [0,1,2,3,4]

// solution 1
function Remove(nums){
  let i = 0;
  for(let j=0; j<nums.length; j++){
    if(nums[j]!=nums[i]){
      nums[i+1]=nums[j]
    }
    return ++i;
  }
}

// solution 2
function remove(nums){
  for(let i=0; i<nums.length; i++){
    if(nums[i]===nums[i+1]){
      nums.splice(i,1);
    }else{
      i++;
    }
  }
}

// solution 3
function fun(nums){
  let set = new Set(nums);
  nums.length = 0;
  nums.push(...set.values())
  return set.size;
}

// solution 4;
function RemoveDuplicate(nums){
  if(nums.length<=1){
    return nums.length;
  }
  var k=1;
  for(let i=1; i<nums.length; i++){
    if(nums[i]!=nums[i-1]){
      nums[k++]=nums[i]
    }
  }
  return k
}
