//1. printing even indexes in upper case by skipping spaces
let input = prompt("Enter a string: ");
let output = "";
let toUpperCase = true; 
for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
        output += " ";//to skip the spaces
    } else {
        if (toUpperCase) 
        {
            output += input[i].toUpperCase(); 
        } else 
        {
            output += input[i].toLowerCase(); 
        }
        toUpperCase = !toUpperCase; //to change to another index..
    }
}
// console.log(output);
// let input = String(prompt("Enter a string: "));
// let str = input.split(" ");
// let result = str.join("");
// let final = ""
// for(let i =0; i<result.length; i++){
//     if(i%2===0){
//         final += result[i].toUpperCase();
//     }else{
//         final += result[i].toLowerCase();
//     }
// }
// console.log(final);// but cant avoid the spaces in the output

//2. to print unique letter in a word
let count =0 ;
var strg = String(prompt("Enter a word :"));
for (var i = 0; i < strg.length; i++) {
	var isSame = false;
	for (j = 0; j < strg.length; j++) {
		if (strg.charAt(i) == strg.charAt(j) && i != j) {
			isSame = true;
			break;
		}
	}
	if (isSame == false){
	    count++;
		console.log(strg.charAt(i));
	}
}
console.log("the number of unique letters are: "+count);

//3. string to object convertion
var jsonString = '{"name": "Geethika", "age": 21, "city": "Vijayawada"}';
var jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

//4. string half in capitals and half in lower case and mentioning the repeated character in objects
let str = String(prompt("Enter a string: "));
let len = str.length;
let strModified = "";
for (let i = 0; i < len; i++) {
    if (i < Math.trunc(len / 2)) {
        strModified += str[i].toUpperCase();
    } else {
        strModified += str[i].toLowerCase();
    }
}
console.log(strModified);
let charCount = {}; 
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}
let repeatedCount = 0;
let characters = Object.keys(charCount);
for (let i = 0; i < characters.length; i++) {
    let char = characters[i];
    if (charCount[char] > 1) {
        console.log("Character '" + char + "' is repeated " + charCount[char] + " times.");
        repeatedCount++;
    }
}
console.log("Total number of repeated characters: " + repeatedCount);


//5. split  a string into array with spaces
let sentence = String(prompt("Enter a sentence :"));
console.log(sentence.split(" "));