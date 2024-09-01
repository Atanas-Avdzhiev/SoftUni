function solve(number, index) {

    let binaryCode = '';

    while (number > 0) {
        let leftOver = number % 2;
        number = Math.floor(number / 2);
        binaryCode += leftOver;
    }
    binaryCode = binaryCode.split('').reverse().join('').padStart(12, '0');
    binaryCode = binaryCode.split('');
    binaryCode[11 - index] = 0;
    binaryCode = binaryCode.reverse().join('');
    let result = 0;
    for (let i = 0; i < binaryCode.length; i++) {
        let currentDigit = Number(binaryCode[i]);
        result += currentDigit * Math.pow(2, i);
    }
    console.log(result);
}
solve(1313, 5)