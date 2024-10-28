function getFibonator() {

    let num0 = 0;
    let num1 = 1;
    return function () {
        result = num0 + num1;
        num0 = num1;
        num1 = result;
        return num0;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13