// function constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sing = function() {
        console.log('My angel of music');
    };
}
// Function has prototype
console.log(Person.prototype);

// Add method to prototype
Person.prototype.efficientSing = function() {
    console.log(`${this.firstName} - Sing for meeeeeee!`);
}

let person1 = new Person('Pesho', 'Ivanov');
let person2 = new Person('Georgi', 'Petrov');
console.log(person1);
console.log(person2);

person1.sing();
person2.sing();

// Different functions
console.log(person1.sing === person2.sing);

person1.efficientSing();
person2.efficientSing();

// Same fucntion
console.log(person1.efficientSing === person2.efficientSing);

// new keyword
function newOperator(constructor, ...args) {
    // Create new object
    let newObj = {};

    // Assign prototype
    Object.setPrototypeOf(newObj, constructor.prototype)

    // execute constructor with newObj as context
    constructor.apply(newObj, args);

    // Return new object
    return newObj;
}

// newOperator is the same as new keyword
let person3 = newOperator(Person, 'Ivan', 'Ivanov');
console.log(person3);
person3.efficientSing();
