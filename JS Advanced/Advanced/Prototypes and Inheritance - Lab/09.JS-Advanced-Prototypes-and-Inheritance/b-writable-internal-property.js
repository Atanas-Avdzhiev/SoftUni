let car = {
    name: 'Toyota',
};

Object.defineProperty(car, 'year', {
    value: 2009,
    writable: false,
    enumerable: true,
});

console.log(car);
console.log(car.year);
car.year = 2011;
console.log(car.year);

// Set another object as non-writable property
let store = {
    name: 'Toyota Bulgaria',
}

Object.defineProperty(car, 'store', {
    value: store,
    writable: false,
    enumerable: true,
});

// Cannot overwrite non writable reference but you can modify value by reference
console.log(car.store);
car.store = {};
car.store.name = 'alabala';
console.log(car.store);

console.log(car);
