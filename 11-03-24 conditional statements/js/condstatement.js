//first example: comparision of 2 numbers
let a = Number(prompt("Enter a number"));
let b = Number(prompt("Enter another number"));


if(a>b){
    console.log("first number is greater");
}else if(a<b){
    console.log("second number is greater");
}else{
    console.log("Both are equal");
}

// a>b ? console.log("first number is greater") : b>a ? console.log("second number is greater") : console.log("Both are equal");

switch(true){
    case a>b : console.log("first number is greater");
    break;
    case b>a : console.log("Second number is greater");
    break;
    default: console.log("Both are equal");
    break;
}

//second example: positive or negitive
let c= Number(prompt("Enter a number to find positive or negetive"));

if(c>0){
    console.log("Positive number");
}else if(c<0){
    console.log("Negetive number");
}else{
    console.log("The number is 0")
}

c>0 ? console.log("Positive number") : c<0 ? console.log("Negetive number") : console.log("The number is 0"); 

switch(true){
    case c>0: console.log("Positive number");
    break;
    case c<0: console.log("Negetive number");
    break;
    default: console.log("This number is 0");
    break;
}

//third example: "good morning" when time is 1 to 12 and "good afternoon" when time is 13 to 18 and "good evening" when time is 18 to 24 and other than these print enter the number from 1-24
let time = Number(prompt("Enter time between 1-24"));

if(time>=1 && time<=12){
    console.log("GOOD MORNING");
}else if(time>=13 && time<=18){
    console.log("GOOD AFTERNOON");
}else if(time>=19 && time<=24){
    console.log("GOOD EVENING");
}else{
    console.log("Enter number between 1-24");
}

time>=1 && time<=12 ? console.log("GOOD MORNING") : 
time>=13 && time<=18 ? console.log("GOOD AFTERNOON") : 
time>=19 && time<=24 ? console.log("GOOD EVENING") : 
console.log("Enter number between 1-24");

switch(true){
    case time>=1 && time<=12 : console.log("GOOD MORNING");
    break;
    case time>=13 && time<=18 : console.log("GOOD AFTERNOON");
    break;
    case time>=19 && time<=24 : console.log("GOOD EVENING");
    break;
    default: console.log("Enter number between 1-24");
    break;
}