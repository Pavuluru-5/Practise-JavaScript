//1. if name ends with vowels must add age by 2 and if not must add age by 1
const obj = {
    naMe : "Geethik",
    age : 21
};
let stringName = obj.naMe;
let ageNum = obj.age;
let stringLen = stringName.length;
console.log(stringName[stringLen-1]);
stringName[stringLen-1]==='a' || stringName[stringLen-1]==='e'|| stringName[stringLen-1]==='i' || 
    stringName[stringLen-1]==='o' || stringName[stringLen-1]==='u' ? 
    console.log(ageNum+2) : console.log(ageNum+1);

//2. modifying original object and adding few properties such as total and grade in object
let nMarks = Number(prompt("Enter number of subjects :"));
let marksEntered = [];
for(let i = 0; i<nMarks; i++){
    let markArr = Number(prompt("Enter marks :"));
    marksEntered.push(markArr);
}
let total = 0;
for(let j = 0; j<nMarks; j++){
    total = total + marksEntered[j];
}
let maxTotal = nMarks*100;
let grade;
if(total<=maxTotal || total>maxTotal-10 ){
    grade = 'A';
} else if(total<maxTotal-10 || total>=maxTotal-20 ){
    grade = 'B';
}else if(total<maxTotal-20 || total>=maxTotal-30 ){
    grade = 'C';
}else if(total<maxTotal-30 || total>=maxTotal-40 ){
    grade = 'D';
}else{
    grade = 'Fail';
}
let myObj = {
    name : "Geethika",
    marks : marksEntered
}
let myObjMod = {
    name : "Geethika",
    marks : marksEntered,
    toTal : total,
    graDe : grade
}
console.log(myObj);
console.log(myObjMod);


//3.To convert an object into string
let objt = {
    gender : "female",
    age : 21
};
const myJSON = JSON.stringify(objt);
console.log(myJSON);

//4. to check the type of value in key and if its string should change into number and viceversa
const object = {
    naMe: "Geethika",
    age: 21
};
if (typeof object.naMe === 'string') {
    object.naMe = parseInt(object.naMe);
}
if (typeof object.age === 'number') {
    object.age = object.age.toString();
}
console.log(object);
