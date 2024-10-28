const car = {
    name: 'Toyota',
};

// define property with configurable true
Object.defineProperty(car, 'year', {
    configurable: true,
    writable: false,
    value: 2009,
});

console.log(car.year);
car.year = 2020;
console.log(car.year);

Object.defineProperty(car, 'year', {
    writable: true,
});

car.year = 2020;
console.log(car.year);

console.log(Object.getOwnPropertyDescriptor(car, 'year'));

let obj = {}

Object.defineProperty(obj, 'conf', {
    configurable: false,
    value: 'Hidden'
});

// Get multiple internal properties
console.log(Object.getOwnPropertyDescriptors(car));

// Set multiple internel properties
Object.defineProperties(car, {
    color: {
        writable: true,
        value: 'blue',
    },
    transmissionType: {
        writable: false,
        value: 'automatic',
    }
});
