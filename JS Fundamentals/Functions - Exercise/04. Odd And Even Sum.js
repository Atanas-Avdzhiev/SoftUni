function solve(number) {

    let string = number.toString()
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < string.length; i++) {
        if (Number(string[i]) % 2 === 0) {
            evenSum += Number(string[i]);
        }
        else {
            oddSum += Number(string[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
solve(1000435)