console.log("We are at tut 6");
const name = "12";
const greeting = "Good Morning";
console.log(greeting + " " + name);

let html;
html = "<h1> this is heading</h1>" + "<p> this is My para</p>";

html = html.concat("this", " str2");
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[1]);
// console.log(html.indexOf('i'));
// console.log(html.lastIndexOf('/p'));
// console.log(html.charAt(3));
// console.log(html.endsWith('fdf'));
// console.log(html.includes('he'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 6));;
// console.log(html.split('p'));
// console.log(html.replace('this', 'it'));

let fruit1 = "Orange";
let fruit2 = "Apple";
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;
