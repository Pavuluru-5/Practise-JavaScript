//Finding nth prime number
let n = Number(prompt("Enter the number of prime numbers to print"));
let res = [];
for (let i = 2; res.length < n; i++) 
{
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) 
    {
        if (i % j === 0) 
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime) 
    {
        res.push(i);
    }
}
console.log(res[n - 1]); 



//Find the sum of digits in a given number
let digit = Number(prompt("Enter a number to find sum until single digit "));
let sum=0;
while(sum>=9 || digit > 0){
    if(digit===0){
        digit=sum;
        sum=0;
    }
    let rem = digit%10;
    sum=sum+rem;
    digit=Math.trunc(digit/10);
}
console.log(sum);



//To find the given number is magic number or not
let num = Number(prompt("Enter a number to fing it is magic number or not "));
let add=0;
while(add>=9 || num > 0){
    if(num===0){
        num=add;
        add=0;
    }
    let r = num%10;
    add=add+r;
    num=Math.trunc(num/10);
}
if(add===1){
    console.log("Its a magic number");
}else{
    console.log("Its not a magic number");
}



//Find given number is happy number or not
let number = Number(prompt("Enter 2-digit number  "));
let result=0;
let quo=Math.trunc(number/10);
let remainder = number%10
let num2 = quo**2 + remainder**2;
while(result>=9 || num2 > 0){
    if(num2===0){
        num2=result;
        result=0;
    }
    let r = num2%10;
    result=result+r;
    num2=Math.trunc(num2/10);
}
if(result===1 || result === 7){
    console.log("Its a happy number");
}else{
    console.log("Its not a happy number");
}



//Find nearest prime number
let num3 = Number(prompt("enter a value "));
for (let k = 1; k < num3; k++) {
  let p = num3 + k;
  let counts = 0;
  for (let l = 1; l <= p; l++) {
    if (p % l === 0) {
      counts++;
    }
  }
  if (counts === 2) {
    console.log(p);
    break;
  }
  let q = num3 - k;
  counts = 0;
  for (let m = 1; m <= q; m++) {
    if (q % m === 0) {
      counts++;
    }
  }
  if (counts === 2) {
    console.log(q);
    break;
  }
}