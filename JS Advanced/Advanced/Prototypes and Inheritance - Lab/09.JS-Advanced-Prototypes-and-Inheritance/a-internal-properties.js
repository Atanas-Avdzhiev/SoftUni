let car = {
    name: 'Toyota',
};

// define internal property
Object.defineProperty(car, 'model', {
    value: 'Verso',
    enumerable: true,
});

// Check if property is enumerable
let internalProperties = Object.getOwnPropertyDescriptor(car, 'model');
console.log(internalProperties);

// Set property with enumerable false
Object.defineProperty(car, 'hidden', {
    value: 'secret',
    enumerable: false,
})

// Hidden doesnt iterate
for (const propName in car) {
    console.log(propName);
}

// Get keys (without hidden property)
let keys = Object.keys(car);
console.log(keys);

// convert to JSON (without hidden property)
console.log(JSON.stringify(car));

console.log(car);
