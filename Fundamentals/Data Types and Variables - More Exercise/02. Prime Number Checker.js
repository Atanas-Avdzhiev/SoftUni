function solve(number) {

    let isPrime = true;

    for (let i = 2; i <= number - 1; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime)
}
solve(19)