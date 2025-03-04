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



/*Problem3 - Array Filtering:
Write a JavaScript function that takes an array of numbers and a number as input. 
The function should return a new array containing only the numbers from the original array 
that are greater than the given number.*/

function arryFilter(arr,num){
  const result1 = [];
  for(let i=1;i<=arr.length;i++){
    if(arr[i]>num){
      result1.push(arr[i]);
    }
  }
  return result1;
}
const arr=[1,5,10,3,8];
const num=5;
let result1=arryFilter(arr,num);
console.log(result1);




//calculator on console
function calculator(num1,num2,operator){  //create calculator() function with three arguments 
  let result;
  switch(operator){
      case '+':
          result = num1+num2;
          break;
      case '-':
          result= num1-num2;
          break;
      case '*':
          result = num1*num2;
          break;
      case '%':
          result = num1%num2;
          break;
      case '/':
          if(num2===0){
              return "Error , can't divisible by 0"
          }
          result= num1/num2;
          break;
      default:
          return "Error , Invalid operator "
  }
  return `${num1} ${operator} ${num2} = ${result}`;

}
