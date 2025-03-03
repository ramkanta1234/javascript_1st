/* Problem1 - String Reversal:
Write a JavaScript function that takes a string as input and returns the reversed string. */
function reverseString(str)
{
  
  let output = "";
  for(let i=str.length-1 ; i>=0 ; i--){
    output = output + str[i];
  }
  return output;
}

let reString = reverseString("inp");
console.log(reString);


/*Problem2 - Calculate Factorial:
Write a JavaScript function that takes a non-negative integer as input and returns its factorial.*/


function factorial(n){
  if(n===0 || n===1){
    return 1;
  }else if(n<0)
  return -1;
  let fact =1;
  for(let i=1;i<=n;i++){
    fact= fact*i;
  }
  return fact;
  
}
let result = factorial(-5);
console.log(result);

