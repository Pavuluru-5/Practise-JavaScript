console.log("Printing arthemetic operators");
let a=Number(prompt("Print first number to perform operations"));
let b=Number(prompt("Print second number to perform operations"));

//arthimetic operators
let sum = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let mod = a%b;
let exp = a**2;
console.log(sum, sub, mul, div, exp, mod);

//assignment operators
let equal = a=b;
let addnequal=5;
addnequal +=a;
let subnequal = 2;
subnequal -=b;
let mulnequal = 6;
mulnequal *=b;
let divnequal = 7;
divnequal /=a;
let modnequal = 8;
modnequal *=addnequal;
console.log(equal, addnequal, subnequal, mulnequal, divnequal, modnequal);

//logical operators
if(a==10 && b==10){
    console.log("Both are same number..!");
}else if(a==10 || b==10){
    console.log("one of two numbers is 10");
}else if(a!=10 && b==10){
    console.log("First number is not 10");
}else{
    console.log("neither of the numbers are 10");
}

//Increment & Decrement
let increment=a++;
let decrement=b--;
console.log(increment, decrement);

//conditional operators

if(a>b){
    console.log(`${a} is greater number than ${b}`);
}else if(a<b){
    console.log(`${b} is greater number than ${a}`);
}
else if(a>=b){
    console.log(`${a} is greater than and equal to ${b}`);
}
else if(a<=b){
    console.log(`${a} is less than or equal to ${b}`);
}
else if(a==b){
    console.log(`${a} is equal to ${b}`);
}
else if(a===b){
    console.log(`${a} is equal to and same datatype as ${b}`);
}