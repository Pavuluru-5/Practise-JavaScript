let nam = "Geethika";
let fathername = "Narendra";
let mailId = "geethikapavuluru@gmail.com";
console.log(nam,typeof nam, fathername, mailId);
//string//

let num =20;
let a = 30;
let c = a + num;
console.log(num,a,c, typeof num);
//number//

let d = false
let e = true
console.log(d, typeof e);
//boolean//

let f = null;
console.log(f, typeof f);
//null//

let g;
let h = undefined;
g;//gives error if we print in console..
console.log(typeof g, typeof h);
//undefined//

let i = [1,2,3,4,5];
let j = [7,8,9,0,6];
console.log(i,j,typeof i, typeof j);
i.push(7);
console.log(i);
//object or array//