function solve(number, index) {

    let binaryCode = '';

    while (number > 0) {
        let leftOver = number % 2;
        number = Math.floor(number / 2);
        binaryCode += leftOver;
    }
    binaryCode = binaryCode.split('').reverse().join('').padStart(16, '0');
    let result = Number(binaryCode[15 - index]);
    console.log(result);
}
solve(2145, 5)