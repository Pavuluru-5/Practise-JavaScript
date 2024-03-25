//1. to check number is pallindrome or not
let z=Number(prompt("Enter number to check pallindrome or not: "));
let temp = z;
let rem = 0;
while(z>0){
    rem = (rem*10)+z%10;
    z = (z-z%10)/10; 
}
rem===temp ? console.log("Its a Pallindrome Number") : console.log("Its not a Pallindrome Number");

//2. generate a 6-digit otp
function generateOTP() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10); // math.random() is used to generate a random digit (0-9) and *10 describes prining numbers from 1 to 10
    }
    return otp;
}

let sixDigitOTP = generateOTP();
console.log("Generated OTP:", sixDigitOTP);


//3. finding nth value in fibbonicci series
// let n = Number(prompt("Enter number: "));
// let n1=0;
// let n2=1;
// let arr = [];
// for(let i=0 ; i<n; i++){
//     arr.push(n1)
//     let n3=n1+n2 ; 
//     n1=n2;
//     n2=n3;
// }
// console.log("the nth number is "+arr[n-1]);
const n = Number(prompt("Enter the value of n: "));
if (n <= 0) {
    console.log("Invalid input");
} else if (n === 1) {
    console.log("The 1st number in the Fibonacci series is: 0");
} else if (n === 2) {
    console.log("The 2nd number in the Fibonacci series is: 1");
} else {
    let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    console.log(`The ${n}th number in the Fibonacci series is: ${b}`);
}


//4. taking few inputs from user and finding its meadian
let num = Number(prompt("Enter number of observations: "));
let arr = [];
for (let i = 0; i < num; i++) {
    let observation = Number(prompt("Enter observations: "));
    arr.push(observation);
}
console.log("Given array: " + arr);
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("Sorted array: " + arr);
let median;
if (num % 2 === 0) {
    let midIndex = num / 2;
    median = (arr[midIndex - 1] + arr[midIndex]) / 2;
} else {
    let midIndex = Math.floor(num / 2);
    median = arr[midIndex];
}
console.log("The median of given numbers is: " + median);
// const count = Number(prompt("Enter the number of elements: "));
// let numbersEntered = 0;
// let median;

// if (count <= 0 || isNaN(count)) {
//     console.log("Invalid input.");
// } else {
//     let previousNumber;
//     let currentNumber;

//     for (let i = 0; i < count; i++) {
//         currentNumber = parseInt(prompt(`Enter number ${i + 1}: `));

//         if (!isNaN(currentNumber)) {
//             numbersEntered++;

//             if (numbersEntered === Math.ceil(count / 2)) {
//                 median = count % 2 !== 0 ? currentNumber : (previousNumber + currentNumber) / 2;
//                 break;
//             }

//             previousNumber = currentNumber;
//         } else {
//             console.log("Invalid input. Please enter a valid number.");
//             i--;
//         }
//     }

//     console.log(`The median is: ${median}`);
// }

//5. const num = 1235 and should be converted into binary number
let number = Number(prompt("Enter number to convert into binary number: "));
let remainder =0;
while(number>0){
    remainder = remainder*10 + number%2;
    number = Math.trunc(number/2);
}
console.log("The binary digit of the given number is: "+remainder);