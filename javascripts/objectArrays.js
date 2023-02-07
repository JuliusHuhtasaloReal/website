const people = [
    {name: "John", email: "john@wayne.net"},
    {name: "Tony", email: "tony@stark.com"},
    {name: "Angelina", email: "angelina@wataa.com"}
];

console.log(people);

for(let i=0; i<people.length; i++){
    console.log(people[i].name + " - " + people[i].email);
}

people.forEach((person) => {
    console.log(person.name + " <--> " + person.email);
})

for(const person of people){
    console.log(person["name"] + " | " + person["email"])
}