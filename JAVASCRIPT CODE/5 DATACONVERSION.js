// Type conversion
// console.log('Welcome to tut5');
// let myVar;
// myVar = String(34);
// console.log(myVar, (myVar.length));
// let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, typeof date);

let arr = String(1, 2, 3, 4, 5, 7,9);

console.log(arr.length, typeof arr,arr);

let i = 75;
console.log(i.toString(), typeof i);
// console.log(i,(typeof i))

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(stri, typeof stri);

let number = parseFloat("34.098");

console.log(number.toFixed(2), typeof number);

// Type coercion

let mystr = Number("698");
let mynum = 34;
my = mystr + mynum;
console.log(mystr + mynum);
console.log(my);
