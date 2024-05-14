function solve(number) {

    let binaryCode = '';

    while (number > 0) {
        let leftOver = number % 2;
        number = Math.floor(number / 2);
        binaryCode += leftOver;
    }
    binaryCode = binaryCode.split('').reverse().join('').padStart(8, '0');
    let result = Number(binaryCode[6]);
    console.log(result);
}
solve(51)