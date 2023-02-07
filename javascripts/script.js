/*
console.log('Hello from script file!');

const myVar = 'Hello';
console.log('Type of myVar:', typeof myVar);

//myVar = 10;
//console.log('Type of myVar:', typeof myVar);

let myLet = 'let';
myLet = 10;
console.log('Type of myLet:', typeof myLet);

const myNiceVariable = 10;

const x = 10;
const y = 10.46556;
const z = x + y;

console.log(typeof x, typeof y, typeof z)
console.log(x, y, z)

const a = true;
console.log(typeof a);

const str1 = "Hello";
const str2 = 'Hello';
const str3 = "'Hello'";
console.log(str3);

const person = {
    fisrtName: 'Julius',
    lastName: 'Huhtasalo'
}
console.log(typeof person, person);

let l;
console.log(typeof l);

let n = null;
console.log(typeof n, n)

const fisrtName = "Clint";
const lastName = "Eastwood";
const fullName = fisrtName + ' ' + lastName;
console.log(fullName);
console.log(fullName[3]);

//splice
//slice
//substr
//toLowerCase
//toUpperCase

console.log(fullName.toUpperCase());
console.log(fullName.replace("Clint", "John"));

const myName = "Peter";
const age = 24;

const message = `Hello ${myName}, 
are you ${age}?`;

console.log(message);
*/
let r = 10;
let s = 15;

console.log(r * 2);
console.log(r - s);
console.log(r + s);
console.log(r * s);
console.log(r / s);

console.log(r += 5);

console.log(r == s);
console.log(r != s);

console.log(10 == 10);
console.log(10 === '10');
console.log(null === undefined)

if(r > s){
    console.log('Bigger or Equal');
}
else{
    console.log("Smaller")
}

for(let i=1; i<=10; i++){
    console.log("Wataa ", i)
}
let b = 1;

while(b<=10){
    console.log("While wataa", b++)

}

let age = 18;
let message = age >= 16 ? "You can drive!" : "You cannot drive yet";
console.log(message);

function sayHello(someName){
    console.log("Helloo" + " " + someName);
}
sayHello("John Wayne");

function square(x){
    return x * x;
}

console.log(square(5));

const add = function(a, b){
    return a + b;
}
function call(fn, a, b){
    return fn(a, b);
}

console.log(add(5,4));
console.log(typeof add)

console.log(call(add, 6, 11));
/*
function sum(a, b){
    return a + b;
}
*/
const sum = (a, b) => {
    return a + b;
}
console.log(sum(10,5))





