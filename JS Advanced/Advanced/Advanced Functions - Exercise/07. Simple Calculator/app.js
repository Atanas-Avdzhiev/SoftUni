function calculator() {
    let firstSelector;
    let secondSelector;
    let lastSelector;
    return {
        init: function (selector1, selector2, resultSelector) {
            firstSelector = document.querySelector(selector1);
            secondSelector = document.querySelector(selector2);
            lastSelector = document.querySelector(resultSelector);
        },
        add: function () {
            let addResult = Number(firstSelector.value) + Number(secondSelector.value);
            lastSelector.value = addResult;
        },
        subtract: function () {
            let subtractResult = Number(firstSelector.value) - Number(secondSelector.value);
            lastSelector.value = subtractResult;
        }
    }
}
const calculate = calculator();
console.log(calculate.init('#num1', '#num2', '#result'));