// Object freeze
let car = {
    model: 'Toyota',
    year: 2009,
};
console.log(Object.getOwnPropertyDescriptors(car));

Object.freeze(car);

car.year = 2020;
console.log(car);

console.log(Object.getOwnPropertyDescriptors(car));

// Cannot add new properties
car.newProperty = 'new Value';
console.log(car);

// Cannot delete existing properties
delete car.year;
console.log(car);

// Object Seal
let person = {
    name: 'Pesho',
    age: 20,
}

Object.seal(person)

// Can rewite property values
person.name = 'Gosho';
console.log(person);

// Cannot delete properties
delete person.year;
console.log(person);

// Cannot add new properties
person.newProp = 'new value';
console.log(person);
