//1 Biggest among 2 numbers
let num1 = Number(prompt("enter a number"));
let num2 = Number(prompt("Enter another number"));
num1>num2? console.log("first number is bigger") : console.log("Second number is bigger");

//2 special number or not
let a = Number(prompt("Enter number:"));
let sum=0;
for(let i=1; i<a && a%i==0; i++){
    sum =+ i;
}
if(sum=a){
    console.log("Perfect number")
}else{
    console.log("not a perfect number");
}

//3 even or not
let b = Number(prompt("Enter a number"));
b%2==0 ? console.log("Even number") : console.log("Odd number");

//4 biggest among 3 numbers
let x = Number(prompt("Enter 1 number"));
let y = Number(prompt("Enter 2 number"));
let z = Number(prompt("Enter 3 number"));
x>y && x>z ? console.log("1st is greatest") :
     y>x && y>z ? console.log("2nd is greatest") : 
     console.log("3rd is greatest");

//5 prininting numbers from 11 to 1
for(let i=11; 1<0; i--){
    console.log(i);
}