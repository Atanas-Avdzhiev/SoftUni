let circle = {
    radius: 5,
}

Object.defineProperty(circle, 'diameter', {
    get() {
        return this.radius * 2;
    },
});

console.log(circle.diameter);
circle.radius = 15;
console.log(circle.diameter);
circle.diameter = 10;
console.log(circle.diameter); // cannot modify getter

Object.defineProperty(circle, 'area', {
    get() {
        return Math.PI * this.radius ** 2;
    },
    set(value) {
        this.radius = Math.sqrt(value / Math.PI)
    },
});

console.log(circle.area);
circle.area = 1000;
console.log(circle.radius);

// Get and set as literal
let obj = {
    _privateValue: 'Pesho',
    get name() {
        return this._privateValue;
    },
    set name(value) {
        this._privateValue = value;
    }
}

console.log(obj.name);
obj.name = 'Gosho';
console.log(obj);
