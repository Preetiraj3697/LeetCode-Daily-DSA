// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

//1st solution

function fun(nums){
  let res = 1;
  for(let i of nums)
  {
      if(i==0)
      {
       return 0;
      }
      if(i<0)
      {
       res = -res;
      }
 }
  return res;
}

// 2nd solution

function fun(nums)
{
  if(nums.includes(0)) return 0;
  return nums.filter(item=>item<0).length%2==0?1:-1;
  
}

// 3rd solution

function fun(nums)
{
  let sign = 1;
  for(let i=0; i<nums.length; i++)
  {
    if(nums[i]==0)
    {
      sign = 0;
      break;
    }
    if(nums[i]<0)
    {
      sign = -sign
    }
  }
  return SignFunc(sign);
}

function SignFunc(x)
{
  if(x==0)
  {
    return 0;
  }
  return x>0?1:-1;
}



