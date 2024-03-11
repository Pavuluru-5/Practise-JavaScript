//checking the wheather condition and predicting
let temp = Number(prompt("Enter templerature"))
if(temp<=18){
    console.log("Cold");
}else if(temp>18 && temp<=28){
    console.log("Neutral");
}else{
    console.log("Hot Wheather");
}

//leap year or not

let year = Number(prompt("enter year"))
year%4==0 || year%100==0 || year%400==0 ? console.log("Leap Year") : console.log("Not a leap year");
// if(year<100){
//      if(year%4==0){
//      console.log("leap year");
//      }else{
//      console.log("not a leap year");
// }}else if(year>=100 && year<=1000){
//      if(year%4==0 && year%100==0){
//      console.log("leap year");
//      }else{
//      console.log("not a leap year");
// }}else{
//      if(year%4==0 && year%400==0 && year%100==0){
//           console.log("leap year");
//      }else{
//           console.log("not a leap year");
//      }
// }

//vowel checker
let character = String(prompt("enter letter from a to z to check number is vowel or not..!"));
character=='a' || character=='e'|| character=='i' || character=='o' ||character=='u' || 
character=='A' || character=='E'|| character=='I' || character=='O' ||character=='U' 
    ? console.log("its an vowel") : console.log("its not a vowel");

//finding weather the triangle is equalateral triangle  or Isosceles triangle or scalene triangle
let side1 = Number(prompt("Enter first side of triangle"));
let side2 = Number(prompt("Enter second side of triangle"));
let side3 = Number(prompt("Enter third side of triangle"));
if(side1==side2 && side2==side3 && side1==side3){
    console.log("Its an Equilateral Triangle");
}else if(side1==side2 || side2==side3 || side1==side3){
    console.log("Its an Isosceles Triangle");
}else{
    console.log("Its a Scalene Triangle");
}


//check number is even or odd
let a = Number(prompt("Enter a number to find whether its even or odd"));
a%2==0 ? console.log("Its an even number") : console.log("Its an odd number");

//acessing weekdays with number
let x=Number(prompt("Enter a number between 1 to 7"));
switch(true){
    case x==1 : console.log("Monday");
    break;
    case x==2 : console.log("Tuesday");
    break;
    case x==3 : console.log("Wednesday");
    break;
    case x==4 : console.log("Thursday");
    break;
    case x==5 : console.log("Friday");
    break;
    case x==6 : console.log("Saturday");
    break;
    case x==7 : console.log("Sunday");
    break;
    default: console.log("Enter number in given range");
    break;
}

//acessing months with number form 1-12
let y=Number(prompt("Enter a number between 1 to 12"));
switch(true){
    case y==1 : console.log("January");
    break;
    case y==2 : console.log("February");
    break;
    case y==3 : console.log("March");
    break;
    case y==4 : console.log("April");
    break;
    case y==5 : console.log("May");
    break;
    case y==6 : console.log("June");
    break;
    case y==7 : console.log("July");
    break;
    case y==8 : console.log("August");
    break;
    case y==9 : console.log("September");
    break;
    case y==10 : console.log("October");
    break;
    case y==11 : console.log("November");
    break;
    case y==12 : console.log("December");
    break;
    default: console.log("Enter number in given range");
    break;
}