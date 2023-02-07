const person = {
    firstName: "Julius",
    surName: "Huhtasalo",
    email: "julius.huhtasalo@gmail.com",
    age: 18
};
/*
console.log(person);

function Person(name, age){
    this.name = name;
    this.age = age;
};
const person1 = new Person("Jarmo", 78);
console.log(person1);

const obj = new Object();
obj.firstname = "Kona";
obj.age = 45;
console.log(obj);
*/
person.email = "Jalmari.lonkkaluu@gmail.com";
person["age"] = 8;

person.address = 10;

delete person.email;

console.log(person);


Object.assign(person, {surName: "Kesämies"});
console.log(person);

console.log("Full name: " + person.firstName + " " + person.surName);
console.log("Email and age: " + person["email"] + " " + person["age"] + " Years old");

console.log(Object.keys(person));
console.log(Object.values(person));

const myObj = {
    nimi: "Jarni",
    sayHello: function(){
        console.log("Hello " + this.nimi);
    },
    sayGoodbye: (nimi) => {
        console.log("Bye " + nimi);
    }
};

myObj.sayHello();
myObj.sayGoodbye("kari");
