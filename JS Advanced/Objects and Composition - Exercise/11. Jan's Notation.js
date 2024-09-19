function solve(input) {

    let numbers = [];

    for (const num of input) {
        if (typeof num === 'number') {
            numbers.push(num);
        }
        else {
            let operator = num;
            if (numbers.length >= 2) {
                let fiirstOperand = numbers[numbers.length - 2];
                let secondOperand = numbers[numbers.length - 1];
                let result = 0;
                switch (operator) {
                    case '+': result = fiirstOperand + secondOperand;
                        break;
                    case '-': result = fiirstOperand - secondOperand;
                        break;
                    case '*': result = fiirstOperand * secondOperand;
                        break;
                    case '/': result = fiirstOperand / secondOperand;
                        break;
                }
                numbers.pop();
                numbers.pop();
                numbers.push(result);
            }
            else {
                console.log('Error: not enough operands!');
                return;
            }
        }
    }
    if (numbers.length === 1) {
        console.log(numbers[0]);
    }
    else {
        console.log('Error: too many operands!');
    }
}
solve([5,
    3,
    4,
    '*',
    '-'])