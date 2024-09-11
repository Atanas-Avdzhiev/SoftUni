function solve(num1, num2) {

    let gcd = num1 % num2;

    while (gcd !== 0) {
        num1 = num2;
        num2 = gcd;
        gcd = num1 % num2;
    }
    console.log(num2);
}
solve(2154, 458)