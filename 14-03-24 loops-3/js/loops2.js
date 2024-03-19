// reverse the user entered number
let rev =0;
let num = Number(prompt("Enter a number"))
{
    while(num>0)
    {
        let lastnum = num%10;
        rev = rev*10 + lastnum;
        num=Math.floor(num/10);
    }
}
console.log(rev);

//find the user entered number is strong number or not
let num1 = Number(prompt("Enter a number to check its strong number or not"));
let temp = num1;
let sum = 0;
let f = 1;
while (num1 !== 0) {
  let num2 = num1 % 10; 
  let f = 1;
  for (let i = 1; i <= num2; i++) {
    f = f * i;
  }
  sum = sum + f;
  num1 = Math.trunc(num1 / 10);
}
if(sum===temp){
    console.log("Strong Number");
}else{
    console.log("Not a Strong Number");
}

//Checking the given number is Neon number or not
let digit = Number(prompt("Enter a number to verify its neon number or not..!"));
let add = 0;
let x = digit**2;
while(x>0){
    let y = x%10;
    add = add+y;
    x = Math.trunc(x/10);
}
if(add===digit){
    console.log("Its a Neon number");
}else{
    console.log("Its not a neon number");
}