// Finding it is armstrong number or not
let num = Number(prompt("Enter a number to check its armstrong or not: "));
let temp = num;
let numlen = num.toString().length;
let sum = 0;
while(num>0){
    let rem = num%10;
    sum = sum+ rem**numlen;
    num = Math.trunc(num/10);
}
if(sum===temp){
    console.log("Its an Armstrong number");
}else{
    console.log("Not an Armstrong number");
}


//Checking the given  number is diasarium or not
let num1 = Number(prompt("Enter a number to check its Diasarium or not: "));
let temp1 = num1;
let sum1 = 0;
let len = num1.toString().length;
    for(let i=len; i>0 ; i--)
    {
        let rem1 = num1%10;
        sum1 = sum1 + Math.pow(rem1,i);
        num1 = Math.trunc(num1/10);
    }

if(sum1===temp1){
    console.log("Diasarium")
}else{
    console.log("Not a Daisarium")
}


//To check the given number is xylem or phylem
let given = Number(prompt("Enter number if its xylem or phylem: "));
let length = given.toString().length;
let number = given.toString()
let add1 = Number(number[0])+ Number(number[length-1]);
// console.log(add1);
let add2=0;
for(let a=1; a<length-1; a++){
    add2 = add2 + Number(number[a]);
}
// console.log(add2);
if(add1 === add2){
    console.log("Xylem");
}else{
    console.log("Phylem");
}


//To check the given number is duck number or not
let num2 = Number(prompt("Enter a number to find it is duck number or not: "));
let string = num2.toString();
let numOfDig = string.length;
let isDuck = false;
for(let b=1; b<numOfDig+1; b++){
    if(string[b]==0){
        isDuck = true;
    }
}
if(string[0]===0){
    console.log("Its not a duck number");
}else if (isDuck==true){
    console.log("It is a duck number");
}else{
    console.log("Its not a duck number");
}

//Print twin prime numbers from 1 to 100
let cou=0;
let arr = [];
for(let a=1; a<=100; a++){
    for(let b=1; b<=a; b++){
        if(a%b==0){
            cou++;
        }
    }
    if(cou==2){
        arr.push(a);
    }
    cou=0;
}
console.log(arr);
for(let c=0;c<arr.length;c++){
    if(arr[c]-arr[c-1]==2)
    {
        console.log(arr[c],arr[c-1]);
    }
    else if(arr[c]-arr[c+1]==2)
    {
        console.log(arr[c],arr[c+1]);
    }else{
        continue;
    }
}