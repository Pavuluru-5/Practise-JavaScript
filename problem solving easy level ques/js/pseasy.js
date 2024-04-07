//1. sum of numbers using functions
function sum(num1,num2) {
    return num1+num2;
}
console.log(sum(2,3));

//2. Write a function that takes an integer minutes and converts it to seconds.
function sec(min){
    return min*60;
}
console.log(sec(6));

//3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function increment(num){
    return num+1;
}
console.log(increment(9));

//4. Create a function that takes the age in years and returns the age in days
function days(age){
    if(leapYear==true){
        return age*366;
    }else{
        return age*365;
    }
}
let age = 5
let leapYear = false;
for(let i=0; i<age; i++){
    if(i%4===0 && i%400===0){
        leapYear = true;
    }else{
        leapYear = false;
    }
}
console.log(days(age));

//5. Create a function that takes voltage and current and returns the calculated power.
function power(vol,cur){
    return vol*cur;
}
console.log(power(7,8))

//6. Write a function that returns the string "something" joined with a space " " and the given argument a.
function joinSomething(a) {
    return "something" + " " + a;
}
var result = joinSomething(10);
console.log(result); 

//7. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function check(a,b){
    if(a===10 || b===10){
        return true;
    }else if(a+b ===10){
        return true;
    }else{
        return false;
    }
}
console.log(check(8,3));

//8. Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function stringLen(str1,str2){
    if(str1.length===str2.length){
        return true;
    }else{
        return false;
    }
}
console.log(stringLen("happy", "bdyaa"));

//9. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555)
function formatPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        return "Invalid input: Array must contain exactly 10 numbers.";
    }
    var phoneNumber = numbers.join('');
    var formattedNumber = '(' + phoneNumber.substring(0, 3) + ') ' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6);
    return formattedNumber;
}

var numbers = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
var phoneNumber = formatPhoneNumber(numbers);
console.log(phoneNumber);

//10. Create a function that returns an array of strings sorted by length in ascending order.
//Example:
//sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
function ascendingLen(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1].length < arr[j].length) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let array = ["a", "ccc", "bb", "dddd"];
console.log(ascendingLen(array));

//11. Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
const greeting = (name) => `Hello, ${name}!`;
console.log(greeting("John")); 

// 12. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
let strLenOut = Number(prompt("Enter array length: "));
let strLenIn = Number(prompt("Enter array length: "));
let arrayOut = [];

for(let i=0; i<strLenOut; i++){
    let  arrayIn = [];
    for(let j=0; j<strLenIn; j++){
        let num = Number(prompt("Enter numbers in array: "));
        arrayIn.push(num);
    }
    arrayOut.push(arrayIn);
}
console.log(arrayOut);
let maxArray = [];
for(let i=0; i<strLenOut; i++){
    let maxNum = Math.max(...arrayOut[i]);
    maxArray.push(maxNum);
}
console.log(maxArray);

//13. Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40
let arR = [];
let stringLen = Number(prompt("Enter array length: "));
for (let i = 0; i < stringLen; i++) {
    let numBer = Number(prompt("Enter number: "));
    arR.push(numBer);
}
console.log(arR);
for (let i = 0; i < stringLen - 1; i++) {
    for (let j = 0; j < stringLen - i - 1; j++) {
        if (arR[j] > arR[j + 1]) {
            let temp = arR[j];
            arR[j] = arR[j + 1];
            arR[j + 1] = temp;
        }
    }
}
console.log("Second Largest number is:", arR[stringLen-2]);

//14. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
let aRR = [];
let stringLength = Number(prompt("Enter string length: "));
for (let i = 0; i < stringLength; i++) {
    let number = prompt("Fill indexes in array: ");
    aRR.push(number);
}
console.log("Original array:", aRR);
let uniqueArray = [];
for (let i = 0; i < aRR.length; i++) {
    let isUnique = true;
    for (let j = 0; j < uniqueArray.length; j++) {
        if (aRR[i] === uniqueArray[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        uniqueArray.push(aRR[i]);
    }
}
console.log("Array after removing duplicates:", uniqueArray);

//15. Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
// Example:
// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
let aRr = [];
let stringLengt = Number(prompt("Enter string length: "));
for (let i = 0; i < stringLengt; i++) {
    let number = prompt("Fill indexes in array: ");
    aRr.push(number);
}
console.log("Original array:", aRr);
let occurrenceCount = {}; // Object to store occurrence count of each element
for (let i = 0; i < aRr.length; i++) {
    let element = aRr[i];
    if (occurrenceCount[element]) {
        occurrenceCount[element]++;
    } else {
        occurrenceCount[element] = 1;
    }
}
let uniqueKeys = [];
for (let key in occurrenceCount) {
    if (occurrenceCount[key] === 1) {
        uniqueKeys.push(key);
    }
}
console.log("Unique keys in the array:", uniqueKeys);

//16. Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:
// charCount("c", "Chamber of secrets") ➞ 1
let sTR =String(prompt("Enter String: "));
let countSTR = 0
for(let i=0; i<sTR.length; i++)
{
    if(sTR[0]===sTR[i])
        {
            countSTR++;
        }
}
console.log(sTR,sTR[0],countSTR);

//17. Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:
// countVowels("Celebration") ➞ 5
let strING = String(prompt("Enter string to find vowels count: "));
let cnt = 0;
let strOut = strING.toLowerCase();
for(let i=0; i<strOut.length; i++){
    if(strOut[i]==='a' || strOut[i]==='e' || strOut[i]==='i' || strOut[i]==='o' || strOut[i]==='u'){
        cnt++;
    }
}
console.log(strING,cnt);

//18. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
let strNg = prompt("Enter a string: ");
let strFinal = "";
for (let i = 0; i < strNg.length; i++) {
    let char = strNg[i];
    if (char === char.toLowerCase()) {
        strFinal += char.toUpperCase();
    } else {
        strFinal += char.toLowerCase();
    }
}
console.log(strFinal);

//19. Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
// 			Input:      n=5
// 			Output:   2 4 6 8 10
let intN = Number(prompt("Enter number of numbers: "));
function inTeger(nUM){
    for(let i=nUM; i<=intN; i++){
        let res = i*2;
        console.log(res)
    }
}
inTeger(1);

// 20. Create Function that will take one parameter and return type of the data.
// 			Input:       500
// 			Output:     Integer
// 			Input:       Coding
// 			Output:    String
function typeCheck(char){
    return typeof(char);
}
console.log(typeCheck(500));
console.log(typeCheck("Coding"));

// 21. Program to find greatest of three numbers(using ternery operator).
// 			Input:  4 8 2
// 			Output: 8 is gretest
let numberOne = Number(prompt("Enter 1st Number: "));
let numberTwo = Number(prompt("Enter 2nd Number: "));
let numberThree = Number(prompt("Enter 3rd Number: "));
numberOne>numberTwo && numberOne>numberThree ? 
    console.log(numberOne) : numberTwo>numberOne && numberTwo>numberThree ?
    console.log(numberTwo) : console.log(numberThree);

// 22. C Program to find factorial of number.
// 			Input: n=5
// 			Output: 120
// 			Explanation: 5 x 4 x 3 x 2 x 1 = 120
let numBEr = Number(prompt("Enter a number to find the factorial: "));
let factNum = 1;
for(let i=1; i<=numBEr; i++){
    factNum = factNum*i;
}
console.log(factNum);

// 23. C Program to arrange numbers in ascending order
// 			Input: [2,3,1,5,4]
// 			Output: [1,2,3,4,5]
// 		        Sort the Array using loop only(you can not use predefined function).
let arrInput=[];
let lenIn = Number(prompt("Enter the length of array: "));
for(let i=0; i<lenIn; i++)
{
    let num = Number(prompt("enter a number into string: "));
    arrInput.push(num);
}
for(let j=0; j<lenIn; j++){
    for(let k=0; k<j; k++){
        if(arrInput[k]>arrInput[j]){
            let temp = arrInput[k];
            arrInput[k]=arrInput[j];
            arrInput[j]= temp;
    }
    }
}
console.log(arrInput);

// 24.  Print Patter using loop.
// 			1
// 			1 2
// 			1 2 3
// 			1 2 3 4
//   		1 2 3 4 5
for(let i=1; i<6; i++){
    let row = "";
    for(let j = 1; j<i+1; j++){
        row = row + j + " ";
    }
    console.log(row);
}

//25. Program to Calculate the Power of a Number(using loop only).
// 			Input: n=5, p=3
// 			Output: 5 ^ 3 = 125
// 			Explanation: 5 x 5 x 5 = 125
let nUm = Number(prompt("Enter a NUmber: "));
let pOwer = Number(prompt("Enter Power: "));
let reSult = 1;
for(let i=0; i<pOwer; i++){
    reSult = reSult * nUm;
}
console.log(reSult);

// 26. Program to Check Whether a Number is Prime or Not
// 			Input: 9
// 			Output: 9 is not a prime no
// 			Input: 7
// 			Output : 7 is a prime no
let nUM = Number(prompt("Enter a number to check prime number: "));
let count =0;
for(let i =1; i<=nUM; i++){
    count = 0;
    for(let j = 1; j<=i; j++){
        if(i%j===0){
            count++;
        }
    }
}
if(count===2){
    console.log(`${nUM} is a prime number`)
}else{
    console.log(nUM+ "is not a prime number")
}

//28. Program to Display Characters from A to Z Using Loop with count.
// 			Output: A1 B2 C3 D4 E5 F6 ……. Z26
for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    let character = String.fromCharCode(i);
    let count = i - 'A'.charCodeAt(0) + 1;
    console.log(character + count);
}

//29. Program to find a missing number
// 			Input:  n=5(length of array), arr= [5,3,1,4]
// 			Output: 2 is missing
// 		Using loop only(you can not use predefined function)
let inLen = Number(prompt("Enter length of an array: "));
let inArr = [];
let tempArr = [];
for(let i=0; i<inLen-1; i++){
    let num = Number(prompt("Enter number in array: "));
    inArr.push(num)
}
for(let i=1; i<=inLen; i++){
    tempArr.push(i)
}
console.log(inArr,tempArr);
let missNumber;
for (let i = 0; i < tempArr.length; i++) {
    if (!inArr.includes(tempArr[i])) {
        missNumber = tempArr[i];
        break;
    }
}
console.log(missNumber + " is missing");

// 30. Program to count vowels and consonants in a given String.
// 			Input: i am ram
// 			Output: 3 vowels 3 consonants.
let inPut = String(prompt("Enter a sentence: "));
let sentence = inPut.toLowerCase();
let vowels = 0;
let consonents = 0;
let space = 0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i]==='a' || sentence[i]==='e' || sentence[i]==='i' || sentence[i]==='o' || sentence[i]==='u'){
        vowels++;
    }
    else if(sentence[i]===' '){
        space++;
    }
    else{
        consonents++;
    }
}
// console.log(consonents);
// console.log(space);
console.log(vowels+" vowels "+(consonents)+" consonents." );

// 31.  program to insert  the elements of an array for specific index.
// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// 			Output: [1,2,3,4,5,6,78,9,10]
let inputArray= [];
let lenOfArr = Number(prompt("Enter array length: "));
for(let  i=0; i<lenOfArr; i++){
    let num = Number(prompt("Enter numbers in array: "));
    inputArray.push(num);
}
let indexOfArr = Number(prompt("Enter index you wanna include in: "));
let eleInset = Number(prompt("Enter number to be inserted: "));
console.log(inputArray,indexOfArr,eleInset);
for(let i=0; i<lenOfArr; i++){
    if(i===indexOfArr){
        inputArray[i+1]=parseInt(inputArray[i].toString()+inputArray[i+1].toString());
        inputArray[i]=eleInset;
    }
}
console.log(inputArray);

//32. Reverse a number using while Loop
// 			Input: 123
// 			Output: 321
let numEntered = Number(prompt("Enter a number: "));
let reverseNum = 0;
while(numEntered>0){
    reverseNum = reverseNum*10 + numEntered%10;
    numEntered = Math.floor(numEntered/10);
}
console.log(reverseNum);

// 33.  Count occurrence of number:
// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 7 present 2 times.
let inputArrayy = [];
let arrInputLen = Number(prompt("Enter length of the array: "));
let numToFind = Number(prompt("Enter number to be found in the array: "));
let numRepeat = 0;
for(let i=0; i<arrInputLen; i++){
    let num = Number(prompt("Enter numbers into array: "));
    inputArrayy.push(num);
}
for(let i=0; i<arrInputLen; i++){
    if(inputArrayy[i]===numToFind){
        numRepeat++;
    }
}
console.log(numToFind+" present "+numRepeat+" times.")