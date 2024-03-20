//to reverse a number
let n= prompt("enter a number to be revesed: ");
let st = n.toString().split('').reverse().join('')
console.log(st)

//to print n power p
let a = prompt("enter number: ");
let p = prompt("enter power: ");
console.log(a**p);

//reverse a number
//reverse a particular digit
let z=Number(prompt("Enter number: "));
let rem = 0;
while(z>0){
    rem = (rem*10)+z%10;
    //z=Math.floor(z/10);
    z = (z-z%10)/10; 
}
console.log(rem);