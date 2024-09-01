function factorialDivision(first, second) {

    let firstFactorial = 1;
    let secondFactorial = 1;

    for (let i = 2; i <= Math.max(first, second); i++) {
        if (i <= first) {
            firstFactorial *= i;
        }
        if (i <= second) {
            secondFactorial *= i;
        }
    }
    console.log((firstFactorial / secondFactorial).toFixed(2))
}
factorialDivision(5, 2)