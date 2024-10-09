function Animal(species) {
    this.species = species;
}

Animal.prototype.eat = function() {
    console.log(`${this.species} - Omnomnomnom`);
}

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;

    Animal.call(this, 'cat');
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function() {
    console.log(`${this.name} - Meowww...`);
}

let firstCat = new Cat('Navcho', 'persian');
console.log(firstCat); // species is own property
firstCat.meow() // this is comming from cat prototype
firstCat.eat(); // thisi s comming from animal prototype

console.log(firstCat instanceof Cat);
console.log(firstCat instanceof Animal);


