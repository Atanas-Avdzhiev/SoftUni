class Stringer {
    constructor(string, initialLength) {
        this.innerString = string;
        this.innerLength = Number(initialLength);
    }
    increase(length) {
        this.innerLength += Number(length);
    }
    decrease(length) {
        this.innerLength -= Number(length);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        if (this.innerString.length > this.innerLength) {
            let toCut = this.innerString.length - this.innerLength;
            let result = this.innerString.substring(0, this.innerString.length - toCut);
            return result += '...';
        }
        else {
            return this.innerString;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test