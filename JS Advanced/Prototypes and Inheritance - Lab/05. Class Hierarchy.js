function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return null;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

        convertUnits(value) {
            if (this.units === 'm') {
                return value / 100;
            } else if (this.units === 'mm') {
                return value * 10;
            }
            return value;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get area() {
            const radius = this.convertUnits(this._radius);
            return Math.PI * radius * radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.convertUnits(this._radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            const width = this.convertUnits(this._width);
            const height = this.convertUnits(this._height);
            return width * height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.convertUnits(this._width)}, height: ${this.convertUnits(this._height)}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}


let { Figure, Circle, Rectangle } = solve();
let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); // Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50