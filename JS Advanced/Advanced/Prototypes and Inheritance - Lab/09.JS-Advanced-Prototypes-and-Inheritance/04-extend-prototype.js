function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

function Person(name) {
    this.name = name;
}

Person.prototype.toString = function() {
    return `I am ${this.name}!`
}

extendPrototype(Person);

let person = new Person('Pesho');
console.log(person.species);
console.log(person.toSpeciesString());
