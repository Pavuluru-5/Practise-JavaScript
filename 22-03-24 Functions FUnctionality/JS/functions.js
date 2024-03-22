function nameS(){
    console.log("IPL");
}
console.log(nameS());//IPL Undefined
nameS();//IPL
console.log(nameS);//entire funtion
let res = nameS();
console.log(res);//IPL undefined

let someThing= (function()
    {
    console.log("2023");
    })();//2023
console.log(someThing);//undefined
//console.log(name) : giving this above self declared function will throw an error as it is considering self declared function is a part of console that we wrote here.
(function great(a,b)
{
    console.log("KOHLI");
})();//KOHLI

function result(){
    let a= 5*8;
    return a;
    return 2+5;//we wont get output for it and also wont get error as at first return value the curser will move out of the function.
}
console.log(result());//40
console.log(result);//entire function

//Function Expression or Function variable
myFunction();
function myFunction(){
    console.log("RCB")
}//output:RCB
//wont throw error cause its a bug in js. so to overcome this they involed another concept such as the function bellow..
let funC = function(){
    console.log("CSK")
}
funC();
//Output:CSK

//nested functions
function outter(){
    console.log("Outter function");
    function inner(){
        console.log("Inner Function");
    }
    inner();
}
outter();
// inner(); can call only in outter function..
//output:
//outter function
//inner fucntion

//can we pass a function as an argument...?
function fun1(i){
    console.log(i);//DHONI
}
function fun2(){
    console.log("DHONI")
}
fun2();
let resulT= fun2();
fun1(resulT);//DHONI UNDEFINED


//Callback Functions
function callBAck(g)
{
    console.log("Du Plesis "+g);
}
callBAck(85); //Du Plesis 85
callBAck("Maxi"); //Du Plesis Maxi
callBAck([1,2,3,4]); //Du Plesis 1,2,3,4,
callBAck(true); //Du Plesis true
function callBAck(){
    console.log("Dinesh Karthik");
}
callBAck(callBAck);
// Dinesh Karthik
// Dinesh Karthik
// Dinesh Karthik
// Dinesh Karthik
// Dinesh Karthik

//output of above program will be:
// IPL
// undefined
// IPL
// [Function: nameS]
// IPL
// undefined
// 2023
// undefined
// KOHLI
// 40
// [Function: result]
// RCB
// CSK
// Outter function
// Inner Function
// DHONI
// DHONI
// undefined
// Dinesh Karthik
// Dinesh Karthik
// Dinesh Karthik
// Dinesh Karthik
// Dinesh Karthik
