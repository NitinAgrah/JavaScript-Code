// console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

// General Loops: for, while, do-while
// let a =1;
// a +=5;
// a++;
// console.log(a);
// for(let i=0; i<10;i++){
//     console.log(i);
// }

// let j = 1;
// while (j < 5) {
//  console.log(j + 1);
//  j += 1;
// }

// let k = 1;
// do {
//     if(k===5){
//         k +=2;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 12);

let arr = [2,5,6,4,2,3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

let obje = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obje){
    console.log(`The ${key} of objcnfect is ${obje [key]}`)
}

// console.log('done');
