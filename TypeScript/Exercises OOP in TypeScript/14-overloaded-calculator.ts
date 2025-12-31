type BinaryOperation = 'add' | 'subtract' | 'multiply' | 'divide';
type UnaryBinaryOperation = 'power' | 'log';
type Operation = BinaryOperation | UnaryBinaryOperation;

class Calculator {

    calculate(operation: UnaryBinaryOperation, num1: number, num2: number): number;

    calculate(operation: BinaryOperation, num1: number, num2: number, num3?: number, num4?: number): number;

    calculate(operation: Operation, num1: number, num2: number, num3?: number, num4?: number): number {

        switch (operation) {
            case 'power': return Math.pow(num1, num2);
            case 'log': return Math.log(num1) / Math.log(num2);
            case 'add': return num1 + num2 + (num3 || 0) + (num4 || 0);
            case 'subtract': return num1 - num2 - (num3 || 0) - (num4 || 0);
            case 'multiply': return num1 * num2 * (num3 || 1) * (num4 || 1);
            case 'divide': return num1 / num2 / (num3 || 1) / (num4 || 1);
        }

    }
}

const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));

// const calc = new Calculator();
// console.log(calc.calculate('power', 2, 3, 2));
// console.log(calc.calculate('add', 2));
// console.log(calc.calculate('log', 2, 3, 4, 5));
// console.log(calc.calculate('multiply', 2, 3, 4, 5, 6));