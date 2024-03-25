//1. Printing +ve and -ve array in seperate arrays
let arrLen = Number(prompt("Enter array length: "));
let arr = [];
for(let i=0; i<arrLen; i++ ){
    let number = Number(prompt("Enter either positive or negetive numbers: "));
    arr.push(number);
}
let arrPositive = [];
let arrNegetive = [];
for(let j=0; j<arrLen; j++){
    if(arr[j]>0){
        arrPositive.push(arr[j]);
    }else if(arr[j]<0){
        arrNegetive.push(arr[j]);
    }
}
console.log("The enterted array: "+arr);
console.log("Positive numbers in array: "+arrPositive);
console.log("Negetive numbers in array: "+arrNegetive);

//2. Printing even places in strings
let numberOfNames = Number(prompt("Enter the number of names: "));
let names = [];
for (let i = 0; i < numberOfNames; i++) {
    let name = prompt(`Enter name ${i + 1}: `);
    names.push(name);
}
console.log("Names with even-indexed letters only:");
for (let i = 0; i < numberOfNames; i++) {
    let name = names[i];
    let evenLetters = "";
    let arr = [];
    for (let j = 0; j < name.length; j++) {
        if (j % 2 != 0) 
        {
            evenLetters += name[j];
        }
    }
    arr.push(evenLetters);
    console.log(arr);
}

//3. check wheather the string is pallindrome or not
function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
let nS = Number(prompt("Enter number of strings: "));
let strings = [];
for(let j=0;j<nS;j++){
    let word = String(prompt("Enter word: "));
    strings.push(word);
}
console.log("Palindromes in the array:");
let pallinArr = []
for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    if (isPalindrome(str)) 
    {
        pallinArr.push(str);
    }
}
console.log(pallinArr);

