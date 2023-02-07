"use strict"

const myArray = ["one", "two", "three"];
console.log(myArray);

const myNumArray = new Array(1,2,3);


console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

console.log("Array Length " + myArray.length)

myArray[3] = "four";
console.log(myArray);

myArray.push("five");
console.log(myArray);

const val = myArray.pop();
console.log(myArray);
console.log(val);

myArray.unshift("zero");
console.log(myArray);

const str = myArray.shift();
console.log(myArray)

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}

for(const str of myArray){
    console.log(str);
}

console.log("ForEach Loop");
myArray.forEach((item) => console.log(item));
  
const multipliedArray = myNumArray.map((item) => item * 2)
console.log(multipliedArray);
