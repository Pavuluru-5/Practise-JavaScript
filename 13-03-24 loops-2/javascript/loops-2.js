//1 Checking it is prime number or not
let num = Number(prompt("Enter a number to find weather the number is prime or not"));
let count=0;
for(let i=1; i<=num; i++)
{
    if(num%i === 0)
    {
        count++;
    }
}
if(count==2){
    console.log("Prime Number");
}else{
    console.log("Not a prime number");
}

//2 Printing prime numbers between 1-10
let cou=0;
for(let a=1; a<=10; a++){
    for(let j=1; j<=a; j++){
        if(a%j==0){
            cou++;
        }
    }
    if(cou==2){
        console.log(a);
    }
    cou=0;
}

//3 count number of prime number between 1-5
let c = 0;
let nums = 0;
for(let x=1; x<=5; x++){
    for(let k=1; k<=x; k++){
        if(x%k==0){
            c++;
        }
    }
    if(c==2){
        nums++
    }c=0;
}
console.log(nums);

//4 Factorial Number
let n =Number(prompt("Enter the number to know the factorial"));
let fact=1;
for(let q=1; q<=n; q++){
    fact = fact*q;
}
console.log(fact);

//5 number:23 and 2*2*2=8 is output
let digit = Number(prompt("Enter a 2 digit number"));
let div = Math.trunc(digit/10);
let rem = digit%10;
let output = div**rem;
console.log(output); 