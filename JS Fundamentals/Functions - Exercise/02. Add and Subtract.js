function addAndSubtract(first, second, third) {

    function sum(firstNumber, secondNumber) {
        let sum = firstNumber + secondNumber;
        return sum;
    }
    let sumOfTwoNumbers = sum(first, second);

    function subtract(sum, thirdNumber) {
        let subtract = sum - thirdNumber;
        return subtract;
    }
    let subtractOfTwoNumbers = subtract(sumOfTwoNumbers, third)
    console.log(subtractOfTwoNumbers)
}
addAndSubtract(23, 6, 10)