class Planet {
    constructor(name){
        this.name = name;
    };

    sayName(){
        console.log("I am " + this.name);
    }
}

const planet = new Planet("Pluto");
planet.sayName();
console.log(planet);