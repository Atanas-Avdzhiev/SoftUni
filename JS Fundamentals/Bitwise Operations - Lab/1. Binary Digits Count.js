function solve(number, binaryDigit) {

    let counter = 0;

    while (number > 0) {
        let leftOver = number % 2;
        number = Math.floor(number / 2);

        if (leftOver === binaryDigit) {
            counter++;
        }
    }
    console.log(counter);
}
solve(20, 0)